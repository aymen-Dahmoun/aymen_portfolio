import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLinks = [
    { id: "tech", label: t("navbar.tech") },
    { id: "projects", label: t("navbar.projects") },
    { id: "roadmap", label: t("navbar.roadmap") },
  ];

  return (
    <footer className="relative bg-[#050510] pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 start-1/4 w-[80vw] h-2 bg-gradient-to-r from-indigo-600 to-blue-600 blur-[120px] rounded-full pointer-events-none-" />
      <div className="absolute top-0 start-1/4 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none-" />
      <div className="absolute bottom-0 end-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-4 cursor-pointer" onClick={() => handleScroll('home')}>
                Aymen.
              </h2>
              <p className="text-blue-100/60 text-sm leading-relaxed font-medium">
                {t("footer.bio")}
              </p>
            </motion.div>

            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, href: "https://github.com/aymen-Dahmoun" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/dahmoun-mouaine-aymen-3b8604300" },
                { icon: <FaEnvelope />, href: "mailto:am.dahmoun@ensta.edu.dz" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">{t("footer.sitemap")}</h4>
            <ul className="space-y-4">
              <li
                onClick={() => handleScroll('home')}
                className="text-gray-400 hover:text-indigo-400 text-sm cursor-pointer transition-colors font-medium flex items-center gap-2 group"
              >
                <div className="w-0 h-[1px] bg-indigo-400 transition-all group-hover:w-4" />
                {t("navbar.home")}
              </li>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className="text-gray-400 hover:text-indigo-400 text-sm cursor-pointer transition-colors font-medium flex items-center gap-2 group"
                >
                  <div className="w-0 h-[1px] bg-indigo-400 transition-all group-hover:w-4" />
                  {link.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">{t("footer.getInTouch")}</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <FaEnvelope size={14} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">{t("footer.email")}</p>
                  <a href="mailto:am.dahmoun@ensta.edu.dz" className="text-sm text-gray-300 hover:text-white transition-colors font-medium">
                    am.dahmoun@ensta.edu.dz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <FaMapMarkerAlt size={14} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">{t("footer.location")}</p>
                  <p className="text-sm text-gray-300 font-medium tracking-wide">{t("footer.algeriaAlgiers")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Status Card */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">{t("footer.currentAvailability")}</h4>
            <div className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 relative overflow-hidden group">
              <div className="absolute -end-4 -top-4 w-20 h-20 bg-indigo-500/10 blur-2xl rounded-full transition-all group-hover:bg-indigo-500/20" />

              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
                </div>
                <span className="text-xs font-black text-indigo-400 uppercase tracking-widest">
                  {t("footer.openForHire")}
                </span>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed font-medium">
                {t("footer.availabilityBio")}
              </p>

              <div className="mt-4 pt-4 border-t border-white/5">
                <a href="mailto:am.dahmoun@ensta.edu.dz" className="text-xs font-bold text-white hover:text-indigo-400 transition-colors flex items-center gap-2">
                  {t("footer.letsTalk")} <span className="text-indigo-500">→</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[11px] font-bold tracking-widest uppercase">
            {t("footer.allRightsReserved", { year: currentYear })}
          </p>
          <div className="flex items-center gap-6">
            <p className="text-gray-500 text-[11px] font-bold tracking-widest uppercase">
              {t("footer.builtWith")}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Accent */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
    </footer>
  );
}
