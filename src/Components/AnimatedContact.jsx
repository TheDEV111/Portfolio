import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Linkedin, Github, Twitter } from 'lucide-react';

const AnimatedContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Animation variants
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
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 p-6 sm:p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-emerald-500/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="inline-block">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-white mb-4 relative"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Get in Touch<span className="text-emerald-500">.</span>
              <motion.div
                className="absolute -right-4 -top-4 w-8 h-8 border-2 border-emerald-500/30 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.h1>
          </div>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Let's discuss your project and explore how we can work together to bring your ideas to life.
          </motion.p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {[
            {
              icon: Mail,
              title: 'Email',
              content: 'Henryagukwe01@gmail.com'
            },
            {
              icon: Phone,
              title: 'Phone',
              content: '+234 903 440 0634'
            },
            {
              icon: MapPin,
              title: 'Location',
              content: 'Lagos, Nigeria'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 bg-emerald-500/10 rounded-lg blur-xl group-hover:bg-emerald-500/20 transition-colors duration-300"
                animate={floatingAnimation}
              />
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-8 relative hover:border-emerald-500 transition-colors duration-300">
                <motion.div 
                  className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-8 h-8 text-emerald-500" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-gray-800 relative overflow-hidden"
        >
          {/* Animated border gradient */}
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)",
                "linear-gradient(180deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)",
                "linear-gradient(225deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)",
                "linear-gradient(270deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <div className="relative z-10">
            <motion.h2 
              className="text-3xl font-bold text-white mb-8"
              variants={itemVariants}
            >
              Send Message<span className="text-emerald-500">.</span>
            </motion.h2>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <label className="text-gray-400 block mb-2">Name</label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 group-hover:text-emerald-500 transition-colors" />
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg py-3 px-10 text-white focus:outline-none focus:border-emerald-500 transition-all duration-300"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <motion.div
                    className="absolute inset-0 border border-emerald-500/0 rounded-lg"
                    whileHover={{ borderColor: "rgba(16, 185, 129, 0.2)" }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </motion.div>

              {/* Email Input */}
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <label className="text-gray-400 block mb-2">Email</label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 group-hover:text-emerald-500 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg py-3 px-10 text-white focus:outline-none focus:border-emerald-500 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </motion.div>

              {/* Subject Input */}
              <motion.div 
                className="relative md:col-span-2"
                variants={itemVariants}
              >
                <label className="text-gray-400 block mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-emerald-500 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div 
                className="relative md:col-span-2"
                variants={itemVariants}
              >
                <label className="text-gray-400 block mb-2">Message</label>
                <div className="relative group">
                  <MessageSquare className="absolute left-3 top-3 text-gray-500 w-5 h-5 group-hover:text-emerald-500 transition-colors" />
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg py-3 px-10 text-white focus:outline-none focus:border-emerald-500 transition-all duration-300"
                    placeholder="Your message"
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div 
                className="md:col-span-2"
                variants={itemVariants}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-emerald-500 text-gray-900 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-400 flex items-center justify-center gap-2 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-emerald-400"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <Send className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </motion.button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          className="mt-16 flex justify-center space-x-6"
        >
          {[
            { icon: Github, label: "GitHub" },
            { icon: Linkedin, label: "LinkedIn" },
            { icon: Twitter, label: "Twitter" }
          ].map((social, index) => (
            <motion.div
              key={social.label}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
                transition: { duration: 0.6 }
              }}
              className="w-12 h-12 border-2 border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-500 hover:border-emerald-500 transition-colors duration-300 relative group"
            >
              <motion.div
                className="absolute inset-0 bg-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={floatingAnimation}
              />
              <social.icon className="w-6 h-6 relative z-10" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedContact;