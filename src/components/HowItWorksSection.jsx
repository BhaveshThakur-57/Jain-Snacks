'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'BOIL',
    description: 'Add to boiling water and cook for a few minutes until soft.',
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 md:w-20 md:h-20" fill="none">
        <circle cx="40" cy="55" r="18" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M28 55h24" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M32 48c2-6 4-8 8-8s6 2 8 8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        {/* Steam */}
        <motion.path
          d="M35 35c0-4 2-6 0-10"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M40 33c0-4 2-6 0-10"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.path
          d="M45 35c0-4 2-6 0-10"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'DRAIN',
    description: 'Squeeze out excess water. It absorbs flavors like a sponge.',
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 md:w-20 md:h-20" fill="none">
        <path d="M20 30L30 65h20l10-35" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M15 30h50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        {/* Drops */}
        <motion.circle
          cx="40" cy="45" r="2" fill="currentColor"
          animate={{ y: [0, 15], opacity: [1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.circle
          cx="32" cy="40" r="1.5" fill="currentColor"
          animate={{ y: [0, 15], opacity: [1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle
          cx="48" cy="42" r="1.5" fill="currentColor"
          animate={{ y: [0, 15], opacity: [1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'MIX',
    description: 'Toss into any dish – curries, salads, wraps, or rice.',
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 md:w-20 md:h-20" fill="none">
        {/* Bowl */}
        <path d="M20 45c0 15 10 20 20 20s20-5 20-20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        {/* Spoon */}
        <motion.g
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '40px 50px' }}
        >
          <path d="M40 38V20" stroke="currentColor" strokeWidth="2"/>
          <circle cx="40" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </motion.g>
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-b border-brand-white/5">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Luxury Header */}
        <div className="flex flex-col items-center text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[18rem] font-black text-brand-white/5 whitespace-nowrap pointer-events-none z-0">
            SIMPLICITY
          </div>
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-brand-gold uppercase tracking-[0.3em] block mb-4"
            >
              The Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight text-brand-white"
            >
              Ready in <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-gold italic font-serif tracking-normal">Minutes.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-white/60 text-lg max-w-md mx-auto font-medium"
            >
              No complicated recipes. No boring protein meals. Just three effortless steps to pure nutrition.
            </motion.p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-dark rounded-[2.5rem] p-10 md:p-12 border border-brand-white/10 hover:border-brand-gold/30 transition-colors duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-white/5 rounded-full blur-3xl group-hover:bg-brand-gold/10 transition-colors duration-500" />
              <div className="text-brand-gold mb-8 transform group-hover:scale-110 transition-transform duration-500 flex justify-center">
                {step.icon}
              </div>
              <div className="flex flex-col items-center text-center gap-2 mb-4">
                <span className="text-sm font-black text-brand-white/20 tracking-widest">{step.number}</span>
                <h3 className="text-2xl font-black text-brand-white tracking-tight">{step.title}</h3>
              </div>
              <p className="text-sm font-medium text-brand-white/60 leading-relaxed text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-2xl md:text-3xl font-light text-brand-white/30 tracking-wide">
            That&apos;s it.
          </p>
          <p className="text-sm text-brand-protein font-bold mt-2">
            64g protein per packet*
          </p>
        </motion.div>
      </div>
    </section>
  );
}
