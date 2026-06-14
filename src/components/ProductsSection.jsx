'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const products = [
  {
    id: 'sweet-corn',
    name: 'Vacuum Fried Sweet Corn',
    shortName: 'Sweet Corn',
    protein: '12g',
    benefits: ['Vacuum Fried', 'Natural Sweetness'],
    description: 'Crispy bite with natural sweetness.',
    image: '/images/sweet-corn.png',
    color: '#C89B3C',
    bgGradient: 'from-[#2A2315] to-[#14120A]',
  },
  {
    id: 'kabuli-channa',
    name: 'Crunchy Kabuli Channa',
    shortName: 'Kabuli Channa',
    protein: '22g',
    benefits: ['High Protein', 'Crunchy'],
    description: 'Vacuum-fried to preserve nutrition.',
    image: '/images/kabuli-channa.png',
    color: '#CC6A2A',
    bgGradient: 'from-[#2A180E] to-[#140A05]',
  },
  {
    id: 'bhindi',
    name: 'Vacuum Fried Bhindi',
    shortName: 'Bhindi',
    protein: '8g',
    benefits: ['Crispy', 'Zero Oil Feel'],
    description: 'Crafted for a perfect crispy bite.',
    image: '/images/bhindi.png',
    color: '#4B6B45',
    bgGradient: 'from-[#141D12] to-[#0A0E09]',
  },
  {
    id: 'tvp',
    name: 'Textured Vegetable Protein',
    shortName: 'TVP',
    protein: '64g',
    benefits: ['Highest Protein', 'Versatile'],
    description: 'Soya granules great in any dish.',
    image: '/images/tvp.png',
    color: '#8B5E3C',
    bgGradient: 'from-[#2A1C12] to-[#140D08]',
  },
];

export default function ProductsSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="relative py-32 overflow-hidden bg-brand-dark text-brand-white">
      {/* Dense Background Textures */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-brand-secondary/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Luxury Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-16 h-[1px] bg-brand-gold mb-8 origin-left"
            />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-none"
            >
              Signature <span className="text-brand-gold italic font-serif tracking-normal">Collection</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-4 px-6 py-3 rounded-full border border-brand-white/10 hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-300"
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-white group-hover:text-brand-gold transition-colors">
                Explore All
              </span>
              <svg className="w-4 h-4 text-brand-white group-hover:text-brand-gold transform group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Dense Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="h-full"
            >
              <Link href={`/products/${product.id}`}>
                <motion.div
                  className={`group relative rounded-3xl bg-gradient-to-b ${product.bgGradient} p-8 h-full cursor-pointer overflow-hidden border border-brand-white/5 transition-all duration-500`}
                  style={{
                    boxShadow: hoveredIdx === i
                      ? `0 0 40px ${product.color}20 inset, 0 20px 40px rgba(0,0,0,0.4)`
                      : '0 0 0px transparent',
                  }}
                >
                  {/* Glowing background accent on hover */}
                  <motion.div 
                    animate={{ opacity: hoveredIdx === i ? 0.15 : 0 }}
                    className="absolute inset-0 mix-blend-screen transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${product.color}, transparent 70%)` }}
                  />

                  {/* Top Stats */}
                  <div className="flex justify-between items-start mb-12 relative z-10">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-brand-white/40 uppercase tracking-widest mb-1">
                        Protein
                      </span>
                      <span className="text-2xl font-black" style={{ color: product.color }}>
                        {product.protein}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-brand-white/10 flex items-center justify-center backdrop-blur-md">
                      <svg className="w-3 h-3 text-brand-white/50 group-hover:text-brand-white transform group-hover:rotate-45 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 19L19 5M19 5v14M19 5H5" />
                      </svg>
                    </div>
                  </div>

                  {/* Product Image */}
                  <div className="relative h-48 mb-10 flex items-center justify-center z-10">
                    <motion.div
                      animate={hoveredIdx === i ? { scale: 1.1, y: -10 } : { scale: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                      />
                    </motion.div>
                  </div>

                  {/* Typography Details */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-brand-white mb-2 leading-tight">
                      {product.shortName}
                    </h3>
                    <p className="text-xs text-brand-white/40 mb-6 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {product.benefits.map((b) => (
                        <span
                          key={b}
                          className="text-[9px] font-bold tracking-wider px-3 py-1.5 rounded-sm bg-brand-white/5 text-brand-white/60 border border-brand-white/10 uppercase"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
