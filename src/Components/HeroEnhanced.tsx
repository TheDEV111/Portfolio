import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, Sparkles, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { socialLinks } from '@/constants/social';
import profileImage from '@/Assets/imageProfile.JPG';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = React.useState('');
  const roles = [
    'Full Stack Developer',
    'Blockchain Engineer',
    'DeFi Builder',
    'Open Source Contributor',
  ];
  const [roleIndex, setRoleIndex] = React.useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [roleIndex]);

  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000,transparent)]"
      />

      {/* Minimal ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 sm:px-8 lg:px-20 gap-16 py-24">

        {/* Left — Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 max-w-xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-6"
          >
            <Badge variant="glow" className="text-sm px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" />
              Available for projects
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight"
          >
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Henry
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-emerald-500"
              aria-hidden="true"
            >
              .
            </motion.span>
          </motion.h1>

          {/* Typed role */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-6"
          >
            <h2 className="text-2xl sm:text-3xl text-gray-300 font-semibold min-h-[2.5rem]">
              <span className="text-emerald-400">{typedText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-emerald-400 ml-0.5"
                aria-hidden="true"
              >
                |
              </motion.span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-base text-gray-400 mb-8 leading-relaxed"
          >
            I build{' '}
            <span className="text-emerald-400 font-medium">full-stack products</span>{' '}
            and{' '}
            <span className="text-emerald-400 font-medium">on-chain systems</span>{' '}
            — from DeFi protocols and content provenance platforms on Stellar & Stacks,
            to scalable web apps with React, Next.js, Node.js and Go.
            I offer{' '}
            <span className="text-white font-medium">end-to-end product builds</span>,{' '}
            <span className="text-white font-medium">smart contract auditing</span>, and{' '}
            <span className="text-white font-medium">blockchain consulting</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <Link to="/projects">
              <Button size="lg" variant="glow" className="group w-full sm:w-auto">
                <Rocket className="w-4 h-4 group-hover:rotate-12 transition-transform" aria-hidden="true" />
                View My Work
              </Button>
            </Link>

            <Link to="/contact">
              <Button size="lg" variant="outline" className="group w-full sm:w-auto">
                Hire Me
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="ghost"
              className="group w-full sm:w-auto text-gray-400 hover:text-white"
              asChild
            >
              <a href="/Frontend_resume.pdf" download aria-label="Download resume PDF">
                <Terminal className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="flex gap-3 mb-10"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.08 }}
                className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-gray-500 hover:text-emerald-400 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-200"
              >
                <social.icon className="w-4 h-4" aria-hidden="true" />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-4"
          >
            {[
              { label: 'Years Experience', value: '3+' },
              { label: 'GitHub Repos', value: '110+' },
              { label: 'Hackathons Won', value: '2' },
            ].map((stat, index) => (
              <div key={index} className="text-center py-3 border border-zinc-800 rounded-lg bg-zinc-900/40">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1 + index * 0.1, type: 'spring' }}
                  className="text-xl font-bold text-emerald-400 mb-0.5"
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-auto flex justify-center"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500/40 via-cyan-500/20 to-emerald-500/40 blur-sm"
              aria-hidden="true"
            />

            {/* Static ring border */}
            <div className="absolute -inset-0.5 rounded-full border border-emerald-500/30" aria-hidden="true" />

            {/* Image */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-zinc-800">
              <img
                src={profileImage}
                alt="Henry Agukwe — Full Stack & Blockchain Developer"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating status pill */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-effect px-4 py-2 rounded-full border border-emerald-500/30 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span className="text-xs text-gray-300 font-medium whitespace-nowrap">Open to work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-700"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
