import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Terminal, Code2 } from 'lucide-react';
import type { SocialLink } from '@/types';

const Hero: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: Github, href: "https://github.com/Henryno111", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/agukwe-henry", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/@boy_gene_us", label: "Twitter" },
    { icon: Mail, href: "mailto:Henryagukwe01@gmail.com", label: "Email" }
  ];

  const techStack = [
    "React", "TypeScript", "Node.js",
    "Python", "MongoDB", "Next.js"
  ];

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col lg:flex-row">
      {/* Left Panel - Developer Intro */}
      <motion.div 
        initial={{ opacity: 0, y: 50, x: 0 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 min-h-[60vh] lg:min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 p-6 sm:p-8 lg:p-16 flex items-center justify-center relative overflow-hidden"
      >
        {/* Code Background Effect */}
        <div className="absolute inset-0 opacity-5">
          <pre className="text-xs sm:text-sm text-green-500 font-mono">
            {`function Developer() {
  const skills = ['React', 'TypeScript', 'Node.js'];
  const passion = 'Building amazing web experiences';
  
  return (
    <div className="developer">
      <h1>Hello World!</h1>
      <p>{passion}</p>
    </div>
  );
}

export default Developer;`}
          </pre>
        </div>

        <div className="relative z-10 text-center lg:text-left max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
              Hi, I'm{' '}
              <span className="text-emerald-500">Henry</span>
              <span className="text-emerald-500">.</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-400 mb-6">
                Full Stack Developer & 
                <span className="text-emerald-500"> Smart Contract developer</span>
              </h2>
            </motion.div>

            <p className="text-base sm:text-lg text-gray-400 mb-8">
              I design dynamic, responsive web applications that blend innovation with seamless user experiences. With over 2 years of expertise, I create products that captivate and engage users, turning ideas into impactful digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 mb-8">
              <Link to="/projects"> 
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <Code2 className="w-5 h-5" />
                  View My Work
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-emerald-500 text-emerald-500 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-500 hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
              >
                <Terminal className="w-5 h-5" />
                Download Resume
              </motion.button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 border-2 border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-500 hover:border-emerald-500 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel - Featured Project/Skills */}
      <motion.div
        initial={{ opacity: 0, y: 50, x: 0 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 min-h-[40vh] lg:min-h-screen relative overflow-hidden bg-gray-900"
      >
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="h-full flex items-center justify-center p-8"
        >
          <div className="text-center max-w-md">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl font-bold text-white mb-8"
            >
              Technologies I Love
            </motion.h3>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-2xl">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-emerald-500 transition-colors duration-300"
                >
                  <div className="text-center">
                    <h3 className="text-emerald-500 font-mono text-sm mb-2">{`<${tech} />`}</h3>
                    <p className="text-gray-400 text-sm">
                      2+ years
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Project Card */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-gray-800/90 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-700 max-w-[90%] sm:max-w-xs"
        >
          <h3 className="text-emerald-500 font-semibold mb-2">Latest Project</h3>
          <p className="text-gray-300 text-sm">
            Built a real-time analytics dashboard using React, Node.js, and WebSocket
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
