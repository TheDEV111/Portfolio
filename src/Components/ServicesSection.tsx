import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Blocks } from 'lucide-react';

const services = [
  {
    title: "FRONTEND ARCHITECTURE",
    description: "Building responsive, high-performance web applications with React, Next.js, and Tailwind CSS. Focus on pixel-perfect UI and seamless UX.",
    icon: Layout,
  },
  {
    title: "BACKEND SYSTEMS",
    description: "Designing robust RESTful APIs and microservices using Node.js, Express, and Python. Emphasis on security, scalability, and clean code.",
    icon: Server,
  },
  {
    title: "DATABASE DESIGN",
    description: "Architecting relational and NoSQL databases with PostgreSQL, MySQL, and Redis. Optimizing queries for high-traffic environments.",
    icon: Database,
  },
  {
    title: "WEB3 & SMART CONTRACTS",
    description: "Developing decentralized applications and smart contracts using Solidity, Clarity, and Rust on Ethereum and Stacks blockchains.",
    icon: Blocks,
  }
];

const ServicesSection: React.FC = () => {
  return (
    <div className="bg-black py-32 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-24 text-center">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-none">
            GET WHAT <br />
            <span className="text-brand font-sans italic font-medium text-4xl md:text-6xl tracking-normal lowercase">you need built</span>
          </h2>
          <p className="mt-8 font-sans text-zinc-400 max-w-lg uppercase text-sm tracking-widest font-semibold leading-relaxed">
            I DELIVER END-TO-END SOLUTIONS. FROM PIXEL-PERFECT INTERFACES TO SECURE BACKEND INFRASTRUCTURE.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-zinc-900/40 border border-zinc-800 p-8 lg:p-12 hover:border-brand transition-colors duration-500 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-brand transition-all duration-500">
                  <service.icon className="w-8 h-8 text-brand" strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h3 className="font-display text-3xl md:text-4xl uppercase text-white tracking-tighter mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="font-sans text-zinc-400 text-sm leading-relaxed tracking-wide mb-8 flex-grow">
                  {service.description}
                </p>
                
                {/* Small CTA / Tech Badge Placeholder */}
                <div className="flex items-center text-brand font-sans text-xs uppercase tracking-widest font-bold">
                  <span>Explore Expertise</span>
                  <div className="w-8 h-px bg-brand ml-4 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServicesSection;
