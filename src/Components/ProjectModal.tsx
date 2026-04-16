import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
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
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="text-gray-400 hover:text-white text-2xl leading-none transition-colors duration-200"
            >
              ×
            </button>
          </div>

          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full rounded-lg mb-6 object-cover"
          />

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-500 mb-2">Project Overview</h3>
              <p className="text-gray-300">{project.longDescription}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-500 mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-500 mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800 text-emerald-500 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-500 mb-2">Challenges & Solutions</h3>
              <p className="text-gray-300">{project.challenges}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-500 mb-2">Outcome</h3>
              <p className="text-gray-300">{project.outcome}</p>
            </div>

            <div className="flex gap-4 pt-4">
              {!project.githubPrivate && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-gray-800 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <FaGithub className="w-5 h-5" aria-hidden="true" />
                  View Code
                </motion.a>
              )}
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-emerald-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-emerald-400 transition-colors duration-300"
              >
                <ExternalLink className="w-5 h-5" aria-hidden="true" />
                Live Demo
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
