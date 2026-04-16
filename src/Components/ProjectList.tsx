import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, LayoutList } from 'lucide-react';
import { projects } from '@/data/projects';
import { containerVariants, itemVariants } from '@/constants/animations';
import ProjectCard from '@/Components/ProjectCard';
import ProjectModal from '@/Components/ProjectModal';
import type { Project } from '@/types';

const categories = ['All', 'Full Stack', 'Blockchain', 'Backend', 'Frontend'];

const ProjectList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-950 p-6 sm:p-8 lg:p-16 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-emerald-500/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-block">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-white mb-4 relative"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              My Projects<span className="text-emerald-500">.</span>
              <motion.div
                aria-hidden="true"
                className="absolute -right-4 -top-4 w-8 h-8 border-2 border-emerald-500/30 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.h1>
          </div>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            A collection of projects showcasing my expertise in full-stack development, blockchain technology, and modern web applications.
          </motion.p>
        </motion.div>

        {/* Filter and Layout Controls */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4"
          variants={itemVariants}
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-emerald-500 text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Layout Toggle */}
          <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-1" role="group" aria-label="Toggle layout">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setLayout('grid')}
              aria-label="Grid layout"
              aria-pressed={layout === 'grid'}
              className={`p-2 rounded ${layout === 'grid' ? 'bg-emerald-500 text-gray-900' : 'text-gray-400'}`}
            >
              <LayoutGrid className="w-4 h-4" aria-hidden="true" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setLayout('list')}
              aria-label="List layout"
              aria-pressed={layout === 'list'}
              className={`p-2 rounded ${layout === 'list' ? 'bg-emerald-500 text-gray-900' : 'text-gray-400'}`}
            >
              <LayoutList className="w-4 h-4" aria-hidden="true" />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className={`grid gap-8 mb-16 ${
            layout === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
          }`}
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="bg-gray-900/50 rounded-xl p-8 border border-gray-800"
          variants={itemVariants}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Technical Expertise<span className="text-emerald-500">.</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "React", "TypeScript", "Node.js", "Python",
                "MongoDB", "Next.js", "Solidity", "Web3.js"
              ].map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-emerald-500 transition-colors duration-300"
                >
                  <h3 className="text-emerald-500 font-mono text-sm text-center">{`<${skill} />`}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

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
