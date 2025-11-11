import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Boxes } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '@/types';

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Black Founders Network",
      description: "A slack-like community platform for founders and investors in America",
      longDescription: "Black Founders Network is a comprehensive community platform designed to connect Black entrepreneurs, founders, and investors across America. Built with real-time communication features, the platform facilitates networking, resource sharing, mentorship opportunities, and collaborative growth. It serves as a digital hub where founders can showcase their startups, seek funding, share insights, and build meaningful connections within the Black entrepreneurship ecosystem.",
      tech: ["Vite", "PHP", "Pusher.js", "MySQL", "JavaScript"],
      github: "https://github.com/private",
      live: "https://blackfounders.network/",
      image: "/BFN.png",
      category: "Frontend",
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
      title: "DOCmeet",
      description: "A Real-time mobile responsive medical appointment and consultation web application",
      longDescription: "A comprehensive healthcare platform that connects patients with doctors through real-time video consultations, appointment scheduling, and medical record management.",
      tech: ["React", "Node.js", "ExpressJS", "MongoDB"],
      github: "https://github.com/Henryno111/DOCmeet_web_app/tree/main",
      live: "https://do-cmeet-web-app.vercel.app/",
      image: "/Docmeet.png",
      category: "Full Stack",
      features: [
        "Real-time video consultations",
        "Appointment scheduling",
        "Medical record management",
        "Responsive design"
      ],
      challenges: "Implementing real-time video streaming and ensuring HIPAA compliance",
      outcome: "Successfully deployed with positive user feedback and improved healthcare accessibility"
    },
    {
      title: "GTF(Green Tourism Fund)",
      description: "Decentralized application for funding and wildlife projects using blockchain technology.",
      longDescription: "A blockchain-based platform for transparent funding of environmental and wildlife conservation projects using smart contracts.",
      tech: ["Clarity", "Vite", "Ethereum"],
      github: "https://github.com/orgs/GreenTourismFund-GTF/repositories",
      live: "https://gtf.vercel.app/",
      image: "/GTF.png",
      category: "Blockchain",
      features: [
        "Smart contract funding",
        "Transparent transactions",
        "Project tracking",
        "Community governance"
      ],
      challenges: "Creating secure smart contracts and ensuring scalability",
      outcome: "Launched successfully with multiple funded conservation projects"
    },
    {
      title: "Bridgarr",
      description: "Full-stack e-commerce/escrow solution with features like cart management, payment processing, and admin dashboard.",
      longDescription: "A comprehensive e-commerce platform with integrated escrow services, providing secure transactions for buyers and sellers.",
      tech: ["Next.js", "Postgresql", "Django", "TypeScript"],
      github: "https://github.com/username/ecommerce",
      live: "https://app.bridgarr.com.ng/",
      image: "/Bridgarr.png",
      category: "Full Stack",
      features: [
        "Secure escrow system",
        "Payment processing",
        "Admin dashboard",
        "Cart management"
      ],
      challenges: "Implementing secure payment processing and escrow mechanisms",
      outcome: "Deployed with successful transactions and positive merchant feedback"
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured Projects
          </h2>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl">
          Here are some of my recent projects that showcase my skills in full-stack development, 
          blockchain technology, and modern web applications.
        </p>
        <div className="text-center mt-8">
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors duration-300"
            >
              View All Projects
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
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
                    className="bg-gray-800 text-emerald-500 px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-emerald-500 text-gray-900 px-3 py-2 rounded-lg hover:bg-emerald-400 transition-colors duration-300 text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
