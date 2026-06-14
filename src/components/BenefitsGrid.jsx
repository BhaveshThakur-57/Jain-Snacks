'use client';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: '64g Protein',
    subtitle: 'Per Pack',
    description: 'The highest protein content in any snack category.',
    icon: '💪',
    span: 'col-span-1 md:col-span-2 md:row-span-1',
    bg: 'glass-dark hover:bg-brand-protein/10',
    accent: 'text-brand-protein',
    large: true,
  },
  {
    title: 'Plant Based',
    subtitle: '100% Vegetarian',
    description: 'Made entirely from plants. No animal products.',
    icon: '🌱',
    span: 'col-span-1',
    bg: 'glass-dark hover:bg-brand-secondary/10',
    accent: 'text-brand-secondary',
    large: false,
  },
  {
    title: 'No Onion',
    subtitle: 'Jain Values',
    description: 'Rooted in Jain principles of purity.',
    icon: '🚫',
    span: 'col-span-1',
    bg: 'glass-dark hover:bg-brand-white/5',
    accent: 'text-brand-white',
    large: false,
  },
  {
    title: 'No Garlic',
    subtitle: 'Pure Ingredients',
    description: 'Only what you need. Nothing you don\'t.',
    icon: '✨',
    span: 'col-span-1',
    bg: 'glass-dark hover:bg-brand-gold/10',
    accent: 'text-brand-gold',
    large: false,
  },
  {
    title: 'Clean Ingredients',
    subtitle: 'Just 4 Ingredients',
    description: 'Minimal processing. Maximum nutrition.',
    icon: '🍃',
    span: 'col-span-1 md:col-span-2',
    bg: 'glass-dark hover:bg-brand-secondary/10',
    accent: 'text-brand-secondary',
    large: true,
  },
  {
    title: 'Vacuum Fried',
    subtitle: 'Better Technology',
    description: 'Preserves nutrients while keeping the crunch.',
    icon: '🔬',
    span: 'col-span-1',
    bg: 'glass-dark hover:bg-brand-protein/10',
    accent: 'text-brand-protein',
    large: false,
  },
  {
    title: 'Modern Lifestyle',
    subtitle: 'Fits Your Life',
    description: 'Snacking that works for busy, health-conscious people.',
    icon: '⚡',
    span: 'col-span-1',
    bg: 'glass-dark hover:bg-brand-white/5',
    accent: 'text-brand-white',
    large: false,
  },
  {
    title: 'Everyday Nutrition',
    subtitle: 'Daily Protein',
    description: 'Make every meal more nutritious effortlessly.',
    icon: '☀️',
    span: 'col-span-1',
    bg: 'glass-dark hover:bg-brand-gold/10',
    accent: 'text-brand-gold',
    large: false,
  },
];

export default function BenefitsGrid() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-b border-brand-white/5">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[15rem] font-black text-brand-white/5 whitespace-nowrap pointer-events-none z-0">
            BENEFITS
          </div>
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] block mb-4"
            >
              The Advantage
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-brand-white"
            >
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-gold italic font-serif">Jainacks?</span>
            </motion.h2>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className={benefit.span}
            >
              <motion.div
                whileHover={{ y: -6 }}
                className={`rounded-[2rem] p-8 md:p-10 h-full border border-brand-white/10 transition-colors duration-500 overflow-hidden relative group ${benefit.bg}`}
              >
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                
                {/* Icon */}
                <span className="text-4xl md:text-5xl mb-6 block transform group-hover:scale-110 transition-transform duration-500 origin-left">{benefit.icon}</span>

                {/* Content */}
                <div className={benefit.large ? 'md:flex md:items-end md:justify-between' : ''}>
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-black tracking-tight mb-2 ${benefit.accent}`}>
                      {benefit.title}
                    </h3>
                    <p className="text-[10px] font-bold text-brand-white/40 uppercase tracking-[0.2em] mb-4">
                      {benefit.subtitle}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-brand-white/60 leading-relaxed max-w-sm">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
