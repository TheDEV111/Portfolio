import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Github, Linkedin, Twitter, Mail, Terminal, Code2 } from 'lucide-react';

const Hero = () => {
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
  const [skills, setSkills] = useState([
    'React',
    'TypeScript',
    'Node.js',
    'Python'
  ]);

  return (
    <Portfolio 
      skills={skills}
      passion="Building Amazing Web Apps"
    />
  );
}`}
          </pre>
        </div>

        <div className="max-w-xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="text-emerald-500 w-6 h-6" />
              <span className="text-emerald-500 font-mono">Hello, I'm</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
              Henry Agukwe
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
                  className="bg-emerald-500 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 hover:bg-emerald-400 text-center flex items-center justify-center gap-2"
                >
                  <Code2 className="w-5 h-5" />
                  View Projects
                </motion.button>
              </Link>
              <a href="/Frontend_resume.pdf" download>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-emerald-500 text-emerald-500 px-6 py-3 rounded-lg font-semibold 
                  transition-colors duration-300 hover:bg-emerald-500 hover:text-gray-900 text-center
                  action"
                >
                  Download CV
                </motion.button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Github, link: "https://github.com/Henryno111", label: "GitHub" },
                { icon: Linkedin, link: "https://linkedin.com/in/agukwe-henry", label: "LinkedIn" },
                { icon: Twitter, link: "https://x.com/@boy_gene_us", label: "Twitter" },
                { icon: Mail, link: "Henryagukwe01@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
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
          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-2xl">
            {[
              "React", "TypeScript", "Node.js",
              "Python", "MongoDB", "Next.js"
            ].map((tech, index) => (
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