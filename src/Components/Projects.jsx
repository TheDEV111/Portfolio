import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Boxes } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard built with React, Node.js, and WebSocket. Features live data updates, interactive charts, and customizable widgets.",
      tech: ["React", "Node.js", "WebSocket", "Chart.js"],
      github: "https://github.com/username/analytics-dashboard",
      live: "https://analytics-dashboard.demo",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Smart Contract DApp",
      description: "Decentralized application for NFT marketplace with MetaMask integration, built on Ethereum blockchain using Solidity and Web3.js.",
      tech: ["Solidity", "Web3.js", "React", "Ethereum"],
      github: "https://github.com/username/nft-marketplace",
      live: "https://nft-marketplace.demo",
      image: "/api/placeholder/600/400"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with features like cart management, payment processing, and admin dashboard.",
      tech: ["Next.js", "MongoDB", "Stripe", "TypeScript"],
      github: "https://github.com/username/ecommerce",
      live: "https://ecommerce.demo",
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-16 px-6 sm:px-8 lg:px-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <div className="flex items-center gap-2 mb-6">
          <Boxes className="text-emerald-500 w-6 h-6" />
          <span className="text-emerald-500 font-mono">Featured Projects</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Recent Work
          <span className="text-emerald-500">.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl">
          A collection of projects that showcase my expertise in full-stack development,
          smart contracts, and building scalable web applications.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-500 transition-colors duration-300"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gray-900/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 text-gray-900 px-4 py-2 rounded-lg font-semibold"
                >
                  View Details
                </motion.div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-1 rounded-full bg-gray-800 text-emerald-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mt-16"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-gray-900 border-2 border-emerald-500 text-emerald-500 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 hover:bg-emerald-500 hover:text-gray-900"
        >
          <Code2 className="w-5 h-5" />
          View All Projects
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;