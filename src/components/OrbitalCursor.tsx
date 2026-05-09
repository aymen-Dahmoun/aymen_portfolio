import { useEffect, useRef } from "react";

interface Planet {
    baseRadius: number;
    baseSpeed: number;
    angle: number;
    opacity: number;
    targetOpacity: number;
    dotRadius: number;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function OrbitalCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const isMobile = window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches;
        if (isMobile) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        let mouseX = -200;
        let mouseY = -200;
        let prevMouseX = -200;
        let prevMouseY = -200;

        let renderX = -200;
        let renderY = -200;

        let smoothSpeed = 0;

        let isHovering = false;
        let rafId: number;
        const planets: Planet[] = [
            { baseRadius: 18, baseSpeed: 0.038, angle: 0, opacity: 0, targetOpacity: 1, dotRadius: 4 },
            { baseRadius: 26, baseSpeed: 0.027, angle: Math.PI, opacity: 0, targetOpacity: 0, dotRadius: 3.5 },
            { baseRadius: 34, baseSpeed: 0.020, angle: Math.PI / 2, opacity: 0, targetOpacity: 0, dotRadius: 3 },
        ];

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        window.addEventListener("mousemove", onMouseMove);

        const HOVER_SELECTORS = 'a, button, [data-cursor="clickable"], input, label, select, textarea';

        const onMouseOver = (e: MouseEvent) => {
            isHovering = !!(e.target as Element)?.closest(HOVER_SELECTORS);
        };
        window.addEventListener("mouseover", onMouseOver);

        const LERP_FACTOR = 0.11;
        const SPEED_LERP = 0.10;

        const draw = () => {
            renderX = lerp(renderX, mouseX, LERP_FACTOR);
            renderY = lerp(renderY, mouseY, LERP_FACTOR);

            const dx = mouseX - prevMouseX;
            const dy = mouseY - prevMouseY;
            const rawSpeed = Math.sqrt(dx * dx + dy * dy);
            prevMouseX = mouseX;
            prevMouseY = mouseY;

            smoothSpeed = lerp(smoothSpeed, rawSpeed, SPEED_LERP);

            let activePlanets = 1;
            if (smoothSpeed > 2.5) activePlanets = 2;
            if (smoothSpeed > 6.0) activePlanets = 3;

            planets.forEach((p, i) => {
                p.targetOpacity = i < activePlanets ? 1 : 0;
            });

            const speedBoost = 1 + Math.min(smoothSpeed * 0.04, 0.6);
            const radiusBoost = isHovering ? 0.7 : 1 + Math.min(smoothSpeed * 0.015, 0.25);
            const sunGlowScale = isHovering ? 1.5 : 1;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            planets.forEach((p) => {
                p.opacity = lerp(p.opacity, p.targetOpacity, 0.06);

                if (p.opacity < 0.01) {
                    p.angle += p.baseSpeed * speedBoost;
                    return;
                }

                p.angle += p.baseSpeed * speedBoost;

                const orbitR = p.baseRadius * radiusBoost;
                const px = renderX + Math.cos(p.angle) * orbitR;
                const py = renderY + Math.sin(p.angle) * orbitR;

                ctx.save();
                ctx.globalAlpha = p.opacity * 0.85;
                ctx.shadowColor = "#a5b4fc";
                ctx.shadowBlur = 8;
                ctx.beginPath();
                ctx.arc(px, py, p.dotRadius, 0, Math.PI * 2);

                const grad = ctx.createRadialGradient(px, py, 0, px, py, p.dotRadius);
                grad.addColorStop(0, "#ffffff");
                grad.addColorStop(1, "#93c5fd");
                ctx.fillStyle = grad;
                ctx.fill();
                ctx.restore();
            });

            ctx.save();

            const glowBlur1 = 22 * sunGlowScale;
            const glowBlur2 = 12 * sunGlowScale;

            ctx.shadowColor = "#6366f1";
            ctx.shadowBlur = glowBlur1;
            ctx.beginPath();
            ctx.arc(renderX, renderY, 7, 0, Math.PI * 2);
            const sunGrad = ctx.createRadialGradient(renderX, renderY, 0, renderX, renderY, 7);
            sunGrad.addColorStop(0, "#a5b4fc");
            sunGrad.addColorStop(0.5, "#6366f1");
            sunGrad.addColorStop(1, "#4338ca");
            ctx.fillStyle = sunGrad;
            ctx.fill();

            ctx.shadowBlur = glowBlur2;
            ctx.shadowColor = "#818cf8";
            ctx.beginPath();
            ctx.arc(renderX, renderY, 4, 0, Math.PI * 2);
            ctx.fillStyle = "#c7d2fe";
            ctx.fill();

            ctx.restore();

            rafId = requestAnimationFrame(draw);
        };

        rafId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseover", onMouseOver);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                zIndex: 99999,
            }}
        />
    );
}
