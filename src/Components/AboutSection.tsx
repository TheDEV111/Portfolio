import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Briefcase, GraduationCap, Code2, Brain } from 'lucide-react';
import type { Experience, Education } from '@/types';

const AboutSection: React.FC = () => {
  const experiences: Experience[] = [
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

  const education: Education[] = [
    {
      degree: "Computer Science",
      institution: "University of Nigeria, Nsukka",
      period: "2021 - Present",
      description: "Currently pursuing a Bachelor's degree in Computer Science with a focus on software engineering and data structures."
    }
  ];

  const skills = [
    "JavaScript/TypeScript", "React.js", "Node.js", "Python",
    "MongoDB", "PostgreSQL", "Firebase", "Solidity",
    "Clarity", "Git/GitHub", "Docker", "AWS"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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

  return (
    <div className="min-h-screen bg-gray-950 py-16 px-6 sm:px-8 lg:px-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Brain className="text-emerald-500 w-8 h-8" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              About Me<span className="text-emerald-500">.</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a strong foundation in modern web technologies 
            and blockchain development. I love creating innovative solutions that make a real impact.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-emerald-500 w-6 h-6" />
              <h2 className="text-2xl font-bold text-white">My Journey</h2>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <p className="text-gray-300 leading-relaxed mb-4">
                My journey into software development began during my university years, where I discovered 
                my passion for creating digital solutions. What started as curiosity about how websites work 
                has evolved into a full-fledged career in full-stack development.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I specialize in React ecosystem, Node.js backend development, and have recently expanded 
                into blockchain development with Solidity and Clarity smart contracts. I'm always eager 
                to learn new technologies and tackle challenging problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="text-emerald-500 w-6 h-6" />
              <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-emerald-500 transition-colors duration-300"
                  >
                    <span className="text-emerald-500 font-medium text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

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
                <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="text-emerald-500 w-6 h-6" />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-emerald-500 transition-all duration-300"
              >
                <h4 className="text-emerald-500 font-semibold text-lg">{edu.degree}</h4>
                <p className="text-gray-300">{edu.institution}</p>
                <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                <p className="text-gray-400">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements/Certifications */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="text-emerald-500 w-6 h-6" />
            <h3 className="text-2xl font-bold text-white">Achievements</h3>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500 mb-2">2+</div>
                <p className="text-gray-400">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500 mb-2">10+</div>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500 mb-2">100%</div>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
