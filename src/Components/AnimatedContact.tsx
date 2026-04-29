import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { db } from '@/config/firebase';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { containerVariants, itemVariants, floatingAnimation } from '@/constants/animations';
import { socialLinksNoEmail } from '@/constants/social';
import type { ContactFormData, ContactInfo } from '@/types';

const AnimatedContact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const contactInfo: ContactInfo[] = [
    { icon: Mail, title: 'Email', content: 'Henryagukwe01@gmail.com' },
    { icon: Phone, title: 'Phone', content: '+234 903 440 0634' },
    { icon: MapPin, title: 'Location', content: 'Lagos, Nigeria' }
  ];

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: new Date().toISOString(),
        read: false
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 p-6 sm:p-8 lg:p-16 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-emerald-500/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-block">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-white mb-4 relative"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Get in Touch<span className="text-emerald-500">.</span>
              <motion.div
                aria-hidden="true"
                className="absolute -right-4 -top-4 w-8 h-8 border-2 border-emerald-500/30 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.h1>
          </div>
          <motion.p className="text-gray-400 text-lg max-w-2xl mx-auto" variants={itemVariants}>
            Let's discuss your project and explore how we can work together to bring your ideas to life.
          </motion.p>
        </motion.div>

        {/* Contact Info Grid — 1 col → 2 col → 3 col */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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
                aria-hidden="true"
                className="absolute inset-0 bg-emerald-500/10 rounded-lg blur-xl group-hover:bg-emerald-500/20 transition-colors duration-300"
                animate={floatingAnimation}
              />
              <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-8 relative hover:border-emerald-500 transition-colors duration-300">
                <motion.div
                  className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  aria-hidden="true"
                >
                  <item.icon className="w-8 h-8 text-emerald-500" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          className="bg-zinc-900/80 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 relative overflow-hidden"
        >
          {/* Rotating gradient background — using opacity layers instead of animating background */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="relative z-10">
            <motion.h2 className="text-3xl font-bold text-white mb-8" variants={itemVariants}>
              Send Message<span className="text-emerald-500">.</span>
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    <User className="w-4 h-4 inline mr-2" aria-hidden="true" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={!!errors.name}
                    className={`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-zinc-700 focus:border-emerald-500'
                    }`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" aria-hidden="true" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                    className={`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-zinc-700 focus:border-emerald-500'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" aria-hidden="true" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  aria-invalid={!!errors.subject}
                  className={`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 ${
                    errors.subject ? 'border-red-500 focus:border-red-500' : 'border-zinc-700 focus:border-emerald-500'
                  }`}
                  placeholder="Project Discussion"
                />
                {errors.subject && (
                  <p id="subject-error" role="alert" className="text-red-400 text-xs mt-1">{errors.subject}</p>
                )}
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
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-invalid={!!errors.message}
                  className={`w-full px-4 py-3 bg-zinc-800 border rounded-lg text-white focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500 focus:border-red-500' : 'border-zinc-700 focus:border-emerald-500'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
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
                  <Send className="w-5 h-5" aria-hidden="true" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="status"
                    className="text-emerald-500 text-sm"
                  >
                    Message sent successfully!
                  </motion.p>
                )}

                {submitStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                    className="text-red-500 text-sm"
                  >
                    Failed to send message. Please try again.
                  </motion.p>
                )}
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <h3 className="text-2xl font-bold text-white mb-8">Connect with me</h3>
          <motion.div className="flex justify-center space-x-6" variants={containerVariants}>
            {socialLinksNoEmail.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.6 } }}
                className="w-12 h-12 border-2 border-zinc-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-500 hover:border-emerald-500 transition-colors duration-300 relative group"
              >
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-0 bg-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={floatingAnimation}
                />
                <social.icon className="w-6 h-6 relative z-10" aria-hidden="true" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedContact;
