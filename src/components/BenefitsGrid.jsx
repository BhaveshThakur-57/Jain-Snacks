'use client';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: '64g Protein',
    subtitle: 'Per Pack',
    description: 'The highest protein content in any snack category.',
    icon: '💪',
    span: 'col-span-1 md:col-span-2 md:row-span-1',
    bg: 'bg-gradient-to-br from-brand-protein/10 to-brand-protein/5',
    accent: 'text-brand-protein',
    large: true,
  },
  {
    title: 'Plant Based',
    subtitle: '100% Vegetarian',
    description: 'Made entirely from plants. No animal products.',
    icon: '🌱',
    span: 'col-span-1',
    bg: 'bg-gradient-to-br from-brand-secondary/10 to-brand-secondary/5',
    accent: 'text-brand-secondary',
    large: false,
  },
  {
    title: 'No Onion',
    subtitle: 'Jain Values',
    description: 'Rooted in Jain principles of purity.',
    icon: '🚫',
    span: 'col-span-1',
    bg: 'bg-brand-white',
    accent: 'text-brand-text',
    large: false,
  },
  {
    title: 'No Garlic',
    subtitle: 'Pure Ingredients',
    description: 'Only what you need. Nothing you don\'t.',
    icon: '✨',
    span: 'col-span-1',
    bg: 'bg-brand-white',
    accent: 'text-brand-text',
    large: false,
  },
  {
    title: 'Clean Ingredients',
    subtitle: 'Just 4 Ingredients',
    description: 'Minimal processing. Maximum nutrition.',
    icon: '🍃',
    span: 'col-span-1 md:col-span-2',
    bg: 'bg-gradient-to-br from-brand-gold/10 to-brand-gold/5',
    accent: 'text-brand-gold',
    large: true,
  },
  {
    title: 'Vacuum Fried',
    subtitle: 'Better Technology',
    description: 'Preserves nutrients while keeping the crunch.',
    icon: '🔬',
    span: 'col-span-1',
    bg: 'bg-brand-white',
    accent: 'text-brand-secondary',
    large: false,
  },
  {
    title: 'Modern Lifestyle',
    subtitle: 'Fits Your Life',
    description: 'Snacking that works for busy, health-conscious people.',
    icon: '⚡',
    span: 'col-span-1',
    bg: 'bg-brand-white',
    accent: 'text-brand-text',
    large: false,
  },
  {
    title: 'Everyday Nutrition',
    subtitle: 'Daily Protein',
    description: 'Make every meal more nutritious effortlessly.',
    icon: '☀️',
    span: 'col-span-1',
    bg: 'bg-gradient-to-br from-brand-secondary/10 to-brand-gold/5',
    accent: 'text-brand-secondary',
    large: false,
  },
];

export default function BenefitsGrid() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-light/30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-muted to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-brand-secondary uppercase tracking-[0.2em] block mb-4"
          >
            Benefits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Why <span className="text-gradient-green">Jainacks?</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(30, 42, 31, 0.06)' }}
                className={`bento-card rounded-3xl p-6 md:p-8 h-full border border-brand-muted/20 ${benefit.bg}`}
              >
                {/* Icon */}
                <span className="text-3xl md:text-4xl mb-4 block">{benefit.icon}</span>

                {/* Content */}
                <div className={benefit.large ? 'md:flex md:items-end md:justify-between' : ''}>
                  <div>
                    <h3 className={`text-xl md:text-2xl font-extrabold tracking-tight mb-1 ${benefit.accent}`}>
                      {benefit.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-text/30 uppercase tracking-wider mb-2">
                      {benefit.subtitle}
                    </p>
                  </div>
                  <p className="text-sm text-brand-text/50 leading-relaxed max-w-sm">
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
