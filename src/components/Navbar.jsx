'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'Our Story' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-6xl ${
          scrolled
            ? 'top-4 glass-dark rounded-full py-4 px-6 shadow-2xl'
            : 'top-6 bg-brand-dark/20 backdrop-blur-md rounded-full py-5 px-8 shadow-xl border border-brand-white/10'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center shadow-[0_0_15px_rgba(200,155,60,0.5)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-brand-dark">
                  <path d="M12 2C8 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-4-8-8-8z" fill="currentColor" opacity="0.3"/>
                  <path d="M17 8c-2-4-5-3-5 1s3 5 5 3 2-1 0-4z" fill="currentColor"/>
                  <path d="M7 8c2-4 5-3 5 1s-3 5-5 3-2-1 0-4z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tighter text-brand-white">
                Jainacks
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <Link
                  href={link.href}
                  className="text-base font-bold tracking-wide text-brand-white/70 hover:text-brand-white transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-gold group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/products"
                className="magnetic-btn px-8 py-3 bg-brand-white text-brand-dark rounded-full text-sm font-extrabold tracking-widest uppercase hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 whitespace-nowrap"
              >
                Explore
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-8 h-[2px] bg-brand-white block transition-all"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-8 h-[2px] bg-brand-white block transition-all"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-8 h-[2px] bg-brand-white block transition-all"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-dark/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-4xl font-black text-brand-white hover:text-brand-gold transition-colors tracking-tighter"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="px-10 py-4 bg-brand-gold text-brand-dark rounded-full text-lg font-extrabold tracking-widest uppercase mt-8 inline-block"
              >
                Explore Collection
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
