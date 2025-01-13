import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Boxes } from 'lucide-react';
import { Link } from 'react-router-dom'; // Ensure this import is from react-router-dom

const ProjectsSection = () => {
  const projects = [
    // ...existing code...
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
        {/* ...existing code... */}
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* ...existing code... */}
      </div>

      {/* View All Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mt-16"
      >
        <Link to="/Projects"> 
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gray-900 border-2 border-emerald-500 text-emerald-500 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 hover:bg-emerald-500 hover:text-gray-900"
          >
            <Code2 className="w-5 h-5" />
            View All Projects
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
