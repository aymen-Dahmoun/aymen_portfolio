import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./Dialog";
import { motion } from "framer-motion";
import type { Link, Tech } from "./Projects";
import { FaGithub } from "react-icons/fa";

interface Project {
  name: string;
  description: string;
  stack: Tech[];
  images: string[];
  links: Link;
}

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
}

const Modal: React.FC<ModalProps> = ({ open, onOpenChange, project }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95%] rounded-2xl bg-gradient-to-br from-blue-900/40 via-black to-blue-800/40 text-white border border-white/10 shadow-2xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative"
        >
          <DialogHeader className="border-b border-white/10 pb-4">
            <DialogTitle className="text-3xl font-extrabold text-blue-600 tracking-tight">
              {project.name}
            </DialogTitle>
            <DialogDescription className="text-gray-400 text-base">
              Project details and technology stack
            </DialogDescription>
          </DialogHeader>

          <div className="max-h-[70vh] overflow-y-auto pr-2 space-y-8 mt-6">
            <section>
              <h3 className="font-semibold text-lg mb-2 text-blue-600">
                Description
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2 text-blue-600">
                Tech Stack
              </h3>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-1 bg-white/10 text-sm rounded-md border border-white/20"
                  >
                    <div className="flex items-center gap-2">
                      <tech.icon className="size-5 text-blue-400" />
                      <span>{tech.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2 text-blue-600">
                Links
              </h3>
              <div className="flex flex-wrap flex-col gap-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:underline break-all">
                    <FaGithub size={24} className="text-gray-300 hover:text-white transition" />
                    <span className="flex items-center gap-2">Github</span>
                  </a>
                )}
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 flex items-center gap-2 hover:underline"
                  >
                    <span className="flex items-center gap-2 text-neutral-100">Visit website:</span>
                    {project.links.website}
                  </a>
                )}

              </div>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2 text-blue-600">
                Screenshots
              </h3>
              <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                {project.images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Screenshot ${idx + 1}`}
                    className="h-48 w-auto rounded-lg border border-white/10 shadow-md object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
