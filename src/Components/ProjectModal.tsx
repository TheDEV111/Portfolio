import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '@/types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="bg-black border-4 border-brand max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(34,211,238,0.2)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 text-brand hover:text-white transition-colors p-2 bg-zinc-900 border border-brand rounded-full z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-16">
          <div className="mb-12">
            <span className="font-sans text-brand text-xs uppercase tracking-widest font-bold mb-4 block">
              {project.category}
            </span>
            <h2 className="font-display text-5xl md:text-7xl uppercase text-white tracking-tighter leading-[0.9]">
              {project.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="font-sans text-brand text-sm uppercase tracking-widest font-bold mb-4">Project Overview</h3>
                <p className="font-sans text-zinc-300 leading-relaxed text-lg">{project.longDescription}</p>
              </div>

              <div>
                <h3 className="font-sans text-brand text-sm uppercase tracking-widest font-bold mb-4">Challenges & Solutions</h3>
                <p className="font-sans text-zinc-300 leading-relaxed">{project.challenges}</p>
              </div>

              <div>
                <h3 className="font-sans text-brand text-sm uppercase tracking-widest font-bold mb-4">Outcome</h3>
                <p className="font-sans text-zinc-300 leading-relaxed">{project.outcome}</p>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-12">
              
              {/* Actions */}
              <div className="flex flex-col gap-4">
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-center gap-3 bg-brand text-black font-sans font-bold text-sm tracking-widest uppercase px-6 py-4 hover:bg-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                )}
                {!project.githubPrivate && project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-center gap-3 bg-transparent border-2 border-brand text-brand font-sans font-bold text-sm tracking-widest uppercase px-6 py-4 hover:bg-brand hover:text-black transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    Source Code
                  </motion.a>
                )}
              </div>

              {/* Technologies */}
              <div>
                <h3 className="font-sans text-brand text-sm uppercase tracking-widest font-bold mb-4">Tech Stack</h3>
                <div className="font-sans text-sm font-semibold text-zinc-300 flex flex-wrap gap-x-2 gap-y-2 uppercase">
                  {project.tech.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {i < project.tech.length - 1 && <span className="text-brand/50">/</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="font-sans text-brand text-sm uppercase tracking-widest font-bold mb-4">Key Features</h3>
                <ul className="space-y-3 font-sans text-zinc-300 text-sm">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-brand mt-1">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
