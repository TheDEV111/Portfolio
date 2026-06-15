import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ImageOff } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const [imageError, setImageError] = useState(false);
  const hasImage = Boolean(project.image) && !imageError;

  return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-emerald-500 transition-all duration-300 cursor-pointer"
    onClick={() => onSelect(project)}
    role="button"
    tabIndex={0}
    aria-label={`View details for ${project.title}`}
    onKeyDown={(e) => e.key === 'Enter' && onSelect(project)}
  >
    <div className="relative overflow-hidden">
      {hasImage ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          onError={() => setImageError(true)}
          className="w-full h-48 object-cover"
        />
      ) : (
        // Fallback for projects without a screenshot
        <div className="w-full h-48 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-800 flex flex-col items-center justify-center gap-3">
          {project.icon ? (
            <project.icon className="w-12 h-12 text-emerald-500/70" aria-hidden="true" />
          ) : (
            <ImageOff className="w-12 h-12 text-emerald-500/70" aria-hidden="true" />
          )}
          <span className="text-gray-400 text-sm font-medium">{project.title}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-zinc-900/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="bg-emerald-500 text-gray-900 px-4 py-2 rounded-lg font-semibold">
          View Details
        </div>
      </div>
    </div>

    <div className="p-6">
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        {project.icon && <project.icon className="w-5 h-5 text-emerald-500" aria-hidden="true" />}
        <span className="bg-zinc-800 text-emerald-500 px-2 py-1 rounded text-xs font-medium">
          {project.category}
        </span>
        {project.contribution && (
          <span className="bg-violet-500/15 text-violet-400 border border-violet-500/30 px-2 py-1 rounded text-xs font-medium">
            Open Source Contributor
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="bg-zinc-800 text-gray-300 px-2 py-1 rounded text-xs"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="bg-zinc-800 text-gray-300 px-2 py-1 rounded text-xs">
            +{project.tech.length - 3} more
          </span>
        )}
      </div>

      <div className="flex gap-3">
        {!project.githubPrivate && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            whileHover={{ scale: 1.05 }}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 bg-zinc-800 text-gray-300 px-3 py-2 rounded-lg hover:bg-zinc-700 transition-colors duration-300 text-sm"
          >
            <FaGithub className="w-4 h-4" aria-hidden="true" />
            Code
          </motion.a>
        )}
        <motion.a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} live demo`}
          whileHover={{ scale: 1.05 }}
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 bg-emerald-500 text-gray-900 px-3 py-2 rounded-lg hover:bg-emerald-400 transition-colors duration-300 text-sm font-medium"
        >
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
          Live Demo
        </motion.a>
      </div>
    </div>
  </motion.div>
  );
};

export default ProjectCard;
