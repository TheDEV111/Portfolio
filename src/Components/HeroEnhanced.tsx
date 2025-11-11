import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Terminal, Sparkles, Rocket, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { SocialLink } from '@/types';

const Hero: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: Github, href: "https://github.com/Henryno111", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/agukwe-henry", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/@boy_gene_us", label: "Twitter" },
    { icon: Mail, href: "mailto:Henryagukwe01@gmail.com", label: "Email" }
  ];

  const techStack = [
    { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "TypeScript", icon: "📘", color: "from-blue-500 to-indigo-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "Python", icon: "🐍", color: "from-yellow-500 to-blue-500" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-emerald-600" },
    { name: "Next.js", icon: "▲", color: "from-gray-800 to-gray-600" }
  ];

  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  
  const rotateX = useTransform(springY, [-300, 300], [10, -10]);
  const rotateY = useTransform(springX, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Typing animation effect
  const [typedText, setTypedText] = React.useState('');
  const roles = ['Full Stack Developer', 'Smart Contract Developer', 'Blockchain Engineer', 'UI/UX Enthusiast'];
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
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 sm:px-8 lg:px-16 py-20">
        {/* Left Panel - Developer Intro */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 max-w-2xl"
        >
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <Badge variant="glow" className="text-sm px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Welcome to my portfolio
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 glow-text">
                Henry
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-emerald-500"
              >
                .
              </motion.span>
            </h1>
          </motion.div>

          {/* Typed Role */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-semibold min-h-[2.5rem]">
              <span className="text-emerald-500">{typedText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-emerald-500 ml-1"
              >
                |
              </motion.span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-gray-400 mb-8 leading-relaxed"
          >
            I design <span className="text-emerald-500 font-semibold">dynamic, responsive web applications</span> that blend innovation with seamless user experiences. With over{' '}
            <span className="text-emerald-500 font-semibold">2+ years</span> of expertise, I create products that captivate and engage users, turning ideas into impactful digital solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Link to="/projects">
              <Button
                size="lg"
                variant="glow"
                className="group w-full sm:w-auto"
              >
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View My Work
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="group w-full sm:w-auto"
            >
              <Terminal className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center text-gray-400 hover:text-emerald-500 hover:border-emerald-500 border-2 border-transparent transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="grid grid-cols-3 gap-4 mt-10"
          >
            {[
              { label: 'Years Experience', value: '2+' },
              { label: 'Projects Completed', value: '15+' },
              { label: 'Happy Clients', value: '10+' },
            ].map((stat, index) => (
              <div key={index} className="glass-effect p-4 rounded-lg text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1, type: 'spring' }}
                  className="text-2xl font-bold text-emerald-500 mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Panel - Interactive Tech Stack */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-1/2 mt-16 lg:mt-0"
          style={{ perspective: '1000px' }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
            }}
            className="relative"
          >
            {/* Floating Tech Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl mx-auto">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8 + index * 0.1,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  className="card-hover"
                >
                  <div className={`glass-effect p-6 rounded-2xl border-2 border-gray-800 hover:border-emerald-500 transition-all duration-300 bg-gradient-to-br ${tech.color} bg-opacity-10`}>
                    <div className="text-4xl mb-3">{tech.icon}</div>
                    <h3 className="text-white font-mono text-sm mb-1">
                      {`<${tech.name} />`}
                    </h3>
                    <div className="w-full bg-gray-700 rounded-full h-1 mt-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ delay: 1 + index * 0.1, duration: 1 }}
                        className="bg-emerald-500 h-1 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Code Snippet */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-10 right-0 glass-effect p-4 rounded-lg max-w-xs hidden lg:block"
            >
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-500 font-mono text-xs">Latest Achievement</span>
              </div>
              <p className="text-gray-300 text-sm">
                Built a real-time blockchain platform with 1000+ active users
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-emerald-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
