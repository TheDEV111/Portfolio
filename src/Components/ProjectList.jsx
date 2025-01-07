import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, Terminal, Radio, Blocks, Database, Globe, Layout, LayoutGrid, LayoutList } from 'lucide-react';

const ProjectList = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [layout, setLayout] = useState('grid'); // 'grid' or 'list'
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Blockchain', 'Backend', 'Frontend'];

  const projects = [
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard built with React, Node.js, and WebSocket for live data visualization and monitoring.",
      longDescription: "A comprehensive analytics platform that provides real-time insights through interactive charts and customizable dashboards. Features include user activity tracking, performance metrics, and automated reporting.",
      tech: ["React", "Node.js", "WebSocket", "Chart.js"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com",
      icon: Radio,
      category: "Full Stack",
      image: "/api/placeholder/600/400",
      features: [
        "Real-time data visualization",
        "Customizable dashboards",
        "User activity tracking",
        "Automated reporting",
        "Performance metrics"
      ],
      challenges: "Implementing efficient real-time data synchronization while maintaining performance",
      outcome: "50% improvement in data processing speed and 30% increase in user engagement"
    },
    {
      title: "Smart Contract DApp",
      description: "Decentralized application for NFT marketplace with smart contract integration using Solidity and Web3.js.",
      longDescription: "A secure and scalable NFT marketplace allowing users to mint, buy, sell, and trade digital assets. Implements ERC-721 standards with advanced trading features.",
      tech: ["React", "Solidity", "Web3.js", "Ethereum"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com",
      icon: Blocks,
      category: "Blockchain",
      image: "/api/placeholder/600/400",
      features: [
        "NFT minting and trading",
        "Wallet integration",
        "Gas fee optimization",
        "Smart contract automation",
        "Auction system"
      ],
      challenges: "Optimizing gas fees and ensuring secure smart contract implementation",
      outcome: "Successfully processed over 1000 NFT transactions with zero security incidents"
    },
    // Add more projects as needed
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const DetailModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>

          <img
            src={project.image}
            alt={project.title}
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
              <h3 className="text-lg font-semibold text-emerald-500 mb-2">Technical Challenges</h3>
              <p className="text-gray-300">{project.challenges}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-500 mb-2">Outcome</h3>
              <p className="text-gray-300">{project.outcome}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-500 mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-emerald-500 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-emerald-400 transition-colors duration-300 flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-emerald-500 text-emerald-500 px-6 py-2 rounded-lg font-semibold hover:bg-emerald-500 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const GridLayout = ({ project }) => (
    <motion.div
      variants={itemVariants}
      className="group relative"
      onClick={() => setSelectedProject(project)}
    >
      <motion.div
        className="absolute inset-0 bg-emerald-500/10 rounded-lg blur-xl group-hover:bg-emerald-500/20 transition-colors duration-300"
        animate={{
          scale: [1, 1.02, 1],
          transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      />
      <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden relative hover:border-emerald-500 transition-colors duration-300 h-full cursor-pointer">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <project.icon className="w-6 h-6 text-emerald-500" />
            </motion.div>
            <span className="text-emerald-500 text-sm font-mono">{project.category}</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800 rounded-full text-sm text-emerald-500 font-mono"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-emerald-500 font-mono">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const ListLayout = ({ project }) => (
    <motion.div
      variants={itemVariants}
      className="group relative"
      onClick={() => setSelectedProject(project)}
    >
      <motion.div
        className="absolute inset-0 bg-emerald-500/10 rounded-lg blur-xl group-hover:bg-emerald-500/20 transition-colors duration-300"
        animate={{
          scale: [1, 1.02, 1],
          transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      />
      <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden relative hover:border-emerald-500 transition-colors duration-300 cursor-pointer">
        <div className="flex flex-col md:flex-row">
          <img
            src={project.image}
            alt={project.title}
            className="w-full md:w-64 h-48 object-cover"
          />
          <div className="p-6 flex-1">
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <project.icon className="w-6 h-6 text-emerald-500" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className="text-emerald-500 text-sm font-mono">{project.category}</span>
              </div>
            </div>

            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm text-emerald-500 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-950 p-6 sm:p-8 lg:p-16 relative overflow-hidden">
      {/* Background animations (keep existing code) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-emerald-500/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="inline-block">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-white mb-4 relative"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              My Projects<span className="text-emerald-500">.</span>
              <motion.div
                className="absolute -right-4 -top-4 w-8 h-8 border-2 border-emerald-500/30 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.h1>
          </div>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A showcase of my latest projects, featuring full-stack applications, smart contracts, and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Filter and Layout Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-emerald-500 text-gray-900'
                    : 'bg-gray-800 text-gray-400 hover:bg-emerald-500/20 hover:text-emerald-500'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLayout('grid')}
              className={`p-2 rounded-lg ${
                layout === 'grid'
                  ? 'bg-emerald-500 text-gray-900'
                  : 'bg-gray-800 text-gray-400 hover:bg-emerald-500/20 hover:text-emerald-500'
              }`}
            >
              <LayoutGrid className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLayout('list')}
              className={`p-2 rounded-lg ${
                layout === 'list'
                  ? 'bg-emerald-500 text-gray-900'
                  : 'bg-gray-800 text-gray-400 hover:bg-emerald-500/20 hover:text-emerald-500'
              }`}
            >
              <LayoutList className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Projects Grid/List */}
        <motion.div
          layout
          className={
            layout === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'
              : 'space-y-6'
          }
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {layout === 'grid' ? (
                  <GridLayout project={project} />
                ) : (
                  <ListLayout project={project} />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Featured Skills Section (keep existing code) */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg relative overflow-hidden"
        >
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)",
                "linear-gradient(180deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)",
                "linear-gradient(225deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)",
                "linear-gradient(270deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-6">Technical Expertise<span className="text-emerald-500">.</span></h2>
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
                  <div className="text-center">
                    <h3 className="text-emerald-500 font-mono text-sm">{`<${skill} />`}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <DetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectList;