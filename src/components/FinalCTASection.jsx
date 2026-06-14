'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FinalCTASection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background - Inherits body's dark background automatically */}
      
      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Small badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-white/5 border border-brand-white/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            Start your journey
          </span>
        </motion.div>

        {/* Large heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.9] mb-10 text-brand-white"
        >
          Eat Smarter.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-gold italic font-serif tracking-normal">Not Harder.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-brand-white/50 max-w-lg mx-auto mb-16 font-medium leading-relaxed"
        >
          Premium Jain snacks. High protein, plant based, clean ingredients.
          Now available in Bhopal.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/products" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-12 py-5 bg-brand-white text-brand-dark rounded-full text-sm font-black tracking-widest uppercase hover:bg-brand-white/90 transition-all duration-300"
            >
              Explore Our Snacks
              <svg className="inline ml-3 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </Link>
          <Link href="https://instagram.com/jainacks.in" target="_blank" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-12 py-5 bg-brand-white/5 border border-brand-white/20 text-brand-white rounded-full text-sm font-black tracking-widest uppercase hover:bg-brand-white/10 hover:border-brand-gold/30 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow on Instagram
            </motion.button>
          </Link>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-24 w-16 h-[1px] bg-brand-white/20 mx-auto"
        />
      </div>
    </section>
  );
}
