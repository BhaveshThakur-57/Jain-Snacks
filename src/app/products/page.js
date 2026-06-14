'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { productsData } from '@/data/products';
import { useState } from 'react';

const products = Object.values(productsData);

export default function ProductsPage() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-dark text-brand-white min-h-screen"
    >
      <Navbar />

      {/* Luxury Dark Hero */}
      <section className="relative pt-44 pb-20 md:pt-56 md:pb-32 overflow-hidden">
        {/* Dense Background Textures */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

        {/* Huge Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none flex flex-col">
          <span className="text-[15rem] md:text-[25rem] font-black leading-none tracking-tighter">PRODUCTS</span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="w-[1px] h-20 bg-brand-gold mx-auto mb-8 origin-top"
          />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-bold text-brand-gold uppercase tracking-[0.4em] block mb-6"
          >
            The Collection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter leading-none mb-8"
          >
            Crafted with<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-gold italic font-serif tracking-normal">Intention.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-brand-white/50 max-w-2xl mx-auto font-medium"
          >
            Every product is crafted with clean ingredients, rooted in Jain values of purity.
            High protein, plant based, absolutely no compromise.
          </motion.p>
        </div>
      </section>

      {/* Premium Dark Grid */}
      <section className="relative pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {products.map((product, i) => {
              // Map dark gradients based on product ID
              let darkGradient = 'from-[#1A1A1A] to-[#0A0A0A]';
              if (product.id === 'sweet-corn') darkGradient = 'from-[#2A2315] to-[#14120A]';
              if (product.id === 'kabuli-channa') darkGradient = 'from-[#2A180E] to-[#140A05]';
              if (product.id === 'bhindi') darkGradient = 'from-[#141D12] to-[#0A0E09]';
              if (product.id === 'tvp') darkGradient = 'from-[#2A1C12] to-[#140D08]';

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <Link href={`/products/${product.id}`}>
                    <motion.div
                      className={`group relative rounded-[2.5rem] bg-gradient-to-br ${darkGradient} overflow-hidden cursor-pointer h-full border border-brand-white/5 transition-all duration-500`}
                      style={{
                        boxShadow: hoveredIdx === i
                          ? `0 0 50px ${product.color}20 inset, 0 30px 60px rgba(0,0,0,0.5)`
                          : '0 0 0px transparent',
                      }}
                    >
                      {/* Hover Glow */}
                      <motion.div 
                        animate={{ opacity: hoveredIdx === i ? 0.15 : 0 }}
                        className="absolute inset-0 mix-blend-screen transition-opacity duration-500"
                        style={{ background: `radial-gradient(circle at 50% 0%, ${product.color}, transparent 70%)` }}
                      />

                      <div className="p-10 md:p-14 relative z-10">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                          {/* Product Image */}
                          <motion.div
                            animate={hoveredIdx === i ? { scale: 1.1, rotate: 2, y: -10 } : { scale: 1, rotate: 0, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="relative w-56 h-72 flex-shrink-0"
                          >
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                            />
                          </motion.div>

                          {/* Product Info */}
                          <div className="flex-1 text-center md:text-left">
                            {/* Protein Badge */}
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6 border border-brand-white/10 bg-brand-white/5 backdrop-blur-md">
                              <span className="text-lg font-black" style={{ color: product.color }}>
                                {product.protein}
                              </span>
                              <span className="text-[10px] font-bold text-brand-white/50 uppercase tracking-widest">
                                Protein
                              </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-black text-brand-white mb-3 tracking-tighter leading-tight">
                              {product.shortName}
                            </h2>
                            <p className="text-sm text-brand-gold mb-4 font-serif italic tracking-wide">
                              {product.tagline}
                            </p>
                            <p className="text-sm text-brand-white/40 mb-8 leading-relaxed line-clamp-2">
                              {product.description}
                            </p>

                            {/* Benefits */}
                            <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                              {product.benefits.map((b) => (
                                <span
                                  key={b}
                                  className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded bg-brand-white/5 text-brand-white/60 border border-brand-white/10"
                                >
                                  {b}
                                </span>
                              ))}
                            </div>

                            {/* Price + CTA */}
                            <div className="flex items-center justify-between border-t border-brand-white/10 pt-6">
                              <div className="flex items-end gap-2">
                                <span className="text-2xl font-black text-brand-white">{product.price}</span>
                                <span className="text-xs font-bold text-brand-white/30 uppercase tracking-widest mb-1">/ {product.weight}</span>
                              </div>
                              <div className="w-10 h-10 rounded-full border border-brand-white/20 flex items-center justify-center group-hover:bg-brand-white group-hover:text-brand-dark transition-all">
                                <svg className="w-4 h-4 transform group-hover:rotate-45 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M5 19L19 5M19 5v14M19 5H5" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Luxury Bottom CTA */}
      <section className="py-32 text-center border-t border-brand-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-brand-gold uppercase tracking-[0.4em] block mb-6"
          >
            Need Assistance?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
          >
            Can&apos;t Decide?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-white/40 text-lg mb-12 max-w-xl mx-auto"
          >
            DM us directly on Instagram. Our team will help you pick the perfect premium snack for your lifestyle.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="https://instagram.com/jainacks.in"
              target="_blank"
              className="inline-flex items-center gap-3 px-10 py-5 bg-brand-white text-brand-dark rounded-full text-sm font-black tracking-widest uppercase hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Message on Instagram
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
