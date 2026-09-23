import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImage from '@/Assets/imageProfile.JPG';
import { Globe, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, 200]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const circlesY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center pt-32 pb-20">
      
      {/* Abstract Concentric Circles Background */}
      <motion.div style={{ y: circlesY }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-zinc-900 rounded-full opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-zinc-800 rounded-full opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-zinc-700 rounded-full opacity-50" />
      </motion.div>
      
      {/* Background Crosshairs */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-zinc-900 opacity-50" />
      <div className="absolute left-0 right-0 top-1/2 h-px bg-zinc-900 opacity-50" />

      {/* Top Labels */}
      <div className="w-full max-w-7xl px-6 flex justify-between text-zinc-500 font-sans text-xs tracking-widest uppercase absolute top-32 z-10">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-brand" /> Full Stack Developer
        </div>
        <div className="hidden sm:block">Lagos, Nigeria</div>
      </div>

      {/* Profile Image */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 mt-12 mb-8"
      >
        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-zinc-800 shadow-2xl relative">
          <img
            src={profileImage}
            alt="Henry Agukwe"
            className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
          />
          {/* Cyan Glow behind image */}
          <div className="absolute inset-0 bg-brand/20 mix-blend-overlay pointer-events-none" />
        </div>
      </motion.div>

      {/* Massive Typography */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 text-center flex flex-col items-center px-4"
      >
        <h2 className="text-white font-sans text-2xl sm:text-3xl md:text-4xl italic font-light mb-[-10px] sm:mb-[-20px] z-30">
          Hello, I'm
        </h2>
        <h1 className="font-display text-[15vw] sm:text-[12vw] leading-none text-brand uppercase tracking-tight text-center drop-shadow-2xl">
          HENRY AGUKWE
        </h1>
      </motion.div>

      {/* Bio / Intro text */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-20 max-w-3xl mt-8 px-6 text-center"
      >
        <div className="flex items-center justify-center mb-6">
          <Globe className="w-10 h-10 text-zinc-600" />
        </div>
        <p className="text-white font-sans text-lg sm:text-xl md:text-2xl font-medium leading-relaxed tracking-wide uppercase">
          MORE THAN A DEVELOPER WITH 3+ YEARS OF EXPERIENCE ACROSS WEB2 AND WEB3. I'M A PROBLEM SOLVER, SYSTEM ARCHITECT, AND COMMITTED OPEN SOURCE CONTRIBUTOR. THROUGH MY CODE, I BUILD PRODUCTS THAT SCALE, AUTOMATE COMPLEX WORKFLOWS, AND CONNECT USERS WITH SEAMLESS DIGITAL EXPERIENCES.
        </p>
      </motion.div>

      {/* Stats Overlay Block */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-30 w-full max-w-lg mt-24"
      >
        <div className="absolute inset-0 bg-brand shadow-[0_0_50px_rgba(34,211,238,0.3)] transform -skew-y-2 z-0" />
        <div className="relative z-10 bg-brand text-black p-10 text-center border-4 border-black">
          <h3 className="font-display text-4xl sm:text-5xl uppercase leading-none mb-4">
            THESE AREN'T<br/>JUST STATISTICS
          </h3>
          <p className="font-sans font-bold text-sm sm:text-base uppercase tracking-wider">
            THEY'RE PROOF OF A COMMITMENT TO EXCELLENCE THAT'S ACTIVE, LOYAL, AND READY TO BUILD RELIABLE SYSTEMS.
          </p>
        </div>

        {/* Floating Stat boxes behind */}
        <div className="absolute -top-12 -left-12 w-48 bg-zinc-900 border border-zinc-800 p-6 z-0 hidden md:block opacity-80 shadow-2xl">
          <h4 className="font-display text-5xl text-white">5+</h4>
          <p className="text-zinc-500 font-sans text-xs uppercase font-bold mt-2">Production Apps<br/>Worldwide</p>
        </div>
        <div className="absolute -bottom-12 -right-12 w-48 bg-zinc-900 border border-zinc-800 p-6 z-0 hidden md:block opacity-80 shadow-2xl">
          <h4 className="font-display text-5xl text-white">100%</h4>
          <p className="text-zinc-500 font-sans text-xs uppercase font-bold mt-2">Client Satisfaction<br/>Average</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
