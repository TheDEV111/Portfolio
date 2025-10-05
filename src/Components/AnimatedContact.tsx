import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { db } from '@/config/firebase';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Linkedin, Github, Twitter } from 'lucide-react';
import type { ContactFormData, ContactInfo, SocialLink } from '@/types';

const AnimatedContact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

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

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: new Date().toISOString(),
        read: false
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo: ContactInfo[] = [
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
  ];

  const socialLinks: SocialLink[] = [
    { icon: Github, href: "https://github.com/Henryno111", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/agukwe-henry", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/@boy_gene_us", label: "Twitter" }
  ];

  return (
    <div className="min-h-screen bg-gray-950 p-6 sm:p-8 lg:p-16 relative overflow-hidden">
      {/* Background animations */}
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
          {contactInfo.map((item) => (
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
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                
                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-emerald-500 text-sm"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                
                {submitStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm"
                  >
                    Failed to send message. Please try again.
                  </motion.p>
                )}
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Social Links Section */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Connect with me</h3>
          <motion.div 
            className="flex justify-center space-x-6"
            variants={containerVariants}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
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
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedContact;
