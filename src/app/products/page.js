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
    >
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg to-brand-light/30" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-semibold text-brand-secondary uppercase tracking-[0.2em] block mb-4"
          >
            Our Products
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6"
          >
            Crafted with
            <br />
            <span className="text-gradient-green">Intention.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-brand-text/50 max-w-xl"
          >
            Every product is crafted with clean ingredients, rooted in Jain values of purity.
            High protein, plant based, no compromise.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <Link href={`/products/${product.id}`}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className={`group relative rounded-3xl bg-gradient-to-br ${product.bgGradient} overflow-hidden cursor-pointer h-full`}
                    style={{
                      boxShadow: hoveredIdx === i
                        ? `0 30px 60px ${product.color}15, 0 10px 20px rgba(0,0,0,0.05)`
                        : '0 4px 20px rgba(0,0,0,0.03)',
                      transition: 'box-shadow 0.5s ease',
                    }}
                  >
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Product Image */}
                        <motion.div
                          animate={hoveredIdx === i ? { scale: 1.05, rotate: 2 } : { scale: 1, rotate: 0 }}
                          transition={{ duration: 0.4 }}
                          className="relative w-48 h-60 flex-shrink-0"
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain drop-shadow-xl"
                          />
                        </motion.div>

                        {/* Product Info */}
                        <div className="flex-1 text-center md:text-left">
                          {/* Protein badge */}
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
                            style={{ backgroundColor: `${product.color}15` }}>
                            <span className="text-sm font-extrabold" style={{ color: product.color }}>
                              {product.protein}
                            </span>
                            <span className="text-[10px] font-semibold text-brand-text/40 uppercase">
                              protein
                            </span>
                          </div>

                          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text mb-2 tracking-tight">
                            {product.shortName}
                          </h2>
                          <p className="text-sm text-brand-text/50 mb-1 font-medium italic">
                            {product.tagline}
                          </p>
                          <p className="text-sm text-brand-text/40 mb-6 leading-relaxed line-clamp-2">
                            {product.description}
                          </p>

                          {/* Benefits */}
                          <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                            {product.benefits.map((b) => (
                              <span
                                key={b}
                                className="text-[10px] font-semibold px-3 py-1 rounded-full bg-brand-white/80 text-brand-text/60"
                              >
                                {b}
                              </span>
                            ))}
                          </div>

                          {/* Price + CTA */}
                          <div className="flex items-center gap-4 justify-center md:justify-start">
                            <span className="text-xl font-extrabold text-brand-text">{product.price}</span>
                            <span className="text-xs text-brand-text/30">/ {product.weight}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
          >
            Can&apos;t decide?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-text/40 mb-8"
          >
            DM us on Instagram and we&apos;ll help you pick the perfect snack.
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-text text-brand-white rounded-full text-sm font-bold hover:bg-brand-secondary transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
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
