import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, GitCommit, ArrowUpRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '@/types';

interface OpenSourceCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

/**
 * Screenshot-free card used for open-source contribution projects.
 * Distinct violet/repo-centric styling sets it apart from the
 * image-based ProjectCard and leads with the GitHub repo.
 */
const OpenSourceCard: React.FC<OpenSourceCardProps> = ({ project, index, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="group relative flex flex-col bg-gradient-to-br from-zinc-900 to-zinc-900/40 rounded-xl border border-zinc-800 hover:border-violet-500/60 transition-all duration-300 overflow-hidden"
  >
    {/* Accent top bar distinguishes open-source cards at a glance */}
    <div
      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500"
      aria-hidden="true"
    />

    <div className="p-6 flex flex-col flex-1">
      {/* Header: icon + open-source badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-violet-500/10 border border-violet-500/20">
          {project.icon ? (
            <project.icon className="w-6 h-6 text-violet-400" aria-hidden="true" />
          ) : (
            <GitBranch className="w-6 h-6 text-violet-400" aria-hidden="true" />
          )}
        </div>
        <span className="flex items-center gap-1.5 bg-violet-500/15 text-violet-300 border border-violet-500/30 px-2.5 py-1 rounded-full text-xs font-medium">
          <FaGithub className="w-3.5 h-3.5" aria-hidden="true" />
          Open Source
        </span>
      </div>

      {/* Title + description */}
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

      {/* Feature highlights replace the screenshot */}
      <ul className="space-y-1.5 mb-5 flex-1">
        {project.features.slice(0, 3).map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-gray-300 text-xs">
            <GitCommit className="w-3.5 h-3.5 mt-0.5 text-violet-400 shrink-0" aria-hidden="true" />
            <span className="line-clamp-1">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="bg-zinc-800/80 text-gray-300 px-2 py-1 rounded text-xs font-mono"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="bg-zinc-800/80 text-gray-400 px-2 py-1 rounded text-xs">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      {/* Actions: GitHub-first, with optional live demo and details */}
      <div className="flex flex-wrap gap-3 mt-auto">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            whileHover={{ scale: 1.03 }}
            className="flex items-center justify-center gap-2 flex-1 min-w-[8rem] bg-violet-500 text-white px-3 py-2 rounded-lg hover:bg-violet-400 transition-colors duration-300 text-sm font-medium"
          >
            <FaGithub className="w-4 h-4" aria-hidden="true" />
            View on GitHub
          </motion.a>
        )}
        {project.live && (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live demo`}
            whileHover={{ scale: 1.03 }}
            className="flex items-center justify-center gap-2 bg-zinc-800 text-gray-300 px-3 py-2 rounded-lg hover:bg-zinc-700 transition-colors duration-300 text-sm"
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            Demo
          </motion.a>
        )}
        <motion.button
          onClick={() => onSelect(project)}
          whileHover={{ scale: 1.03 }}
          aria-label={`View details for ${project.title}`}
          className="flex items-center justify-center gap-1.5 bg-zinc-800 text-gray-300 px-3 py-2 rounded-lg hover:bg-zinc-700 transition-colors duration-300 text-sm"
        >
          Details
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export default OpenSourceCard;
