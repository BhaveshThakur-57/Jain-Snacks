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
    description: 'Drain the excess water. Let it cool for a moment.',
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 md:w-20 md:h-20" fill="none">
        <path d="M30 25h20v20c0 8-4 14-10 14s-10-6-10-14V25z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M30 50h20" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        {/* Drips */}
        <motion.circle
          cx="36" cy="62" r="1.5"
          fill="currentColor"
          animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.circle
          cx="40" cy="64" r="1.5"
          fill="currentColor"
          animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
        />
        <motion.circle
          cx="44" cy="62" r="1.5"
          fill="currentColor"
          animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
        />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'MIX',
    description: 'Mix it into your favourite dish. Burger, paratha, curry — anything!',
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 md:w-20 md:h-20" fill="none">
        <circle cx="40" cy="55" r="16" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M32 55c4-4 12-4 16 0" stroke="currentColor" strokeWidth="1.5" fill="none"/>
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
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg to-brand-light/30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-muted to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Luxury Header */}
        <div className="flex flex-col items-center text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[18rem] font-black text-brand-muted/10 whitespace-nowrap pointer-events-none z-0">
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
              className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight"
            >
              Ready in <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-gold italic font-serif tracking-normal">Minutes.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-text/60 text-lg max-w-md mx-auto font-medium"
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(30, 42, 31, 0.06)' }}
                className="relative bg-brand-white rounded-3xl p-8 md:p-10 h-full text-center border border-brand-muted/30 transition-shadow duration-500"
              >
                {/* Step number */}
                <div className="absolute top-6 left-6">
                  <span className="text-xs font-bold text-brand-muted">{step.number}</span>
                </div>

                {/* Connector line */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[1px] bg-brand-muted" />
                )}

                {/* Icon */}
                <div className="flex justify-center mb-6 text-brand-text/70">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-extrabold text-brand-text mb-3 tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-text/50 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
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
          <p className="text-2xl md:text-3xl font-light text-brand-text/30 tracking-wide">
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
