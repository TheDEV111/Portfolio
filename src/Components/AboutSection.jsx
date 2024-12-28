import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Briefcase, GraduationCap, Code2, Brain } from 'lucide-react';

const AboutSection = () => {
  const experiences = [
    {
        title: "Frontend Developer Intern",
        company: "Sharperly NG",
        period: "2024",
        description: "Contributed to web application development, introduced to Nextjs app router and redesigned SVG assets."
    },
    {
      title: "Full Stack Developer",
      company: "HitoAI",
      period: "2024 - Present",
      description: "Developed and maintained web applications using React, Node.js, Firebase and MongoDB. Implemented responsive designs."
    },
    {
      title: "Smart Contract Developer",
      company: "Freelance",
      period: "2024 - Present",
      description: "Built and audited smart contracts for DeFi protocols. Implemented secure and gas-efficient solutions using Clarity and Solidity."
    }
  ];

  const education = [
    {
      degree: "Computer Science",
      school: "National Open University of Nigeria",
      period: "2019- 2024",
      description: "Focus on software engineering, algorithms, and distributed systems."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col lg:flex-row">
      {/* Left Panel - About Me */}
      <motion.div 
        initial={{ opacity: 0, y: 50, x: 0 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 min-h-[60vh] lg:min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 p-6 sm:p-8 lg:p-16 flex items-center justify-center relative overflow-hidden"
      >
        {/* Code Background Effect */}
        <div className="absolute inset-0 opacity-5">
          <pre className="text-xs sm:text-sm text-green-500 font-mono">
            {`class Developer {
  constructor() {
    this.passion = "Building Digital Solutions";
    this.focus = [
      "Web Development",
      "Smart Contracts",
      "System Architecture"
    ];
  }

  createValue() {
    return Innovation.combine(
      this.passion,
      this.focus
    );
  }
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
              <BookOpen className="text-emerald-500 w-6 h-6" />
              <span className="text-emerald-500 font-mono">About Me</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Turning Vision Into
              <span className="text-emerald-500"> Reality</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-400 mb-8">
              As a Full Stack Developer with a passion for blockchain technology, I bridge the gap between innovative ideas and practical solutions. My journey in tech has been driven by a constant desire to learn and create impactful digital experiences.
            </p>

            {/* Key Skills */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Code2, title: "Web Development", desc: "Full Stack Expertise" },
                { icon: Brain, title: "Problem Solving", desc: "Analytical Approach" },
                { icon: Award, title: "Best Practices", desc: "Clean & Efficient Code" },
                { icon: Briefcase, title: "Professional", desc: "Project Management" }
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-emerald-500 transition-all duration-300"
                >
                  <skill.icon className="text-emerald-500 w-6 h-6 mb-2" />
                  <h3 className="text-white font-semibold">{skill.title}</h3>
                  <p className="text-gray-400 text-sm">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel - Experience & Education */}
      <motion.div
        initial={{ opacity: 0, y: 50, x: 0 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 min-h-[40vh] lg:min-h-screen bg-gray-900 p-6 sm:p-8 lg:p-16 relative"
      >
        {/* Experience Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="text-emerald-500 w-6 h-6" />
            <h3 className="text-2xl font-bold text-white">Experience</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-emerald-500 transition-all duration-300"
              >
                <h4 className="text-emerald-500 font-semibold text-lg">{exp.title}</h4>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="text-emerald-500 w-6 h-6" />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-emerald-500 transition-all duration-300"
              >
                <h4 className="text-emerald-500 font-semibold text-lg">{edu.degree}</h4>
                <p className="text-gray-300">{edu.school}</p>
                <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                <p className="text-gray-400">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Achievement Card */}
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
          <h3 className="text-emerald-500 font-semibold mb-2">Professional Growth</h3>
          <p className="text-gray-300 text-sm">
            Continuously expanding knowledge in emerging technologies and best practices
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;