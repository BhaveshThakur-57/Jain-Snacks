'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const foods = [
  { name: 'Burger', emoji: '🍔', angle: 0, description: 'Add TVP to your burger patty for extra protein' },
  { name: 'Paratha', emoji: '🫓', angle: 51.4, description: 'Mix it right into your paratha dough' },
  { name: 'Curry', emoji: '🍛', angle: 102.8, description: 'Stir into any curry for a protein boost' },
  { name: 'Salad', emoji: '🥗', angle: 154.3, description: 'Top your salad with crunchy goodness' },
  { name: 'Wrap', emoji: '🌯', angle: 205.7, description: 'Roll it up in a wrap for on-the-go nutrition' },
  { name: 'Sandwich', emoji: '🥪', angle: 257.1, description: 'Layer it into your sandwich' },
  { name: 'Rice Bowl', emoji: '🍚', angle: 308.5, description: 'Mix into rice for a complete meal' },
];

export default function AddToAnythingSection() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-brand-bg" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-muted to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-brand-gold uppercase tracking-[0.2em] block mb-4"
          >
            Versatile
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Add It To<br />
            <span className="text-gradient-gold">Almost Anything.</span>
          </motion.h2>
        </div>

        {/* Circular layout - Desktop */}
        <div className="hidden md:block relative mx-auto" style={{ width: 500, height: 500 }}>
          {/* Center text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              {activeIdx !== null ? (
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-[200px]"
                >
                  <span className="text-4xl mb-2 block">{foods[activeIdx].emoji}</span>
                  <h3 className="text-lg font-bold text-brand-text mb-1">{foods[activeIdx].name}</h3>
                  <p className="text-xs text-brand-text/50">{foods[activeIdx].description}</p>
                </motion.div>
              ) : (
                <div>
                  <div className="w-16 h-16 rounded-full bg-brand-secondary/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-brand-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2v20M2 12h20" />
                    </svg>
                  </div>
                  <p className="text-sm text-brand-text/40 font-medium">Hover to explore</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Circular items */}
          {foods.map((food, i) => {
            const radius = 200;
            const angleRad = (food.angle - 90) * (Math.PI / 180);
            const x = 250 + radius * Math.cos(angleRad) - 40;
            const y = 250 + radius * Math.sin(angleRad) - 40;

            return (
              <motion.div
                key={food.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
                className="absolute cursor-pointer"
                style={{ left: x, top: y }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${
                    activeIdx === i
                      ? 'bg-brand-white shadow-lg shadow-brand-text/10'
                      : 'bg-brand-white/50'
                  }`}
                >
                  <span className="text-2xl mb-0.5">{food.emoji}</span>
                  <span className="text-[10px] font-bold text-brand-text/60">{food.name}</span>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Connecting lines from center to items */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
            {foods.map((food, i) => {
              const radius = 200;
              const angleRad = (food.angle - 90) * (Math.PI / 180);
              const x = 250 + radius * Math.cos(angleRad);
              const y = 250 + radius * Math.sin(angleRad);
              return (
                <motion.line
                  key={i}
                  x1="250" y1="250" x2={x} y2={y}
                  stroke={activeIdx === i ? '#4B6B45' : '#D8D1C7'}
                  strokeWidth={activeIdx === i ? 1.5 : 0.5}
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                />
              );
            })}
          </svg>
        </div>

        {/* Mobile grid */}
        <div className="md:hidden grid grid-cols-3 gap-3">
          {foods.map((food, i) => (
            <motion.div
              key={food.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-brand-white rounded-2xl p-4 text-center border border-brand-muted/20"
            >
              <span className="text-3xl mb-1 block">{food.emoji}</span>
              <span className="text-xs font-bold text-brand-text/70">{food.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
