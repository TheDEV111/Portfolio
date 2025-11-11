import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, Boxes, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/types';

const ProjectsSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const projects: Project[] = [
    {
      title: "Black Founders Network",
      description: "A slack-like community platform for founders and investors in America",
      longDescription: "Black Founders Network is a comprehensive community platform designed to connect Black entrepreneurs, founders, and investors across America. Built with real-time communication features, the platform facilitates networking, resource sharing, mentorship opportunities, and collaborative growth. It serves as a digital hub where founders can showcase their startups, seek funding, share insights, and build meaningful connections within the Black entrepreneurship ecosystem.",
      tech: ["Vite", "PHP", "Pusher.js", "MySQL", "JavaScript"],
      github: "Undisclosed",
      live: "https://blackfounders.network/",
      image: "/BFN.png",
      category: "Frontend",
      features: [
        "Real-time messaging and notifications",
        "Community channels and direct messaging",
        "Founder and investor profiles",
        "Resource sharing and networking tools",
        "Event management and announcements"
      ],
      challenges: "Building a scalable real-time messaging system with Pusher.js while ensuring smooth user experience across different devices. Managing complex user relationships and implementing efficient database queries for community interactions.",
      outcome: "Successfully launched with an active community of founders and investors. Platform facilitates meaningful connections and has become a vital resource for Black entrepreneurship in America."
    },
    {
      title: "DOCmeet",
      description: "A Real-time mobile responsive medical appointment and consultation web application",
      longDescription: "A comprehensive healthcare platform that connects patients with doctors through real-time video consultations, appointment scheduling, and medical record management.",
      tech: ["React", "Node.js", "ExpressJS", "MongoDB"],
      github: "https://github.com/Henryno111/DOCmeet_web_app/tree/main",
      live: "https://do-cmeet-web-app.vercel.app/",
      image: "/Docmeet.png",
      category: "Full Stack",
      features: [
        "Real-time video consultations",
        "Appointment scheduling",
        "Medical record management",
        "Responsive design"
      ],
      challenges: "Implementing real-time video streaming and ensuring HIPAA compliance",
      outcome: "Successfully deployed with positive user feedback and improved healthcare accessibility"
    },
    {
      title: "GTF(Green Tourism Fund)",
      description: "Decentralized application for funding and wildlife projects using blockchain technology.",
      longDescription: "A blockchain-based platform for transparent funding of environmental and wildlife conservation projects using smart contracts.",
      tech: ["Clarity", "Vite", "Ethereum"],
      github: "https://github.com/orgs/GreenTourismFund-GTF/repositories",
      live: "https://gtf.vercel.app/",
      image: "/GTF.png",
      category: "Blockchain",
      features: [
        "Smart contract funding",
        "Transparent transactions",
        "Project tracking",
        "Community governance"
      ],
      challenges: "Creating secure smart contracts and ensuring scalability",
      outcome: "Launched successfully with multiple funded conservation projects"
    },
    {
      title: "Bridgarr",
      description: "Full-stack e-commerce/escrow solution with features like cart management, payment processing, and admin dashboard.",
      longDescription: "A comprehensive e-commerce platform with integrated escrow services, providing secure transactions for buyers and sellers.",
      tech: ["Next.js", "Postgresql", "Django", "TypeScript"],
      github: "https://github.com/username/ecommerce",
      live: "https://app.bridgarr.com.ng/",
      image: "/Bridgarr.png",
      category: "Full Stack",
      features: [
        "Secure escrow system",
        "Payment processing",
        "Admin dashboard",
        "Cart management"
      ],
      challenges: "Implementing secure payment processing and escrow mechanisms",
      outcome: "Deployed with successful transactions and positive merchant feedback"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20 px-6 sm:px-8 lg:px-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <Badge variant="glow" className="text-sm px-4 py-2">
              <Boxes className="w-4 h-4 mr-2" />
              Portfolio Showcase
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto mb-10"
          >
            Explore my latest work showcasing expertise in{' '}
            <span className="text-emerald-500 font-semibold">full-stack development</span>,{' '}
            <span className="text-emerald-500 font-semibold">blockchain technology</span>, and{' '}
            <span className="text-emerald-500 font-semibold">modern web applications</span>
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-2 border-gray-800 hover:border-emerald-500 transition-all duration-500 bg-gray-900/50 backdrop-blur-sm card-hover">
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="backdrop-blur-sm">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {project.category}
                    </Badge>
                  </div>

                  {/* Quick View Button */}
                  <Link to="/projects">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <Button variant="glow" size="lg">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </Link>
                </div>

                <CardContent className="p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-500 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center glass-effect p-10 rounded-2xl border-2 border-gray-800"
        >
          <Sparkles className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to see more amazing projects?
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Explore my complete portfolio featuring diverse projects across web development, blockchain, and more.
          </p>
          <Link to="/projects">
            <Button variant="glow" size="lg" className="group">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;
