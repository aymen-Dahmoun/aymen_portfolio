import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import type { MotionValue } from "framer-motion";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
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
  icon: React.ReactElement<{ color?: string }>;
}

const PRIMARY_COLOR = "#3b82f6"; // Consistent blue theme

const getServicesData = (t: (key: string) => string): ServiceProps[] => [
  {
    title: t("services.frontendTitle"),
    description: t("services.frontendDesc"),
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: t("services.mobileTitle"),
    description: t("services.mobileDesc"),
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: t("services.backendTitle"),
    description: t("services.backendDesc"),
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: t("services.fullstackTitle"),
    description: t("services.fullstackDesc"),
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: t("services.dbTitle"),
    description: t("services.dbDesc"),
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: t("services.apiTitle"),
    description: t("services.apiDesc"),
    icon: <Network className="w-6 h-6" />,
  },
  {
    title: t("services.saasTitle"),
    description: t("services.saasDesc"),
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: t("services.optTitle"),
    description: t("services.optDesc"),
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

        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: isLeftHemisphere ? 10 : -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`absolute top-1/2 -translate-y-1/2 ${isLeftHemisphere ? 'right-[calc(100%+20px)]' : 'left-[calc(100%+20px)]'} w-56 bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-2xl pointer-events-none`}
          >
            <h4 style={{ color: PRIMARY_COLOR }} className="font-bold text-sm mb-1">{service.title}</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">{service.description}</p>
          </motion.div>
        )}
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
    <div className="relative w-full max-w-[800px] aspect-square mx-auto hidden md:flex items-center justify-center my-12">
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
    <div className="flex flex-col gap-4 md:hidden w-full max-w-sm mx-auto z-10 my-10">
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

  return (
    <section className="relative w-full py-24 bg-transparent overflow-hidden">
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
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-4 font-display">
              {t("services.title")}
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </motion.div>
        </header>

        <OrbitSystem services={currentServices} coreLabel={t("services.core")} />
        <MobileFallback services={currentServices} systemCoreLabel={t("services.systemCore")} />
      </div>
    </section>
  );
}