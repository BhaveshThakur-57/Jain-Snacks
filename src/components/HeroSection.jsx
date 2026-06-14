'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden text-brand-white"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Massive Ambient Glow */}
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-brand-secondary/20 blur-[120px] mix-blend-screen opacity-50 animate-pulse-soft" />
        <div className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-brand-gold/15 blur-[120px] mix-blend-screen opacity-60" />
        
        {/* Huge Background Typography Marquee to fill empty space */}
        <div className="absolute top-[25%] left-0 w-full whitespace-nowrap flex flex-col gap-4 select-none z-0">
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="text-[15rem] md:text-[25rem] font-black leading-none tracking-tighter text-brand-white/[0.03]"
          >
            JAINACKS JAINACKS JAINACKS JAINACKS
          </motion.div>
          <motion.div 
            animate={{ x: [-1000, 0] }} 
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="text-[15rem] md:text-[25rem] font-black leading-none tracking-tighter text-brand-white/[0.03]"
          >
            PREMIUM PREMIUM PREMIUM PREMIUM
          </motion.div>
        </div>
      </div>

      {/* Hero Image - High Impact Centered Composition */}
      <motion.div
        style={{ y: textY, scale, opacity }}
        className="absolute right-0 bottom-0 md:right-[5%] md:top-1/2 md:-translate-y-1/2 w-[120vw] h-[120vw] md:w-[700px] md:h-[700px] pointer-events-none z-0"
      >
        <Image
          src="/images/hero-ingredients.png"
          alt="Floating ingredients"
          fill
          sizes="(max-width: 768px) 120vw, 700px"
          className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-40 md:opacity-80"
          priority
        />
      </motion.div>

      {/* Dense, High-Contrast Main Content */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col justify-center min-h-screen"
      >
        <div className="max-w-4xl relative">
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-24 h-[2px] bg-brand-gold mb-8 origin-left"
          />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-brand-white/20 bg-brand-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            </span>
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-brand-white/70">
              The Standard
            </span>
          </motion.div>

          {/* Hyper-Dense Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[4.5rem] sm:text-7xl md:text-[7rem] lg:text-[8.5rem] font-extrabold tracking-tighter leading-[0.85] mb-8"
          >
            Snack<span className="text-brand-gold">.</span>
            <br />
            Better<span className="text-brand-secondary">.</span>
          </motion.h1>

          {/* Premium Subheading Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 border-l border-brand-white/10 pl-6 ml-2"
          >
            <p className="text-xl md:text-2xl text-brand-white/90 font-medium leading-relaxed max-w-lg mb-4">
              High Protein. Plant Based. <br />
              <span className="text-brand-white/50">Zero Compromise.</span>
            </p>
            <p className="text-sm text-brand-white/40 max-w-sm tracking-wide">
              Clean ingredients crafted for the modern lifestyle. Reimagining everyday nutrition with pure Jain values.
            </p>
          </motion.div>

          {/* Luxury CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 mb-16"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-5 bg-brand-white text-brand-dark rounded-full text-sm font-extrabold tracking-[0.1em] uppercase overflow-hidden shadow-[0_0_40px_rgba(200,155,60,0.15)] hover:shadow-[0_0_60px_rgba(200,155,60,0.3)] transition-all duration-500 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Discover Collection
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Stat Footer embedded in Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-3 gap-8 pt-10 border-t border-brand-white/10"
          >
            {[
              { value: '64g', label: 'PURE PROTEIN' },
              { value: '04', label: 'SIGNATURES' },
              { value: '100%', label: 'PLANT BASED' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-light tracking-tighter text-brand-white mb-1">{stat.value}</span>
                <span className="text-[10px] text-brand-gold font-bold tracking-[0.2em]">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
