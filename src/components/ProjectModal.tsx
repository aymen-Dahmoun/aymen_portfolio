import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/comps/ui/dialog";
import { motion } from "framer-motion";

const Modal = ({ open, onOpenChange, department }) => {
  if (!department) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-3xl w-[95%] rounded-2xl bg-gradient-to-br from-[#0a0a0f] to-[#1a0f0f] text-white border border-white/10 shadow-2xl overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative"
        >

          <DialogHeader className="border-b border-white/10 pb-4">
            <DialogTitle className="text-3xl font-extrabold text-[#ff5858] tracking-tight">
              {department.name}
            </DialogTitle>
            <DialogDescription className="text-gray-400 text-base">
              Explore full details of this department
            </DialogDescription>
          </DialogHeader>

          <div className="max-h-[70vh] overflow-y-auto pr-2 space-y-8 mt-6">
            <section>
              <h3 className="font-semibold text-lg mb-2 text-[#ff9f9f]">
                Managers
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-200">
                {department.managers.map((m, idx) => (
                  <li key={idx}>
                    <span className="font-medium">{m.name}</span> – {m.role}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2 text-[#ff9f9f]">
                Description
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {department.description}
              </p>
            </section>

            {/* Workshops */}
            <section>
              <h3 className="font-semibold text-lg mb-2 text-[#ff9f9f]">
                Workshops
              </h3>
              <p className="text-gray-300">{department.workshops}</p>
            </section>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;