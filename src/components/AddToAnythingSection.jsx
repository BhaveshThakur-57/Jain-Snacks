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
    <section className="relative py-32 md:py-48 overflow-hidden bg-brand-dark text-brand-white">
      {/* Dense Background Textures */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      {/* Massive Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[18rem] font-black text-brand-white/[0.02] whitespace-nowrap pointer-events-none z-0 tracking-tighter">
        VERSATILE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Luxury Header */}
        <div className="text-center mb-20 md:mb-32 relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            className="w-[1px] h-20 bg-brand-gold mx-auto mb-8 origin-top"
          />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-brand-gold uppercase tracking-[0.4em] block mb-6"
          >
            Endless Possibilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-tight"
          >
            Add It To<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-gold italic font-serif tracking-normal">Almost Anything.</span>
          </motion.h2>
        </div>

        {/* Circular layout - Desktop */}
        <div className="hidden md:block relative mx-auto" style={{ width: 600, height: 600 }}>
          {/* Center text / Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          >
            <div className="text-center">
              {activeIdx !== null ? (
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="max-w-[240px]"
                >
                  <span className="text-6xl mb-4 block drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{foods[activeIdx].emoji}</span>
                  <h3 className="text-2xl font-black text-brand-white mb-2 tracking-tight">{foods[activeIdx].name}</h3>
                  <p className="text-sm text-brand-gold font-serif italic">{foods[activeIdx].description}</p>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border border-brand-gold/30 bg-brand-gold/5 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(200,155,60,0.15)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-gold/10 animate-pulse" />
                    <svg className="w-10 h-10 text-brand-gold relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <p className="text-xs font-bold text-brand-white/40 uppercase tracking-[0.2em]">Hover to explore</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Circular items */}
          {foods.map((food, i) => {
            const radius = 260; // Increased radius for bigger UI
            const angleRad = (food.angle - 90) * (Math.PI / 180);
            const x = 300 + radius * Math.cos(angleRad) - 50; // 300 is center, 50 is half width
            const y = 300 + radius * Math.sin(angleRad) - 50;

            return (
              <motion.div
                key={food.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
                className="absolute cursor-pointer z-30"
                style={{ left: x, top: y }}
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className={`w-[100px] h-[100px] rounded-3xl flex flex-col items-center justify-center transition-all duration-300 backdrop-blur-md border ${
                    activeIdx === i
                      ? 'bg-brand-white/10 border-brand-gold shadow-[0_0_30px_rgba(200,155,60,0.3)]'
                      : 'bg-brand-white/5 border-brand-white/10 hover:bg-brand-white/10 hover:border-brand-white/20'
                  }`}
                >
                  <span className="text-3xl mb-1 filter drop-shadow-lg">{food.emoji}</span>
                  <span className={`text-[11px] font-black tracking-wider uppercase ${activeIdx === i ? 'text-brand-gold' : 'text-brand-white/60'}`}>
                    {food.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Connecting lines from center to items */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 600 600">
            {foods.map((food, i) => {
              const radius = 260;
              const angleRad = (food.angle - 90) * (Math.PI / 180);
              const x = 300 + radius * Math.cos(angleRad);
              const y = 300 + radius * Math.sin(angleRad);
              return (
                <motion.line
                  key={i}
                  x1="300" y1="300" x2={x} y2={y}
                  stroke={activeIdx === i ? '#C89B3C' : 'rgba(255,255,255,0.1)'}
                  strokeWidth={activeIdx === i ? 2 : 1}
                  strokeDasharray="4 6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 1.5, ease: 'easeOut' }}
                />
              );
            })}
          </svg>
        </div>

        {/* Mobile grid */}
        <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
          {foods.map((food, i) => (
            <motion.div
              key={food.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-brand-white/5 backdrop-blur-md rounded-[2rem] p-6 text-center border border-brand-white/10 hover:bg-brand-white/10 hover:border-brand-gold/30 transition-all duration-300 group"
            >
              <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform duration-300">{food.emoji}</span>
              <span className="text-xs font-black text-brand-white/80 uppercase tracking-widest">{food.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
