import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  return (
    <div className="relative bg-zinc-900 py-32 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Vibrant Abstract Background replacing the floral design */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-600 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Header */}
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-[0.8] mb-16 drop-shadow-2xl">
          RECORD<br />
          <span className="text-white font-sans italic font-light text-4xl md:text-6xl tracking-normal lowercase relative z-20">of</span><br />
          SUCCESS
        </h2>

        {/* Floating "Book/Resume" Card */}
        <motion.div
          whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full max-w-md bg-white text-black p-8 md:p-12 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-l-8 border-brand mb-12 transform perspective-1000 cursor-pointer"
        >
          <div className="border-2 border-black p-8 h-full flex flex-col items-center justify-center">
            <h3 className="font-display text-4xl md:text-5xl uppercase tracking-tighter mb-4 text-center">
              The Dev<br />Resume
            </h3>
            <div className="w-16 h-1 bg-brand mb-6" />
            <p className="font-sans font-bold text-sm uppercase tracking-widest text-center">
              HENRY AGUKWE
            </p>
            <p className="font-sans text-xs mt-2 text-zinc-500 font-medium">
              Full Stack Developer
            </p>
          </div>
        </motion.div>

        {/* Text Snippet */}
        <p className="font-sans text-zinc-200 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-md">
          I've built and shipped five production full-stack applications across SaaS, fintech, and Web3 domains. Recently secured <b>1st Place at the MetaMask Dev-Cook Hackathon (2025)</b> by designing and shipping a complete fintech application in just 5 days.
        </p>

        {/* CTA */}
        <a href="/Henry_Agukwe_Resume.pdf" download aria-label="Download Resume PDF">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand text-black font-sans font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-white transition-colors shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center gap-3"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>
        </a>

      </div>
    </div>
  );
};

export default AchievementsSection;
