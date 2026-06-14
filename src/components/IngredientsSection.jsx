'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const ingredients = [
  {
    name: 'Sweet Corn',
    description: 'Premium sweet corn, vacuum fried for natural crunch and sweetness. Rich in fibre and antioxidants.',
    color: '#C89B3C',
    bgGradient: 'from-amber-50 to-yellow-50',
    image: '/images/sweet-corn.png',
    facts: ['Natural Sweetness', 'Rich in Fibre', 'Vacuum Fried'],
  },
  {
    name: 'Kabuli Channa',
    description: 'High-quality chickpeas, gently processed to preserve taste, texture, and nutrition. Just 4 ingredients.',
    color: '#CC6A2A',
    bgGradient: 'from-orange-50 to-amber-50',
    image: '/images/kabuli-channa.png',
    facts: ['22g Protein', 'Only 4 Ingredients', 'Plant Based'],
  },
  {
    name: 'Bhindi',
    description: 'Carefully selected Indian okra, crafted for a perfect crispy bite with zero oil feeling.',
    color: '#4B6B45',
    bgGradient: 'from-green-50 to-emerald-50',
    image: '/images/bhindi.png',
    facts: ['Zero Oil Feel', 'Crunchy', 'Rich in Vitamins'],
  },
];

export default function IngredientsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-bg" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-muted to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-brand-secondary uppercase tracking-[0.2em] block mb-4"
          >
            Ingredients
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Know What&apos;s<br />
            <span className="text-gradient-gold">Inside.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Interactive product display */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`relative rounded-3xl bg-gradient-to-br ${ingredients[activeIdx].bgGradient} p-12 md:p-16 aspect-square flex items-center justify-center`}>
              {/* Background circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full border border-brand-muted/20" />
                <div className="absolute w-1/2 h-1/2 rounded-full border border-brand-muted/15" />
              </div>

              {/* Product image */}
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-48 h-64 md:w-56 md:h-72"
              >
                <Image
                  src={ingredients[activeIdx].image}
                  alt={ingredients[activeIdx].name}
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Floating facts */}
              {ingredients[activeIdx].facts.map((fact, i) => (
                <motion.div
                  key={`${activeIdx}-${fact}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="absolute"
                  style={{
                    top: `${20 + i * 25}%`,
                    right: i % 2 === 0 ? '5%' : 'auto',
                    left: i % 2 !== 0 ? '5%' : 'auto',
                  }}
                >
                  <span className="px-3 py-1.5 rounded-full bg-brand-white/90 text-[10px] font-bold text-brand-text/70 shadow-sm border border-brand-muted/10">
                    {fact}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Ingredient selector */}
          <div className="space-y-4">
            {ingredients.map((ingredient, i) => (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.button
                  onClick={() => setActiveIdx(i)}
                  whileHover={{ x: 4 }}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-500 border ${
                    activeIdx === i
                      ? 'bg-brand-white shadow-lg border-brand-muted/30'
                      : 'bg-transparent border-transparent hover:bg-brand-white/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Indicator */}
                    <div
                      className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0 transition-all duration-300"
                      style={{
                        backgroundColor: activeIdx === i ? ingredient.color : '#D8D1C7',
                        boxShadow: activeIdx === i ? `0 0 12px ${ingredient.color}40` : 'none',
                      }}
                    />

                    <div>
                      <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                        activeIdx === i ? 'text-brand-text' : 'text-brand-text/40'
                      }`}>
                        {ingredient.name}
                      </h3>
                      <motion.p
                        initial={false}
                        animate={{
                          height: activeIdx === i ? 'auto' : 0,
                          opacity: activeIdx === i ? 1 : 0,
                        }}
                        className="text-sm text-brand-text/50 leading-relaxed overflow-hidden"
                      >
                        {ingredient.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
