import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

// Pick top 4 featured projects for the home page
const homeProjects = projects.filter(p => p.featured).slice(0, 4);

const ProjectsSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-black text-white py-32 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter text-white">
              FEATURED<br />
              <span className="text-brand">PROJECTS</span>
            </h2>
          </div>
          <p className="font-sans text-zinc-400 max-w-sm uppercase text-sm tracking-widest font-semibold leading-relaxed">
            A CURATED SELECTION OF MY BEST WORK ACROSS WEB2 SAAS AND WEB3 BLOCKCHAIN ARCHITECTURE.
          </p>
        </div>

        {/* Massive Typographic List */}
        <div className="border-t border-zinc-800">
          {homeProjects.map((project, index) => (
            <motion.div
              key={project.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border-b border-zinc-800 py-10 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer transition-colors duration-500 hover:bg-zinc-900/30"
            >
              {/* Background Highlight */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="projectHighlight"
                    className="absolute inset-0 bg-brand/5 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>

              {/* Title & Number */}
              <div className="relative z-10 flex items-start gap-4 md:gap-8 lg:gap-12">
                <span className="font-mono text-zinc-600 text-lg md:text-2xl pt-2 md:pt-4">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter group-hover:text-brand transition-colors duration-500">
                  {project.title}
                </h3>
              </div>

              {/* Tech Stack & Arrow */}
              <div className="relative z-10 flex items-center justify-between md:justify-end gap-12 w-full md:w-auto mt-4 md:mt-0 pl-12 md:pl-0">
                <div className="flex flex-col text-left md:text-right">
                  <span className="text-zinc-500 font-sans text-xs uppercase tracking-widest mb-1">
                    {project.category} {project.contribution && <span className="text-brand">✦ OPEN SOURCE</span>}
                  </span>
                  <div className="font-sans text-sm md:text-base font-semibold text-zinc-300 flex flex-wrap gap-x-2 gap-y-1 md:justify-end max-w-xs">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {i < 3 && <span className="text-brand">/</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-500 shrink-0">
                  <ArrowUpRight className="w-8 h-8 text-zinc-500 group-hover:text-black transition-colors duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <Link to="/projects">
            <button className="flex items-center gap-4 bg-transparent border-2 border-brand text-brand hover:bg-brand hover:text-black font-sans text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300">
              View Complete Archive
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default ProjectsSection;
