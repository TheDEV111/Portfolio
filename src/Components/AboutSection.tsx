import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Briefcase, GraduationCap, Code2, Brain } from 'lucide-react';
import type { Experience, Education } from '@/types';

const AboutSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: "Co-Founder & Lead Software Engineer",
      company: "TruthChain (Remote)",
      period: "Sep 2025 – Present",
      description: "Building a content provenance platform on-chain — designing smart contracts for authorship verification and tamper-proof media records. Leading full-stack engineering with React.js, Node.js, and Soroban smart contracts. Architecting backend services, RESTful APIs, and driving all technical decisions in an Agile environment."
    },
    {
      title: "Full Stack Engineer",
      company: "HitoAI (Remote)",
      period: "2024 – 2025",
      description: "Developed responsive web applications using React.js and Next.js. Built and maintained backend APIs with Node.js, integrated RESTful services, automated workflows reducing manual processes by 30%, and contributed to AWS-based infrastructure."
    },
    {
      title: "Software Engineer Intern",
      company: "Sharperly NG",
      period: "Jun 2023 – Dec 2023",
      description: "Built reusable frontend components using React and Tailwind CSS. Integrated backend APIs, translated UI/UX designs into responsive interfaces, assisted in debugging and testing, and worked within Agile sprint cycles."
    }
  ];

  const education: Education[] = [
    {
      degree: "B.Sc. Computer Science",
      institution: "National Open University of Nigeria",
      period: "2019 – 2024",
      description: "Bachelor's degree in Computer Science with a focus on software engineering, data structures, and algorithms."
    },
    {
      degree: "ALX Software Engineering Program",
      institution: "ALX Africa",
      period: "2023 – 2024",
      description: "Intensive software engineering programme covering full-stack development, system design, DevOps, and professional engineering practices."
    }
  ];

  const skillGroups = [
    {
      label: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      label: "Backend",
      skills: ["Node.js", "Express.js", "NestJS", "Go", "Python", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      label: "Blockchain & Web3",
      skills: ["Soroban (Rust)", "Stellar Network", "Solidity", "Clarity (Stacks)", "Ethers.js", "ZK Proofs", "DeFi", "Smart Contracts"]
    },
    {
      label: "DevOps & Tools",
      skills: ["Docker", "AWS", "CI/CD", "GitHub Actions", "Git", "Jira"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-zinc-950 py-16 px-6 sm:px-8 lg:px-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="text-emerald-500 w-7 h-7" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              About Me<span className="text-emerald-500">.</span>
            </h1>
          </div>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer and Blockchain Engineer with 3+ years building production-grade
            web applications and on-chain systems. I specialise in{' '}
            <span className="text-emerald-400 font-medium">DeFi protocols</span>,{' '}
            <span className="text-emerald-400 font-medium">content provenance on-chain</span>, and{' '}
            <span className="text-emerald-400 font-medium">end-to-end product engineering</span>.
          </p>
        </motion.div>

        {/* Journey + Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          {/* My Journey */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-emerald-500 w-5 h-5" />
              <h2 className="text-xl font-bold text-white">My Journey</h2>
            </div>
            <div className="bg-zinc-900/40 p-6 rounded-xl border border-zinc-800 space-y-4">
              <p className="text-gray-300 leading-relaxed text-sm">
                My path into software started at university, where curiosity about how digital
                products are built grew into a career. Over 3+ years I moved from writing first
                components to co-founding a tech company and leading engineering teams.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                I went deep into blockchain when I discovered Stellar and Soroban — building
                DeFi escrow markets, token launchpads, ZK privacy systems, and content provenance
                infrastructure on-chain. Winning the{' '}
                <span className="text-emerald-400 font-medium">MetaMask Dev-Cook Hackathon</span>{' '}
                and the{' '}
                <span className="text-emerald-400 font-medium">Stacks Build Battle</span>{' '}
                validated that direction.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                Today I offer full product builds — from smart contracts and APIs to polished
                frontends — plus consulting and auditing for teams building in Web3.
              </p>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="text-emerald-500 w-5 h-5" />
              <h2 className="text-xl font-bold text-white">Technical Skills</h2>
            </div>
            <div className="bg-zinc-900/40 p-6 rounded-xl border border-zinc-800 space-y-5">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="text-emerald-500 w-5 h-5" />
            <h3 className="text-xl font-bold text-white">Experience</h3>
          </div>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/40 p-5 rounded-xl border border-zinc-800 hover:border-emerald-500/40 transition-colors duration-300"
              >
                <h4 className="text-emerald-400 font-semibold">{exp.title}</h4>
                <p className="text-gray-300 text-sm">{exp.company}</p>
                <p className="text-gray-600 text-xs mb-3">{exp.period}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="text-emerald-500 w-5 h-5" />
            <h3 className="text-xl font-bold text-white">Education</h3>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-zinc-900/40 p-5 rounded-xl border border-zinc-800 hover:border-emerald-500/40 transition-colors duration-300"
              >
                <h4 className="text-emerald-400 font-semibold">{edu.degree}</h4>
                <p className="text-gray-300 text-sm">{edu.institution}</p>
                <p className="text-gray-600 text-xs mb-3">{edu.period}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-6">
            <Award className="text-emerald-500 w-5 h-5" />
            <h3 className="text-xl font-bold text-white">Achievements</h3>
          </div>
          <div className="bg-zinc-900/40 p-6 rounded-xl border border-zinc-800">
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '110+', label: 'GitHub Repos' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-800 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-zinc-800/40 p-5 rounded-xl border border-zinc-700 hover:border-emerald-500/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <Award className="text-emerald-400 w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">
                      MetaMask Developer Hackathon Winner
                    </h4>
                    <p className="text-emerald-400 text-xs mb-2">Dev-Cook — April 2025</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Recognised as the winning developer at the MetaMask Dev-Cook hackathon,
                      delivering an innovative solution within the MetaMask developer platform
                      against top Web3 builders.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-zinc-800/40 p-5 rounded-xl border border-zinc-700 hover:border-emerald-500/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <Award className="text-emerald-400 w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">
                      Stacks Blockchain Build Battle Winner
                    </h4>
                    <p className="text-emerald-400 text-xs mb-2">February 2025</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Took first place at the Stacks Blockchain Build Battle, demonstrating
                      strong proficiency in Bitcoin-layer smart contract development and
                      delivering a high-impact dApp on the Stacks network.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
