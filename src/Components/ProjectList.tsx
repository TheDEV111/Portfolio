import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, Radio, Blocks, Database, Globe, LayoutGrid, LayoutList } from 'lucide-react';
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
        className="bg-gray-900 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
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
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-gray-800 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
                View Code
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-emerald-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-emerald-400 transition-colors duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Blockchain', 'Backend', 'Frontend'];

  const projects: Project[] = [
    {
      title: "African Trade Empire",
      description: "African Trade Empire is an innovative NFT card game and trading platform built on the Flow blockchain",
      longDescription: "African Trade Empire is a groundbreaking NFT card game and trading hub on the Flow blockchain, blending tactical gameplay with AI-driven market insights. Players acquire, exchange, and utilize merchant cards inspired by historical African traders, each possessing distinct skills and trade expertise.",
      tech: ["Flow", "Cadence", "React", "Node.js", "TypeScript"],
      github: "https://github.com/username/african-trade-empire",
      live: "https://african-trade-empire.vercel.app/",
      icon: Radio,
      category: "Blockchain",
      image: "/AT-Empire.png",
      features: [
        "NFT card game mechanics",
        "AI-driven market insights",
        "Historical African trader themes",
        "Flow blockchain integration",
      ],
      challenges: "Implementing complex game mechanics on blockchain while maintaining performance",
      outcome: "Successfully launched with growing user base and positive community feedback"
    },
    {
      title: "DOCmeet",
      description: "A Real-time mobile responsive medical appointment and consultation web application",
      longDescription: "DOCmeet is a comprehensive telemedicine platform that connects patients with healthcare providers through secure video consultations, appointment scheduling, and medical record management. Built with a focus on accessibility and user experience.",
      tech: ["React", "Node.js", "ExpressJS", "MongoDB", "WebRTC"],
      github: "https://github.com/Henryno111/DOCmeet_web_app/tree/main",
      live: "https://do-cmeet-web-app.vercel.app/",
      icon: Code2,
      category: "Full Stack",
      image: "/Docmeet.png",
      features: [
        "Real-time video consultations",
        "Appointment scheduling system",
        "Medical record management",
        "Secure patient data handling",
      ],
      challenges: "Implementing HIPAA-compliant video streaming and ensuring data security",
      outcome: "Deployed successfully with positive feedback from healthcare providers"
    },
    {
      title: "GTF (Green Tourism Fund)",
      description: "Decentralized application for funding wildlife and environmental projects using blockchain technology.",
      longDescription: "Green Tourism Fund is a blockchain-based crowdfunding platform specifically designed for environmental and wildlife conservation projects. It uses smart contracts to ensure transparency and accountability in fund distribution.",
      tech: ["Clarity", "Vite", "React", "Stacks Blockchain"],
      github: "https://github.com/orgs/GreenTourismFund-GTF/repositories",
      live: "https://gtf.vercel.app/",
      icon: Blocks,
      category: "Blockchain",
      image: "/GTF.png",
      features: [
        "Smart contract-based funding",
        "Transparent fund tracking",
        "Environmental project verification",
        "Community governance features",
      ],
      challenges: "Creating secure smart contracts and ensuring scalable fund management",
      outcome: "Platform launched with multiple successful conservation projects funded"
    },
    {
      title: "Bridgarr",
      description: "Full-stack e-commerce/escrow solution with features like cart management, payment processing, and admin dashboard.",
      longDescription: "Bridgarr is a comprehensive e-commerce platform with integrated escrow services, providing secure transactions between buyers and sellers. Features include advanced cart management, multiple payment options, and detailed analytics.",
      tech: ["Next.js", "PostgreSQL", "Django", "TypeScript", "Stripe"],
      github: "https://github.com/username/bridgarr",
      live: "https://app.bridgarr.com.ng/",
      icon: Database,
      category: "Full Stack",
      image: "/Bridgarr.png",
      features: [
        "Integrated escrow system",
        "Multi-vendor marketplace",
        "Advanced analytics dashboard",
        "Secure payment processing",
      ],
      challenges: "Building secure escrow mechanisms and handling complex payment flows",
      outcome: "Successfully processing transactions with high user satisfaction rates"
    },
    {
      title: "FoodieLand",
      description: "A modern food delivery and restaurant discovery platform with real-time tracking",
      longDescription: "FoodieLand is a comprehensive food delivery platform that connects users with local restaurants, featuring real-time order tracking, personalized recommendations, and seamless payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/username/foodieland",
      live: "https://foodieland.vercel.app/",
      icon: Globe,
      category: "Full Stack",
      image: "/FoodieLand.png",
      features: [
        "Real-time order tracking",
        "Restaurant discovery",
        "Personalized recommendations",
        "Integrated payment system",
      ],
      challenges: "Implementing real-time tracking and optimizing delivery routes",
      outcome: "Launched with partner restaurants and growing user base"
    },
    {
      title: "Portfolio",
      description: "A responsive portfolio website showcasing my projects and skills",
      longDescription: "A responsive portfolio website built with React and Tailwind CSS. The website showcases my latest projects, skills, and experience in full-stack development, blockchain, and smart contracts.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Henryno111/Portfolio",
      live: "https://devhenryno.vercel.app/",
      icon: Globe,
      category: "Frontend",
      image: "/Portfolio.png",
      features: [
        "Responsive design",
        "Interactive animations",
        "Dynamic content",
        "SEO optimization",
      ],
      challenges: "Implementing dynamic content and SEO optimization",
      outcome: "Improved SEO ranking and user engagement"
    }
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
      transition: { duration: 0.6 }
    }
  };

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-500 transition-all duration-300 cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-emerald-500 text-gray-900 px-4 py-2 rounded-lg font-semibold"
          >
            View Details
          </motion.div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          {project.icon && <project.icon className="w-5 h-5 text-emerald-500" />}
          <span className="bg-gray-800 text-emerald-500 px-2 py-1 rounded text-xs font-medium">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 bg-gray-800 text-gray-300 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm"
          >
            <Github className="w-4 h-4" />
            Code
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 bg-emerald-500 text-gray-900 px-3 py-2 rounded-lg hover:bg-emerald-400 transition-colors duration-300 text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-950 p-6 sm:p-8 lg:p-16 relative overflow-hidden">
      {/* Background animations */}
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
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
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
          <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setLayout('grid')}
              className={`p-2 rounded ${layout === 'grid' ? 'bg-emerald-500 text-gray-900' : 'text-gray-400'}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setLayout('list')}
              className={`p-2 rounded ${layout === 'list' ? 'bg-emerald-500 text-gray-900' : 'text-gray-400'}`}
            >
              <LayoutList className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className={`grid gap-8 mb-16 ${layout === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
          }`}
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          className="bg-gray-900/50 rounded-lg p-8 border border-gray-800"
          variants={itemVariants}
        >
          <div className="text-center mb-8">
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
