'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function AnimatedCounter({ target, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const comparisonData = [
  {
    name: 'JAINACKS TVP',
    protein: 64,
    color: '#CC6A2A',
    highlight: true,
  },
  {
    name: 'JAINACKS CHANNA',
    protein: 22,
    color: '#C89B3C',
    highlight: true,
  },
  {
    name: 'JAINACKS SWEET CORN',
    protein: 12,
    color: '#C89B3C',
    highlight: true,
  },
  {
    name: 'REGULAR CHIPS',
    protein: 3,
    color: '#D8D1C7',
    highlight: false,
  },
  {
    name: 'NAMKEEN',
    protein: 5,
    color: '#D8D1C7',
    highlight: false,
  },
];

export default function ComparisonSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 bg-brand-text text-brand-white overflow-hidden">
      {/* Abstract Backgrounds */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-protein/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Luxury Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            className="w-[1px] h-24 bg-brand-protein mb-8 origin-top"
          />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xs font-bold text-brand-protein uppercase tracking-[0.3em] block mb-6"
          >
            The Difference
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
          >
            Not All Snacks
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-protein to-brand-gold italic font-serif tracking-normal">
              Are Equal.
            </span>
          </motion.h2>
        </div>

        {/* Premium Chart Layout */}
        <div className="max-w-4xl mx-auto space-y-8">
          {comparisonData.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                {/* Premium Label */}
                <div className="w-48 flex-shrink-0">
                  <span className={`text-xs tracking-[0.1em] font-extrabold ${item.highlight ? 'text-brand-white' : 'text-brand-white/30'}`}>
                    {item.name}
                  </span>
                </div>

                {/* Animated Glass Bar */}
                <div className="flex-1 relative h-14 md:h-16 bg-brand-white/5 rounded-full overflow-hidden border border-brand-white/10 backdrop-blur-md">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.protein / 64) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.1 + 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="h-full relative flex items-center justify-end pr-6 overflow-hidden"
                    style={{
                      background: item.highlight 
                        ? `linear-gradient(90deg, transparent, ${item.color})` 
                        : 'rgba(255,255,255,0.05)',
                      minWidth: '60px',
                    }}
                  >
                    {/* Inner glowing highlight */}
                    {item.highlight && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-white/40 mix-blend-overlay" />
                    )}
                    
                    <span className={`relative z-10 text-xl font-black ${item.highlight ? 'text-brand-dark' : 'text-brand-white/40'}`}>
                      {isInView ? <AnimatedCounter target={item.protein} suffix="g" /> : '0g'}
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
