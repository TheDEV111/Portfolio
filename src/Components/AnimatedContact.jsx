import React, { useState } from 'react';
// import db from '../firebase/config';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Linkedin, Github, Twitter } from 'lucide-react';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const AnimatedContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Debug log the environment variables
    console.log('Firebase Config Check:', {
      hasApiKey: !!process.env.REACT_APP_FIREBASE_API_KEY,
      hasProjectId: !!process.env.REACT_APP_FIREBASE_PROJECT_ID,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
    });

    try {
      console.log('Starting submission to Firestore...');
      
      // Create data object
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
        status: 'new'
      };

      console.log('Submission data:', submissionData);

      // Attempt to add document
      const docRef = await addDoc(collection(db, 'contacts'), submissionData);
      console.log('Document written with ID:', docRef.id);

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 5000);

    } catch (error) {
      console.error('Detailed error:', {
        message: error.message,
        code: error.code,
        stack: error.stack,
        details: error
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
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
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg py-3 px-10 text-white focus:outline-none focus:border-emerald-500 transition-all duration-300"
                    placeholder="Your name"
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
                    value={formData.email}
                    onChange={handleInputChange}
                    required
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
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
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
                    value={formData.message}
                    onChange={handleInputChange}
                    required
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
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-emerald-500 text-gray-900 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-400 flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <motion.div
                    className="absolute inset-0 bg-emerald-400"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <Send className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-emerald-500 text-center mt-4"
                  >
                    Message sent successfully! We'll get back to you soon.
                  </motion.p>
                )}
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
            { icon: Github, label: "GitHub", link: "https://github.com/Henryno111" },
            { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/in/agukwe-henry" },
            { icon: Twitter, label: "Twitter", link: "https://x.com/@boy_gene_us" }
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.link}
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
    </div>
  );
};

export default AnimatedContact;