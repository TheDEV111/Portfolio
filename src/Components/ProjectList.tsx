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
      title: "MetaFlux",
      description: "A decentralized crypto expense management platform with budgeting, delegation, and rewards system",
      longDescription: "MetaFlux is a comprehensive Web3 expense management platform that revolutionizes how individuals and businesses track crypto transactions. Built on the Linea blockchain, it features automated transaction categorization, budget tracking, secure delegation controls, and an innovative NFT rewards system. Users can earn cashback and exclusive NFT badges for responsible financial management while maintaining enterprise-grade security with multi-signature authentication.",
      tech: ["React", "TypeScript", "Solidity", "Linea", "Metamask", "Verax", "OpenZeppelin"],
      github: "https://github.com/private",
      live: "https://meta-flux.vercel.app/",
      icon: Database,
      category: "Blockchain",
      image: "/metaflux.png",
      features: [
        "Automated crypto transaction categorization",
        "Real-time budget monitoring and alerts",
        "Secure spending delegation with customizable limits",
        "NFT rewards and cashback system (up to 3%)",
        "Multi-signature authentication for large transactions",
        "On-chain transaction records on Linea",
        "Integration with Metamask, QuickBooks, and Xero",
        "Enterprise-grade security with Verax identity verification"
      ],
      challenges: "Building a decentralized expense tracking system that seamlessly integrates with traditional accounting software while maintaining blockchain security. Implementing a fair and engaging rewards system that incentivizes responsible financial management. Creating an intuitive UX for complex delegation controls and multi-signature transactions.",
      outcome: "Successfully launched with $240M+ in transaction volume managed, 65K+ active users, 92% budget adherence rate, and $1.2M in rewards distributed. Platform has revolutionized crypto expense management for both individuals and enterprises."
    },
    {
      title: "GameChain",
      description: "A blockchain-powered trivia gaming platform combining AI, Web3, and community engagement",
      longDescription: "GameChain revolutionizes the intersection of gaming, learning, and blockchain technology. This decentralized trivia platform leverages AI-powered question generation to create personalized learning experiences while integrating Web3 features for staking rewards, earning tokens, and true ownership of gaming assets. Players can create custom games, host tournaments, compete globally, and earn NFT rewards while transforming knowledge acquisition into an engaging, gamified experience.",
      tech: ["React", "TypeScript", "Solidity", "Web3", "AI/ML", "Smart Contracts"],
      github: "https://github.com/private",
      live: "https://gamechain-client.vercel.app/",
      icon: Radio,
      category: "Blockchain",
      image: "/Gamechain.png",
      features: [
        "AI-powered dynamic trivia question generation",
        "Web3 integration for staking and earning tokens",
        "Custom game creation with difficulty levels",
        "NFT rewards and achievement ownership",
        "Global tournaments and leaderboards",
        "Community-driven gaming ecosystem",
        "Learn & Earn gamification model",
        "Real-time multiplayer gaming experience"
      ],
      challenges: "Integrating AI-powered question generation with blockchain technology while maintaining seamless real-time gameplay. Designing a fair reward distribution system that incentivizes both learning and competition. Building a scalable infrastructure to support thousands of concurrent players and tournament hosting.",
      outcome: "Successfully launched with 1K+ active players, 50+ games created, and 24/7 platform activity. Platform has transformed trivia gaming into a rewarding Web3 experience that combines entertainment, education, and earning opportunities."
    },
    {
      title: "Text2Speech Converter",
      description: "A web-based text-to-speech converter application with multiple voice options and language support",
      longDescription: "Text2Speech Converter is a user-friendly web application that transforms written text into natural-sounding speech using Google's Text-to-Speech API. Built with vanilla JavaScript, HTML, and CSS, the application provides an intuitive interface for users to convert any text into audio with customizable voice options, speech rates, and multiple language support. Perfect for accessibility needs, content creation, language learning, and enhancing user experience across various applications.",
      tech: ["JavaScript", "HTML5", "CSS3", "Google Text-to-Speech API"],
      github: "https://github.com/Henryno111/Text-to-speech-converter",
      live: "https://text-to-speech-converter-umber.vercel.app/",
      icon: Globe,
      category: "Frontend",
      image: "/Text2Speech.png",
      features: [
        "Real-time text-to-speech conversion",
        "Multiple voice options and accents",
        "Adjustable speech rate and pitch",
        "Multi-language support",
        "Clean and intuitive user interface",
        "Cross-browser compatibility",
        "Responsive design for all devices",
        "No download required - instant playback"
      ],
      challenges: "Integrating Google's Text-to-Speech API seamlessly while ensuring cross-browser compatibility and optimal performance. Designing an intuitive UI that makes voice customization accessible to users of all technical levels. Handling various text formats and special characters to ensure accurate pronunciation.",
      outcome: "Successfully deployed a fully functional text-to-speech converter that provides natural-sounding voice output with multiple customization options. The application serves as an accessible tool for content creators, educators, and users with accessibility needs."
    },
    {
      title: "Architecture Builder Web App",
      description: "An interactive web application for creating and visualizing system architecture diagrams using D3.js",
      longDescription: "Architecture Builder is a powerful web-based tool for designing and visualizing system architecture diagrams. Built with D3.js for dynamic data visualization, this application enables developers, architects, and technical teams to create interactive architectural diagrams with drag-and-drop functionality. Users can add nodes, establish connections, manage relationships, and rearrange components in real-time to design complex system architectures, microservices diagrams, and technical workflows with an intuitive visual interface.",
      tech: ["JavaScript", "D3.js", "HTML5", "CSS3", "React"],
      github: "https://github.com/Henryno111/web-app-architecture",
      live: "https://web-app-architecture.vercel.app/",
      icon: Code2,
      category: "Frontend",
      image: "/architcture-builder-app.png",
      features: [
        "Interactive drag-and-drop node positioning",
        "Dynamic connection management between nodes",
        "Real-time diagram updates and rendering",
        "Node and connection selection for editing",
        "Add, remove, and modify architectural components",
        "Visual representation of system relationships",
        "Responsive canvas for complex diagrams",
        "Export and save diagram configurations"
      ],
      challenges: "Implementing smooth drag-and-drop functionality with D3.js while maintaining performance with complex diagrams. Creating an intuitive interface for managing node connections and relationships. Ensuring the visualization scales properly for large-scale system architectures without performance degradation.",
      outcome: "Successfully deployed an interactive architecture diagram tool that simplifies the process of creating and visualizing system designs. The application provides developers and architects with an efficient way to communicate technical designs and system relationships through visual diagrams."
    },
    {
      title: "Circularity Nexus",
      description: "Revolutionary waste-to-wealth tokenization platform combining AI verification, blockchain, and DeFi rewards",
      longDescription: "Circularity Nexus is a groundbreaking blockchain platform that transforms everyday waste into tradeable digital assets. Built on Hedera Hashgraph with AI-powered verification using Groq Llama3-8B, the platform enables users to tokenize recyclable materials through mobile scanning, earn rewards with up to 25% APY through DeFi yield farming, and convert tokens to carbon credits. With 95%+ AI accuracy, support for 50+ waste types, and material-specific multipliers, Circularity Nexus creates a comprehensive circular economy ecosystem that incentivizes sustainable behavior while generating real environmental impact.",
      tech: ["React", "TypeScript", "Hedera Hashgraph", "Groq AI", "Llama3-8B", "DeFi", "Smart Contracts"],
      github: "https://github.com/private",
      live: "https://circularity-nexus.vercel.app/",
      icon: Blocks,
      category: "Blockchain",
      image: "/circularity-nexus.png",
      features: [
        "AI-powered waste verification with 95%+ accuracy",
        "Mobile-first scanning with instant classification",
        "Support for 50+ waste types with material-specific tokens",
        "DeFi yield farming with 5-25% APY from corporate ESG partners",
        "Automatic carbon credit conversion (1kg PET = 1.5kg CO₂)",
        "Built on Hedera with 10,000 TPS and carbon-negative consensus",
        "Quality grading system from EXCELLENT to UNUSABLE",
        "Real-time blockchain tokenization and rewards"
      ],
      challenges: "Integrating AI-powered waste verification with blockchain technology while maintaining sub-2 second processing times. Building a fair tokenization model with material-specific multipliers that accurately reflects recycling value. Creating a sustainable DeFi ecosystem that attracts corporate ESG partners and provides meaningful APY returns while ensuring environmental impact.",
      outcome: "Successfully launched with 2.5M tons of waste recycled, 1.8M CO₂ emissions reduced, 150K active users, and $12M in rewards distributed. Platform operates in 25+ countries and has created measurable environmental impact verified by blockchain technology and third-party auditors."
    },
    {
      title: "Black Founders Network",
      description: "A slack-like community platform for founders and investors in America",
      longDescription: "Black Founders Network is a comprehensive community platform designed to connect Black entrepreneurs, founders, and investors across America. Built with real-time communication features, the platform facilitates networking, resource sharing, mentorship opportunities, and collaborative growth. It serves as a digital hub where founders can showcase their startups, seek funding, share insights, and build meaningful connections within the Black entrepreneurship ecosystem.",
      tech: ["Vite", "PHP", "Pusher.js", "MySQL", "JavaScript"],
      github: "https://github.com/private",
      live: "https://blackfounders.network/",
      icon: Globe,
      category: "Frontend",
      image: "/BFN.png",
      features: [
        "Real-time messaging and notifications",
        "Community channels and direct messaging",
        "Founder and investor profiles",
        "Resource sharing and networking tools",
        "Event management and announcements"
      ],
      challenges: "Building a scalable real-time messaging system with Pusher.js while ensuring smooth user experience across different devices. Managing complex user relationships and implementing efficient database queries for community interactions.",
      outcome: "Successfully launched with an active community of founders and investors. Platform facilitates meaningful connections and has become a vital resource for Black entrepreneurship in America."
    },
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
          loading="lazy"
          decoding="async"
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
