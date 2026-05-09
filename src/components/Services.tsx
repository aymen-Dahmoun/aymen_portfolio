import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import type { MotionValue } from "framer-motion";
import { motion, useAnimationFrame, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useDevice } from "../hooks/useDevice";
import {
  Code2,
  Smartphone,
  Server,
  Layers,
  Database,
  Network,
  Rocket,
  Wrench,
  Cpu
} from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactElement<{ color?: string }>;
}

const PRIMARY_COLOR = "#4f46e5";

const getServicesData = (t: (key: string, options?: Record<string, unknown>) => string | unknown): ServiceProps[] => [
  {
    title: t("services.frontendTitle") as string,
    description: t("services.frontendDesc") as string,
    details: t("services.frontendDetails", { returnObjects: true }) as string[],
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: t("services.mobileTitle") as string,
    description: t("services.mobileDesc") as string,
    details: t("services.mobileDetails", { returnObjects: true }) as string[],
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: t("services.backendTitle") as string,
    description: t("services.backendDesc") as string,
    details: t("services.backendDetails", { returnObjects: true }) as string[],
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: t("services.fullstackTitle") as string,
    description: t("services.fullstackDesc") as string,
    details: t("services.fullstackDetails", { returnObjects: true }) as string[],
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: t("services.dbTitle") as string,
    description: t("services.dbDesc") as string,
    details: t("services.dbDetails", { returnObjects: true }) as string[],
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: t("services.apiTitle") as string,
    description: t("services.apiDesc") as string,
    details: t("services.apiDetails", { returnObjects: true }) as string[],
    icon: <Network className="w-6 h-6" />,
  },
  {
    title: t("services.saasTitle") as string,
    description: t("services.saasDesc") as string,
    details: t("services.saasDetails", { returnObjects: true }) as string[],
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: t("services.optTitle") as string,
    description: t("services.optDesc") as string,
    details: t("services.optDetails", { returnObjects: true }) as string[],
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    title: t("services.maintTitle") as string,
    description: t("services.maintDesc") as string,
    details: t("services.maintDetails", { returnObjects: true }) as string[],
    icon: <Wrench className="w-6 h-6" />,
  },
];

const Planet = ({
  index,
  total,
  radius,
  globalAngle,
  service,
  isHovered,
  isDimmed,
  onHover,
  onLeave,
}: {
  index: number;
  total: number;
  radius: number;
  globalAngle: MotionValue<number>;
  service: ServiceProps;
  isHovered: boolean;
  isDimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const offset = (index / total) * Math.PI * 2;
  const x = useTransform(globalAngle, (v: number) => Math.cos(v + offset) * radius);
  const y = useTransform(globalAngle, (v: number) => Math.sin(v + offset) * radius);

  const floatingY = isHovered ? 0 : Math.sin(index) * 6;
  const isLeftHemisphere = Math.cos(offset) < -0.1;

  return (
    <motion.div
      style={{ x, y, zIndex: isHovered ? 50 : 20 }}
      className="absolute flex items-center justify-center cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      animate={{ opacity: isDimmed ? 0.3 : 1 }}
      transition={{ opacity: { duration: 0.3 } }}
    >
      <motion.div
        animate={{
          y: floatingY,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{
          y: { repeat: Infinity, duration: 2 + (index % 3) * 0.4, repeatType: "reverse", ease: "easeInOut" },
          scale: { duration: 0.3 }
        }}
        className="relative flex items-center justify-center"
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center bg-zinc-950 border transition-colors shadow-sm"
          style={{ 
             borderColor: isHovered ? PRIMARY_COLOR : '#27272a',
             backgroundColor: isHovered ? '#18181b' : '#09090b',
             boxShadow: isHovered ? `0 0 15px ${PRIMARY_COLOR}30` : 'none' 
          }}
        >
          {React.cloneElement(service.icon, { color: isHovered ? PRIMARY_COLOR : '#a1a1aa' })}
        </div>

        <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: isLeftHemisphere ? 10 : -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isLeftHemisphere ? 10 : -10, transition: { duration: 0.2, delay: 0.5 } }}
            className={`absolute top-1/2 -translate-y-1/2 ${isLeftHemisphere ? 'right-[calc(100%+20px)]' : 'left-[calc(100%+20px)]'} w-72 bg-zinc-900/95 backdrop-blur-sm border border-zinc-800 p-5 rounded-xl shadow-2xl pointer-events-auto`}
          >
            <h4 style={{ color: PRIMARY_COLOR }} className="font-bold text-base mb-1">{service.title}</h4>
            <p className="text-zinc-400 text-xs leading-relaxed mb-3 pb-3 border-b border-zinc-800">{service.description}</p>
            <ul className="space-y-2 mb-4">
              {Array.isArray(service.details) && service.details.map((detail, idx) => (
                <li key={idx} className="text-zinc-300 text-xs flex items-start">
                  <span className="text-indigo-600 mr-2 mt-0.5">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <a 
              href="#contact" 
              className="inline-block px-3 py-2 bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 border border-indigo-600/20 text-xs font-medium rounded-md transition-colors w-full text-center"
            >
              Contact Me
            </a>
          </motion.div>
        )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const OrbitSystem = ({ services, coreLabel }: { services: ServiceProps[], coreLabel: string }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const globalAngle = useMotionValue(0);
  const radius = 240;

  useAnimationFrame((time, delta) => {
    if (hoveredIndex === null) {
      globalAngle.set(globalAngle.get() + delta * 0.0001);
    }
  });

  return (
    <div className="relative w-full max-w-[800px] aspect-square mx-auto flex items-center justify-center my-12">
      <div className="absolute w-[480px] h-[480px] border border-zinc-800/40 rounded-full border-dashed" />
      <div className="absolute w-[240px] h-[240px] border border-zinc-800/20 rounded-full" />

      <div className="absolute z-10 flex flex-col items-center justify-center w-24 h-24 bg-zinc-950 border border-zinc-700/50 rounded-full shadow-lg">
        <Cpu className="w-8 h-8 text-zinc-100 mb-1" />
        <span className="text-zinc-100 font-mono text-[10px] tracking-widest">{coreLabel}</span>
      </div>

      {services.map((svc, i) => (
        <Planet
          key={i}
          index={i}
          total={services.length}
          radius={radius}
          globalAngle={globalAngle}
          service={svc}
          isHovered={hoveredIndex === i}
          isDimmed={hoveredIndex !== null && hoveredIndex !== i}
          onHover={() => setHoveredIndex(i)}
          onLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
};

const MobileFallback = ({ services, systemCoreLabel }: { services: ServiceProps[], systemCoreLabel: string }) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto z-10 my-10 relative">
      <div className="flex items-center justify-center w-full mb-4">
        <div className="flex flex-col items-center px-6 py-4 border border-zinc-700/50 rounded-2xl bg-zinc-950 shadow-lg">
          <Cpu className="w-6 h-6 text-zinc-100 mb-2" />
          <span className="text-zinc-100 font-mono text-[10px] tracking-widest">{systemCoreLabel}</span>
        </div>
      </div>
      {services.map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-4 p-4 border border-zinc-800 rounded-xl bg-zinc-900/50 shadow-sm"
        >
          <div className="p-3 bg-zinc-950 rounded-full border" style={{ borderColor: String(PRIMARY_COLOR).concat("40") }}>
            {React.cloneElement(service.icon, { color: PRIMARY_COLOR })}
          </div>
          <div className="flex-1">
            <h4 style={{ color: PRIMARY_COLOR }} className="font-bold text-sm mb-1">{service.title}</h4>
            <p className="text-zinc-400 text-xs">{service.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Services() {
  const { t } = useTranslation();
  const currentServices = getServicesData(t);
  const device = useDevice();
  const isMobile = device === "mobile";

  return (
    <section className="relative w-full py-24 overflow-hidden bg-transparent">
      <Helmet>
        <title>{t("services.title")} | Full-Stack Developer</title>
        <meta
          name="description"
          content={t("services.subtitle")}
        />
        <meta property="og:title" content={`${t("services.title")} | Full-Stack Developer`} />
        <meta
          property="og:description"
          content={t("services.subtitle")}
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <header className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-100 mb-6 font-display drop-shadow-[0_0_15px_rgba(79,70,229,0.3)]">
              {t("services.title")}
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light"
            >
              {t("services.subtitle")}
            </motion.p>
          </motion.div>
        </header>

        {isMobile ? (
          <MobileFallback services={currentServices} systemCoreLabel={t("services.systemCore")} />
        ) : (
          <OrbitSystem services={currentServices} coreLabel={t("services.core")} />
        )}
      </div>
    </section>
  );
}