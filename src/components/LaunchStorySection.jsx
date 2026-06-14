'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  {
    date: 'Jan 2026',
    title: 'The Idea',
    description: 'Born from a simple belief — Jain snacking deserves better. Clean, high-protein, no compromise.',
    status: 'completed',
  },
  {
    date: 'Mar 2026',
    title: 'Product Development',
    description: 'Months of R&D perfecting the vacuum-frying process and sourcing the cleanest ingredients.',
    status: 'completed',
  },
  {
    date: 'May 2026',
    title: 'Brand Launch',
    description: 'Jainacks brand identity created. Modern, premium, rooted in Jain values.',
    status: 'completed',
  },
  {
    date: 'Jun 2026',
    title: 'Launching in Bhopal',
    description: 'Our first city. Bringing premium Jain snacks to Bhopal households.',
    status: 'current',
  },
  {
    date: '2026-27',
    title: 'Pan-India Expansion',
    description: 'Taking Jainacks to every corner of India. Online and offline.',
    status: 'upcoming',
  },
  {
    date: 'Future',
    title: 'Global Vision',
    description: 'Making clean, plant-based Indian snacking available worldwide.',
    status: 'upcoming',
  },
];

export default function LaunchStorySection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg to-brand-light/30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-muted to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-brand-secondary uppercase tracking-[0.2em] block mb-4"
          >
            Our Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            The <span className="text-gradient-green">Jainacks</span>
            <br />Story.
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - background */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-brand-muted/30 md:-translate-x-[0.5px]" />

          {/* Animated progress line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-[1px] bg-brand-secondary md:-translate-x-[0.5px]"
            style={{ height: lineHeight }}
          />

          {/* Milestones */}
          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7 }}
                  className={`relative flex items-start gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      className={`w-3 h-3 rounded-full ${
                        milestone.status === 'completed'
                          ? 'bg-brand-secondary'
                          : milestone.status === 'current'
                          ? 'bg-brand-gold'
                          : 'bg-brand-muted'
                      }`}
                      style={{
                        boxShadow: milestone.status === 'current'
                          ? '0 0 16px rgba(200, 155, 60, 0.4)'
                          : 'none',
                      }}
                    />
                    {milestone.status === 'current' && (
                      <motion.div
                        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-brand-gold"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <span className={`text-xs font-bold uppercase tracking-widest block mb-2 ${
                      milestone.status === 'current' ? 'text-brand-gold' : 'text-brand-text/30'
                    }`}>
                      {milestone.date}
                    </span>
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
                      milestone.status === 'upcoming' ? 'text-brand-text/30' : 'text-brand-text'
                    }`}>
                      {milestone.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      milestone.status === 'upcoming' ? 'text-brand-text/20' : 'text-brand-text/50'
                    }`}>
                      {milestone.description}
                    </p>
                    {milestone.status === 'current' && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] font-bold uppercase tracking-wider"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                        Current
                      </motion.span>
                    )}
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
