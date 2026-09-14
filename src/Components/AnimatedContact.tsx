import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';

import { db } from '@/config/firebase';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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
    if (!formData.name.trim() || formData.name.trim().length < 2) newErrors.name = 'Required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.subject.trim() || formData.subject.trim().length < 3) newErrors.subject = 'Required';
    if (!formData.message.trim() || formData.message.trim().length < 10) newErrors.message = 'Too short';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    <div className="min-h-screen bg-black pt-32 pb-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-900 pb-12">
          <div>
            <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tighter text-white leading-none">
              LET'S<br />
              <span className="text-brand">TALK</span>
            </h1>
          </div>
          <p className="font-sans text-zinc-400 max-w-sm uppercase text-sm tracking-widest font-semibold leading-relaxed">
            HAVE A PROJECT IN MIND? LET'S DISCUSS HOW WE CAN WORK TOGETHER TO BRING YOUR IDEAS TO LIFE.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Contact Info (Left - Col Span 2) */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-display text-4xl uppercase tracking-tighter text-white mb-8">Direct Contact</h2>
              <div className="space-y-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-6 border-l-4 border-brand pl-6">
                    <item.icon className="w-6 h-6 text-brand shrink-0 mt-1" />
                    <div>
                      <h3 className="font-sans text-white text-xs uppercase tracking-widest font-bold mb-1">{item.title}</h3>
                      <p className="font-sans text-zinc-400">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-900">
              <h2 className="font-display text-4xl uppercase tracking-tighter text-white mb-8">Socials</h2>
              <div className="flex gap-4">
                {socialLinksNoEmail.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 border-2 border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-black hover:bg-brand hover:border-brand transition-all duration-300"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form (Right - Col Span 3) */}
          <div className="lg:col-span-3 bg-zinc-900/30 p-8 sm:p-12 border border-zinc-800">
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-sans text-brand text-xs uppercase tracking-widest font-bold">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent border-b-2 py-3 text-white font-sans focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-zinc-700 focus:border-brand'}`}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-sans text-brand text-xs uppercase tracking-widest font-bold">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent border-b-2 py-3 text-white font-sans focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-zinc-700 focus:border-brand'}`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="font-sans text-brand text-xs uppercase tracking-widest font-bold">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full bg-transparent border-b-2 py-3 text-white font-sans focus:outline-none transition-colors ${errors.subject ? 'border-red-500' : 'border-zinc-700 focus:border-brand'}`}
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-sans text-brand text-xs uppercase tracking-widest font-bold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full bg-transparent border-b-2 py-3 text-white font-sans focus:outline-none transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-zinc-700 focus:border-brand'}`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="flex items-center justify-between pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand text-black font-sans font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-white transition-colors flex items-center gap-3 disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-brand font-sans text-sm tracking-widest uppercase font-bold">Sent Successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 font-sans text-sm tracking-widest uppercase font-bold">Failed to send.</p>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnimatedContact;
