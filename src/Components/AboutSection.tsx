import React from 'react';

import { Award } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-900 pb-12">
          <div>
            <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tighter text-white leading-none">
              ABOUT<br />
              <span className="text-brand">HENRY</span>
            </h1>
          </div>
          <p className="font-sans text-zinc-400 max-w-lg uppercase text-sm tracking-widest font-semibold leading-relaxed">
            FULL STACK DEVELOPER AND BLOCKCHAIN ENGINEER WITH 3+ YEARS BUILDING PRODUCTION-GRADE WEB APPLICATIONS AND ON-CHAIN SYSTEMS.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Journey */}
          <div>
            <h2 className="font-sans text-brand text-xs uppercase tracking-widest font-bold mb-8">My Journey</h2>
            <div className="space-y-6 font-sans text-zinc-300 text-lg leading-relaxed">
              <p>
                My path into software started at university, where curiosity about how digital products are built grew into a career. Over 3+ years I moved from writing first components to co-founding a tech company and leading engineering teams.
              </p>
              <p>
                I went deep into blockchain when I discovered Stellar and Soroban — building DeFi escrow markets, token launchpads, ZK privacy systems, and content provenance infrastructure on-chain. Winning the <span className="text-brand">MetaMask Dev-Cook Hackathon</span> and the <span className="text-brand">Stacks Build Battle</span> validated that direction.
              </p>
              <p>
                Today I offer full product builds — from smart contracts and APIs to polished frontends — plus consulting and auditing for teams building in Web3.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="font-sans text-brand text-xs uppercase tracking-widest font-bold mb-8">Technical Arsenal</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skillGroups.map((group) => (
                <div key={group.label} className="border-l-2 border-zinc-800 pl-6">
                  <h3 className="font-sans text-white text-sm uppercase tracking-widest font-bold mb-4">{group.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="text-xs text-zinc-400 font-medium font-sans uppercase tracking-wider bg-zinc-900 px-3 py-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-t border-zinc-900 pt-24">
          
          {/* Experience */}
          <div>
            <h2 className="font-display text-5xl uppercase tracking-tighter text-white mb-12">Experience</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="group border-l-4 border-zinc-800 hover:border-brand pl-8 transition-colors duration-300">
                  <p className="font-sans text-brand text-xs uppercase tracking-widest font-bold mb-2">{exp.period}</p>
                  <h3 className="font-display text-3xl uppercase tracking-tighter text-white mb-1">{exp.title}</h3>
                  <p className="font-sans text-zinc-500 font-semibold mb-4">{exp.company}</p>
                  <p className="font-sans text-zinc-400 leading-relaxed text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-24">
            <div>
              <h2 className="font-display text-5xl uppercase tracking-tighter text-white mb-12">Education</h2>
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div key={index} className="group border-l-4 border-zinc-800 hover:border-brand pl-8 transition-colors duration-300">
                    <p className="font-sans text-brand text-xs uppercase tracking-widest font-bold mb-2">{edu.period}</p>
                    <h3 className="font-display text-3xl uppercase tracking-tighter text-white mb-1">{edu.degree}</h3>
                    <p className="font-sans text-zinc-500 font-semibold mb-4">{edu.institution}</p>
                    <p className="font-sans text-zinc-400 leading-relaxed text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-5xl uppercase tracking-tighter text-white mb-12">Awards</h2>
              <div className="space-y-8">
                <div className="bg-zinc-900/50 p-8 border border-zinc-800 flex gap-6 hover:border-brand transition-colors duration-300">
                  <Award className="w-8 h-8 text-brand shrink-0" />
                  <div>
                    <h4 className="font-display text-2xl uppercase tracking-tighter text-white mb-2">MetaMask Hackathon Winner</h4>
                    <p className="font-sans text-brand text-xs uppercase tracking-widest font-bold mb-4">Dev-Cook — April 2025</p>
                    <p className="font-sans text-zinc-400 text-sm leading-relaxed">Recognised as the winning developer at the MetaMask Dev-Cook hackathon, delivering an innovative solution within the MetaMask developer platform.</p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-8 border border-zinc-800 flex gap-6 hover:border-brand transition-colors duration-300">
                  <Award className="w-8 h-8 text-brand shrink-0" />
                  <div>
                    <h4 className="font-display text-2xl uppercase tracking-tighter text-white mb-2">Stacks Build Battle Winner</h4>
                    <p className="font-sans text-brand text-xs uppercase tracking-widest font-bold mb-4">February 2025</p>
                    <p className="font-sans text-zinc-400 text-sm leading-relaxed">Took first place at the Stacks Blockchain Build Battle, demonstrating strong proficiency in Bitcoin-layer smart contract development.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutSection;
