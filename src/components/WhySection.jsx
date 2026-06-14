'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const statements = [
  'Good food should not be complicated.',
  'It should nourish, not just fill.',
  'We believe in high protein,',
  'clean ingredients,',
  'and absolutely no compromise.'
];

export default function WhySection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  return (
    <section ref={containerRef} className="relative bg-brand-bg py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Sticky Image Context */}
          <div className="hidden lg:block h-[600px] relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-brand-dark/20 z-10" />
            <Image 
              src="/images/lifestyle.png"
              alt="Premium lifestyle"
              fill
              className="object-cover"
            />
            {/* Overlapping Glass Card */}
            <div className="absolute bottom-10 right-10 z-20 glass p-8 rounded-2xl max-w-xs shadow-2xl">
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-2 block">
                The Philosophy
              </span>
              <p className="text-brand-text text-lg font-bold leading-tight">
                Rooted in traditional Jain values. Engineered for modern performance.
              </p>
            </div>
          </div>

          {/* Scroll Text */}
          <div className="space-y-6 md:space-y-8 py-20 lg:py-40">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-brand-secondary uppercase tracking-[0.3em] block mb-10"
            >
              Why Jainacks Exists
            </motion.span>
            
            {statements.map((text, i) => {
              // Calculate opacity range for each sentence
              const start = i / statements.length;
              const end = start + (1 / statements.length);
              
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
              
              return (
                <motion.h2
                  key={i}
                  style={{ opacity }}
                  className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold tracking-tighter leading-[1.1] text-brand-text"
                >
                  {text}
                </motion.h2>
              );
            })}
          </div>
          
        </div>
      </div>
      
      {/* Dense Background Typography overlay */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none overflow-hidden opacity-[0.02]">
        <div className="text-[20rem] font-black leading-none whitespace-nowrap -ml-20">
          PHILOSOPHY
        </div>
      </div>
    </section>
  );
}
