/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Layout, 
  Lightbulb, 
  Maximize, 
  Box, 
  Camera, 
  Mail, 
  Phone, 
  Instagram, 
  Linkedin, 
  ArrowRight, 
  X,
  ChevronRight,
  MessageSquare
} from 'lucide-react';
import { PROJECTS, EXPERTISE } from './constants';
import { Project } from './types';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Projects', 'About', 'Expertise', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'py-4 bg-luxury-bg/90 backdrop-blur-lg border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg md:text-xl font-serif tracking-[0.2em] text-luxury-accent z-50 uppercase"
        >
          Vaishnavi Khandelwal
        </motion.div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 xl:gap-12 text-xs uppercase tracking-[0.2em] font-medium text-white/60">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-luxury-accent transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden xl:block px-6 py-2 border border-luxury-accent/30 rounded-full text-[10px] uppercase tracking-widest hover:bg-luxury-accent hover:text-luxury-bg transition-all duration-500"
          >
            Inquiry
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <div className="space-y-1.5"><div className="w-6 h-px bg-white"></div><div className="w-4 h-px bg-white ml-auto"></div></div>}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-luxury-bg z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-serif text-white hover:text-luxury-accent transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="mt-8 px-12 py-4 border border-luxury-accent/30 rounded-full text-xs uppercase tracking-widest text-luxury-accent">
              Inquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  key?: string;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div 
      layoutId={`card-${project.id}`}
      onClick={onClick}
      className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-neutral-900"
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img 
        src={project.heroImage} 
        alt={project.title}
        className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-luxury-bg/80 to-transparent">
        <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-accent mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          {project.category}
        </p>
        <h3 className="text-3xl font-serif mb-4 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
          {project.title}
        </h3>
        <div className="w-12 h-px bg-luxury-accent group-hover:w-full transition-all duration-700" />
      </div>
    </motion.div>
  );
};

interface CaseStudyProps {
  project: Project;
  onClose: () => void;
}

const CaseStudy = ({ project, onClose }: CaseStudyProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-luxury-bg"
    >
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-[110] p-4 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 hover:bg-luxury-accent hover:text-luxury-bg transition-all duration-300"
      >
        <X size={24} />
      </button>

      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <motion.img 
          layoutId={`card-${project.id}`}
          src={project.heroImage} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs uppercase tracking-[0.5em] text-luxury-accent mb-6"
            >
              {project.category}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-serif mb-8"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Concept */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start mb-20 md:mb-32">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 md:mb-8">The Concept</h2>
            <p className="text-xl md:text-2xl font-serif leading-relaxed text-luxury-accent italic">
              "{project.concept}"
            </p>
          </div>
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/40">Overview</h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed font-light">
              {project.description}
            </p>
          </div>
        </div>

        {/* 3D Renders Gallery */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8 md:mb-12">3D Visualization Gallery</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {project.gallery.map((img, i) => (
              <div key={i} className={`overflow-hidden ${i === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`}>
                <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

        {/* 2D Drawings & Execution */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-20 md:mb-32">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6 md:mb-8">Technical Documentation</h2>
            <div className="aspect-[4/3] bg-neutral-900 overflow-hidden">
              <img src={project.drawings[0]} className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6 md:mb-8">Site Execution</h2>
            <div className="aspect-[4/3] bg-neutral-900 overflow-hidden">
              <img src={project.execution[0]} className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        {/* Video & VR */}
        {project.videoUrl && (
          <div className="mb-20 md:mb-32">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8 md:mb-12">Cinematic Walkthrough</h2>
            <div className="aspect-video w-full bg-neutral-900">
               <iframe 
                width="100%" 
                height="100%" 
                src={project.videoUrl} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Testimonial */}
        {project.testimonial && (
          <div className="py-20 md:py-32 border-y border-white/5 text-center">
            <MessageSquare className="mx-auto mb-8 md:mb-12 text-luxury-accent opacity-50 md:w-12 md:h-12" size={32} />
            <p className="text-2xl md:text-5xl font-serif italic max-w-4xl mx-auto leading-tight mb-8 md:mb-12">
              "{project.testimonial.text}"
            </p>
            <p className="text-[10px] uppercase tracking-[0.5em] text-luxury-accent">
              — {project.testimonial.author}
            </p>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <footer className="bg-neutral-900 py-24 text-center">
        <h2 className="text-3xl font-serif mb-8">Ready to start your project?</h2>
        <button 
          onClick={onClose}
          className="px-12 py-4 bg-luxury-accent text-luxury-bg text-xs uppercase tracking-[0.3em] font-bold hover:bg-white transition-colors duration-300"
        >
          Back to Portfolio
        </button>
      </footer>
    </motion.div>
  );
};

interface ExpertiseModalProps {
  item: Expertise;
  onClose: () => void;
  Icon: any;
}

const ExpertiseModal = ({ item, onClose, Icon }: ExpertiseModalProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-luxury-bg flex items-center justify-center p-6"
    >
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-[110] p-4 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 hover:bg-luxury-accent hover:text-luxury-bg transition-all duration-300"
      >
        <X size={24} />
      </button>

      <div className="max-w-4xl w-full bg-neutral-900/50 border border-white/5 rounded-3xl overflow-hidden glass-morphism">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-full bg-luxury-accent text-luxury-bg">
              <Icon size={32} />
            </div>
            <h2 className="text-xs uppercase tracking-[0.5em] text-luxury-accent mb-4">Expertise Detail</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8">{item.title}</h3>
            <p className="text-xl text-white/80 font-serif italic mb-8 leading-relaxed">
              "{item.expandedDescription}"
            </p>
            <p className="text-white/50 font-light leading-relaxed mb-8">
              {item.description} Our approach to {item.title.toLowerCase()} is rooted in precision, creativity, and a deep understanding of spatial dynamics. We utilize the latest industry tools to ensure every detail is meticulously crafted.
            </p>
            <button 
              onClick={onClose}
              className="self-start px-8 py-3 border border-luxury-accent text-luxury-accent text-[10px] uppercase tracking-widest hover:bg-luxury-accent hover:text-luxury-bg transition-all"
            >
              Close Details
            </button>
          </div>
          <div className="grid grid-cols-1 gap-2 p-2 bg-black/20">
            {item.previews.map((img, i) => (
              <div key={i} className="aspect-video overflow-hidden rounded-xl">
                <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExpertise, setSelectedExpertise] = useState<Expertise | null>(null);
  const [hoveredExpertise, setHoveredExpertise] = useState<number | null>(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(heroScroll, [0, 1], ["0%", "25%"]);

  const expertiseIcons: Record<string, any> = {
    Layout: Layout,
    Lightbulb: Lightbulb,
    Maximize: Maximize,
    Box: Box,
    Camera: Camera,
  };

  return (
    <div className="relative min-h-screen selection:bg-luxury-accent selection:text-luxury-bg">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-luxury-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home" ref={heroRef} className="relative min-h-screen w-full flex items-center overflow-hidden py-24 lg:py-0">
          <div className="absolute inset-0 z-0">
            <motion.img 
              style={{ y: yBg }}
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2560" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover opacity-40 scale-110 animate-slow-zoom"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-luxury-bg via-luxury-bg/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center pt-32 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center lg:text-left z-20 lg:pr-12"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-[1.1] mb-6 md:mb-8 max-w-[15ch] lg:max-w-none mx-auto lg:mx-0">
                Senior Interior <br className="hidden sm:block" />
                <span className="text-luxury-accent italic">Designer</span> & 3D <br className="hidden sm:block" />
                Visualizer
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/60 max-w-md mx-auto lg:mx-0 mb-8 md:mb-12 font-light leading-relaxed">
                Creating immersive residential and commercial spaces through spatial storytelling and high-quality visualization.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
                <a 
                  href="#projects"
                  className="px-6 md:px-8 py-3 md:py-4 bg-luxury-accent text-luxury-bg text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-colors duration-300 flex items-center gap-4"
                >
                  View Projects <ArrowRight size={14} />
                </a>
                <a 
                  href="#contact"
                  className="px-6 md:px-8 py-3 md:py-4 border border-white/20 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-luxury-bg transition-all duration-300"
                >
                  Contact
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="relative aspect-[3/4] w-full max-w-[240px] sm:max-w-[320px] lg:max-w-sm lg:ml-auto z-10"
            >
              <div className="absolute -inset-4 border border-luxury-accent/20 translate-x-4 translate-y-4 sm:translate-x-8 sm:translate-y-8 z-0" />
              <div className="relative z-10 w-full h-full bg-neutral-800 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  alt="Designer Portrait" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
            <span className="text-[10px] uppercase tracking-[0.5em] vertical-text">Scroll</span>
            <div className="w-px h-8 md:h-12 bg-white/20" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 bg-luxury-bg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4">
                <h2 className="text-xs uppercase tracking-[0.5em] text-luxury-accent mb-6 md:mb-8">The Philosophy</h2>
              </div>
              <div className="md:col-span-8">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-5xl font-serif leading-tight mb-8 md:mb-12"
                >
                  I am a Senior Interior Designer & 3D Visualizer specializing in concept development, space planning, and photorealistic visualization.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-2xl mb-8 md:mb-12"
                >
                  With experience across residential and commercial projects — including international collaborations in Kuwait and Singapore — I transform ideas into immersive visual experiences. Design is not just my profession — it is my passion.
                </motion.p>
                <div className="luxury-divider" />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="projects" className="py-20 md:py-32 bg-luxury-bg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
              <div>
                <h2 className="text-xs uppercase tracking-[0.5em] text-luxury-accent mb-4 md:mb-6">Selected Works</h2>
                <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif">Portfolio</h3>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-8 text-[10px] uppercase tracking-widest text-white/40">
                <span className="text-white border-b border-luxury-accent pb-2">All Projects</span>
                <span className="hover:text-white cursor-pointer transition-colors">Residential</span>
                <span className="hover:text-white cursor-pointer transition-colors">Commercial</span>
                <span className="hover:text-white cursor-pointer transition-colors">International</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {PROJECTS.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={() => setSelectedProject(project)} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-20 md:py-32 bg-neutral-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-xs uppercase tracking-[0.5em] text-luxury-accent mb-4 md:mb-6">Visualization Studio</h2>
              <h3 className="text-4xl sm:text-5xl font-serif">Areas of Expertise</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
              {EXPERTISE.map((item, i) => {
                const Icon = expertiseIcons[item.icon];
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onMouseEnter={() => setHoveredExpertise(i)}
                    onMouseLeave={() => setHoveredExpertise(null)}
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        if (hoveredExpertise === i) {
                          setSelectedExpertise(item);
                        } else {
                          setHoveredExpertise(i);
                        }
                      } else {
                        setSelectedExpertise(item);
                      }
                    }}
                    className={`relative text-center group cursor-pointer ${i === EXPERTISE.length - 1 && EXPERTISE.length % 2 !== 0 ? 'col-span-2 md:col-span-1' : ''}`}
                  >
                    {/* Hover Panel */}
                    <AnimatePresence>
                      {hoveredExpertise === i && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-8 w-64 md:w-80 z-30 pointer-events-auto"
                        >
                          <div className="glass-morphism p-6 rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              {item.previews.map((img, idx) => (
                                <div key={idx} className="aspect-square rounded-lg overflow-hidden bg-neutral-800">
                                  <img src={img} alt="Preview" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                                </div>
                              ))}
                            </div>
                            <p className="text-[10px] md:text-xs text-white/70 leading-relaxed mb-4 text-left font-light italic">
                              {item.expandedDescription}
                            </p>
                            <div 
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedExpertise(item);
                              }}
                              className="flex items-center gap-2 text-luxury-accent text-[8px] md:text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors"
                            >
                              View More <ArrowRight size={10} />
                            </div>
                          </div>
                          {/* Arrow */}
                          <div className="w-4 h-4 bg-neutral-900 border-r border-b border-white/10 rotate-45 absolute -bottom-2 left-1/2 -translate-x-1/2 z-[-1] backdrop-blur-xl" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 flex items-center justify-center rounded-full border border-white/10 group-hover:border-luxury-accent group-hover:bg-luxury-accent group-hover:text-luxury-bg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500"
                    >
                      <Icon size={20} className="md:w-6 md:h-6" />
                    </motion.div>
                    <h4 className="text-[10px] md:text-sm uppercase tracking-widest mb-3 md:mb-4 font-bold group-hover:text-luxury-accent transition-colors">{item.title}</h4>
                    <p className="text-[10px] md:text-xs text-white/40 leading-relaxed px-2">{item.description}</p>
                    <div className="w-0 h-px bg-luxury-accent mx-auto mt-4 group-hover:w-12 transition-all duration-500" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-32 md:py-48 bg-luxury-bg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
            <div className="text-[30vw] md:text-[20vw] font-serif absolute -top-12 md:-top-24 -left-12 md:-left-24 select-none">DESIGN</div>
          </div>
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <MessageSquare className="mx-auto mb-8 md:mb-12 text-luxury-accent/30 md:w-16 md:h-16" size={48} />
              <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif italic leading-tight mb-12 md:mb-16">
                "Design is not just what it looks like and feels like. Design is how it works and how it tells a story."
              </p>
              <div className="w-16 md:w-24 h-px bg-luxury-accent mx-auto mb-6 md:mb-8" />
              <p className="text-[10px] uppercase tracking-[0.5em] text-luxury-accent">The Studio Philosophy</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <h2 className="text-xs uppercase tracking-[0.5em] text-luxury-accent mb-6 md:mb-8">Get in Touch</h2>
                <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-8 md:mb-12 leading-none">
                  Let’s Design <br /> Something <br /> <span className="italic text-luxury-accent">Exceptional.</span>
                </h3>
                
                <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
                  <div className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/10 group-hover:bg-luxury-accent group-hover:text-luxury-bg transition-all">
                      <Mail size={16} className="md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mb-1">Email</p>
                      <p className="text-base md:text-lg font-light">hello@vaishnavi.design</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/10 group-hover:bg-luxury-accent group-hover:text-luxury-bg transition-all">
                      <Phone size={16} className="md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mb-1">Phone / WhatsApp</p>
                      <p className="text-base md:text-lg font-light">+91 98765 43210</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <a href="#" className="p-3 md:p-4 rounded-full border border-white/10 hover:bg-white hover:text-luxury-bg transition-all">
                    <Instagram size={18} className="md:w-5 md:h-5" />
                  </a>
                  <a href="#" className="p-3 md:p-4 rounded-full border border-white/10 hover:bg-white hover:text-luxury-bg transition-all">
                    <Linkedin size={18} className="md:w-5 md:h-5" />
                  </a>
                </div>
              </div>

              <div className="glass-morphism p-8 md:p-12 rounded-2xl">
                <form className="space-y-6 md:space-y-8">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/40">Full Name</label>
                      <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 focus:border-luxury-accent outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-white/40">Email Address</label>
                      <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 focus:border-luxury-accent outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Project Type</label>
                    <select className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 focus:border-luxury-accent outline-none transition-colors appearance-none">
                      <option className="bg-luxury-bg">Residential</option>
                      <option className="bg-luxury-bg">Commercial</option>
                      <option className="bg-luxury-bg">3D Visualization Only</option>
                      <option className="bg-luxury-bg">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40">Message</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 focus:border-luxury-accent outline-none transition-colors resize-none" placeholder="Tell us about your vision..."></textarea>
                  </div>
                  <button className="w-full py-4 md:py-6 bg-luxury-accent text-luxury-bg text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold hover:bg-white transition-all duration-500">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-luxury-bg border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            © 2026 Vaishnavi Khandelwal. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-12 text-[10px] uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudy 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      {/* Expertise Detail Modal */}
      <AnimatePresence>
        {selectedExpertise && (
          <ExpertiseModal 
            item={selectedExpertise} 
            onClose={() => setSelectedExpertise(null)} 
            Icon={expertiseIcons[selectedExpertise.icon]}
          />
        )}
      </AnimatePresence>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}
