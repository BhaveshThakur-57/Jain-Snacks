'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: [
      { label: 'Vacuum Fried Sweet Corn', href: '/products/sweet-corn' },
      { label: 'Crunchy Kabuli Channa', href: '/products/kabuli-channa' },
      { label: 'Vacuum Fried Bhindi', href: '/products/bhindi' },
      { label: 'Textured Vegetable Protein', href: '/products/tvp' },
    ],
    Company: [
      { label: 'Our Story', href: '/about' },
      { label: 'Why Jainacks', href: '/about#why' },
      { label: 'Purity Promise', href: '/about#purity' },
    ],
    Connect: [
      { label: 'Instagram', href: 'https://instagram.com/jainacks.in' },
      { label: 'Facebook', href: 'https://facebook.com/jainacks' },
      { label: 'WhatsApp', href: '#' },
    ],
  };

  return (
    <footer className="relative overflow-hidden border-t border-brand-white/5">
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Top section with large branding */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
          >
            Snack Better.<br />
            <span className="text-brand-gold">Not Harder.</span>
          </motion.h2>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-brand-secondary flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M17 8c-2-4-5-3-5 1s3 5 5 3 2-1 0-4z" fill="currentColor"/>
                  <path d="M7 8c2-4 5-3 5 1s-3 5-5 3-2-1 0-4z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-lg font-bold">Jainacks</span>
            </div>
            <p className="text-sm text-brand-white/50 leading-relaxed">
              Premium Jain snacks crafted with clean ingredients. 
              High protein, plant based, no onion, no garlic.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-brand-white/30 uppercase tracking-widest mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-white/60 hover:text-brand-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-brand-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-white/30">
            © {currentYear} Jainacks. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-brand-white/30">Launching in Bhopal</span>
            <span className="text-xs text-brand-white/30">•</span>
            <span className="text-xs text-brand-white/30">Made with purity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
