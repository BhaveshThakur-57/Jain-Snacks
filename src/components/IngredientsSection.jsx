'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const ingredients = [
  {
    name: 'Sweet Corn',
    description: 'Premium sweet corn, vacuum fried for natural crunch and sweetness. Rich in fibre and antioxidants.',
    color: '#C89B3C',
    bgGradient: 'from-[#2A2315] to-[#14120A]',
    image: '/images/sweet-corn.png',
    facts: ['Natural Sweetness', 'Rich in Fibre', 'Vacuum Fried'],
  },
  {
    name: 'Kabuli Channa',
    description: 'High-quality chickpeas, gently processed to preserve taste, texture, and nutrition. Just 4 ingredients.',
    color: '#CC6A2A',
    bgGradient: 'from-[#2A180E] to-[#140A05]',
    image: '/images/kabuli-channa.png',
    facts: ['22g Protein', 'Only 4 Ingredients', 'Plant Based'],
  },
  {
    name: 'Bhindi',
    description: 'Carefully selected Indian okra, crafted for a perfect crispy bite with zero oil feeling.',
    color: '#4B6B45',
    bgGradient: 'from-[#141D12] to-[#0A0E09]',
    image: '/images/bhindi.png',
    facts: ['Zero Oil Feel', 'Crunchy', 'Rich in Vitamins'],
  },
];

export default function IngredientsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-b border-brand-white/5">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-brand-gold uppercase tracking-[0.3em] block mb-4"
          >
            Ingredients
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-brand-white"
          >
            Know What&apos;s<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-gold italic font-serif">Inside.</span>
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
            <div className={`relative rounded-[3rem] bg-gradient-to-br ${ingredients[activeIdx].bgGradient} p-12 md:p-16 aspect-square flex items-center justify-center border border-brand-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-700`}>
              {/* Abstract Glow */}
              <div 
                className="absolute inset-0 opacity-20 mix-blend-screen transition-all duration-700 blur-[80px]"
                style={{ background: `radial-gradient(circle at 50% 50%, ${ingredients[activeIdx].color}, transparent)` }}
              />
              
              {/* Background rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full border border-brand-white/5" />
                <div className="absolute w-1/2 h-1/2 rounded-full border border-brand-white/5" />
              </div>

              {/* Product image */}
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative w-48 h-64 md:w-56 md:h-72 z-10"
              >
                <Image
                  src={ingredients[activeIdx].image}
                  alt={ingredients[activeIdx].name}
                  fill
                  className="object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.9)]"
                  priority
                />
              </motion.div>

              {/* Floating facts */}
              {ingredients[activeIdx].facts.map((fact, i) => (
                <motion.div
                  key={`${activeIdx}-${fact}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="absolute z-20"
                  style={{
                    top: `${20 + i * 25}%`,
                    right: i % 2 === 0 ? '5%' : 'auto',
                    left: i % 2 !== 0 ? '5%' : 'auto',
                  }}
                >
                  <span className="px-4 py-2 rounded-full bg-brand-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-brand-white/80 border border-brand-white/20 shadow-2xl">
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
                  className={`w-full text-left p-8 rounded-[2rem] transition-all duration-500 border ${
                    activeIdx === i
                      ? 'glass-dark shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-brand-white/20'
                      : 'bg-transparent border-transparent hover:bg-brand-white/5'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    {/* Indicator */}
                    <div
                      className="w-4 h-4 rounded-full mt-1.5 flex-shrink-0 transition-all duration-500"
                      style={{
                        backgroundColor: activeIdx === i ? ingredient.color : 'rgba(255,255,255,0.1)',
                        boxShadow: activeIdx === i ? `0 0 20px ${ingredient.color}60` : 'none',
                      }}
                    />

                    <div>
                      <h3 className={`text-2xl font-black tracking-tight mb-2 transition-colors duration-300 ${
                        activeIdx === i ? 'text-brand-white' : 'text-brand-white/40'
                      }`}>
                        {ingredient.name}
                      </h3>
                      <motion.p
                        initial={false}
                        animate={{
                          height: activeIdx === i ? 'auto' : 0,
                          opacity: activeIdx === i ? 1 : 0,
                        }}
                        className="text-sm font-medium text-brand-white/60 leading-relaxed overflow-hidden max-w-md"
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
