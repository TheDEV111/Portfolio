import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectModal from '@/Components/ProjectModal';
import type { Project } from '@/types';

const categories = ['All', 'Full Stack', 'Blockchain', 'Frontend', 'Open Source'];

const ProjectList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : activeCategory === 'Open Source'
      ? projects.filter(project => project.contribution)
      : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tighter text-white leading-none">
              PROJECT<br />
              <span className="text-brand">ARCHIVE</span>
            </h1>
          </div>
          <p className="font-sans text-zinc-400 max-w-sm uppercase text-sm tracking-widest font-semibold leading-relaxed">
            A COMPREHENSIVE COLLECTION OF MY EXPERTISE IN FULL-STACK DEVELOPMENT, BLOCKCHAIN TECHNOLOGY, AND MODERN WEB APPLICATIONS.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-zinc-900 pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-sans text-xs uppercase tracking-widest font-bold px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand text-black'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Massive Typographic List */}
        <div className="border-t border-zinc-900">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative border-b border-zinc-900 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer transition-colors duration-500 hover:bg-zinc-900/30"
            >
              {/* Background Highlight */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="projectHighlightFull"
                    className="absolute inset-0 bg-brand/5 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>

              {/* Title & Number */}
              <div className="relative z-10 flex items-start gap-4 md:gap-8 lg:gap-12 w-full md:w-1/2">
                <span className="font-mono text-zinc-600 text-sm md:text-lg pt-2 md:pt-4">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter group-hover:text-brand transition-colors duration-500 truncate whitespace-normal">
                  {project.title}
                </h3>
              </div>

              {/* Tech Stack & Arrow */}
              <div className="relative z-10 flex items-center justify-between md:justify-end gap-12 w-full md:w-auto mt-4 md:mt-0 pl-10 md:pl-0">
                <div className="flex flex-col text-left md:text-right">
                  <span className="text-zinc-500 font-sans text-xs uppercase tracking-widest mb-1">
                    {project.category} {project.contribution && <span className="text-brand">✦ OPEN SOURCE</span>}
                  </span>
                  <div className="font-sans text-xs md:text-sm font-semibold text-zinc-400 flex flex-wrap gap-x-2 gap-y-1 md:justify-end max-w-[250px] uppercase">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span className="group-hover:text-zinc-200 transition-colors">{tech}</span>
                        {i < 3 && <span className="text-brand/50 group-hover:text-brand">/</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-500 shrink-0">
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-zinc-500 group-hover:text-black transition-colors duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-display text-4xl text-zinc-700">NO PROJECTS FOUND</p>
            </div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectList;
