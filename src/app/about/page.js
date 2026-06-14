'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const values = [
  {
    title: 'Purity',
    description: 'Every ingredient is carefully selected. No onion, no garlic, no root vegetables. Rooted in Jain principles of ahimsa and purity.',
    icon: '🙏',
  },
  {
    title: 'Nutrition',
    description: 'We believe snacking should nourish, not just fill. Our products deliver real protein and genuine nutrition.',
    icon: '💪',
  },
  {
    title: 'Simplicity',
    description: 'Clean labels, minimal ingredients. No complicated recipes. Food that fits modern life.',
    icon: '🍃',
  },
  {
    title: 'Innovation',
    description: 'Vacuum frying technology preserves nutrients while delivering the crunch you love. Better science, better snacks.',
    icon: '🔬',
  },
];

const principles = [
  'No Onion',
  'No Garlic',
  'No Root Vegetable',
  'No Compromise',
  'Plant Based',
  'Clean Ingredients',
];

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-brand-white bg-brand-dark min-h-screen"
    >
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-brand-white/5">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />

        {/* Ambient overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] block mb-4"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[0.95] mb-8 max-w-4xl text-brand-white"
          >
            Rooted in Values.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-gold italic font-serif">Built for Today.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-brand-white/60 max-w-2xl leading-relaxed font-medium"
          >
            Jainacks was born from a simple belief — Jain snacking deserves better. 
            We&apos;re building a brand that honours tradition while serving modern lifestyles.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-20 md:py-32 border-b border-brand-white/5" id="why">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] block mb-4">
                Mission
              </span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-brand-white">
                Good Food
                <br />
                Should Be <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-gold italic font-serif">Simple.</span>
              </h2>
              <p className="text-lg text-brand-white/60 leading-relaxed mb-6 font-medium">
                We exist to make high-protein, clean-ingredient snacking accessible to everyone 
                who values purity in their food. No complicated labels. No hidden ingredients. 
                Just honest, nutritious food.
              </p>
              <p className="text-lg text-brand-white/60 leading-relaxed font-medium">
                Every Jainacks product is made with the belief that what you eat should 
                nourish your body and align with your values — without compromising on taste.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden aspect-square border border-brand-white/10 flex items-center justify-center relative">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-brand-gold/10 blur-[80px]" />
                <div className="relative w-4/5 h-4/5 z-10 border border-brand-white/5 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <Image
                    src="/images/lifestyle.png"
                    alt="Jainacks healthy lifestyle"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Floating stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -left-4 glass-dark rounded-[2rem] p-8 shadow-2xl border border-brand-white/10"
              >
                <span className="text-4xl font-black text-brand-protein block mb-1">64g</span>
                <span className="text-xs text-brand-white/50 font-black uppercase tracking-[0.2em]">Protein per pack</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Jain Principles */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-brand-white/5" id="purity">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-secondary/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[15rem] font-black text-brand-white/5 whitespace-nowrap pointer-events-none z-0">
              PURITY
            </div>
            <div className="relative z-10">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] block mb-4"
              >
                Our Promise
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black tracking-tighter text-brand-white"
              >
                The Jainacks <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-gold italic font-serif tracking-normal">Standard.</span>
              </motion.h2>
            </div>
          </div>

          {/* Marquee Principles */}
          <div className="flex flex-col gap-6 overflow-hidden py-10 relative">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10" />

            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex gap-6 whitespace-nowrap items-center"
            >
              {[...principles, ...principles].map((text, i) => (
                <div key={`p1-${i}`} className="flex items-center gap-6">
                  <span className="text-4xl md:text-5xl lg:text-7xl font-black text-brand-white/10 uppercase tracking-tighter">
                    {text}
                  </span>
                  <span className="w-4 h-4 rounded-full bg-brand-gold/30" />
                </div>
              ))}
            </motion.div>

            <motion.div
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              className="flex gap-6 whitespace-nowrap items-center ml-20"
            >
              {[...principles, ...principles].reverse().map((text, i) => (
                <div key={`p2-${i}`} className="flex items-center gap-6">
                  <span className="text-4xl md:text-5xl lg:text-7xl font-black text-brand-white/10 uppercase tracking-tighter">
                    {text}
                  </span>
                  <span className="w-4 h-4 rounded-full bg-brand-secondary/30" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark p-10 md:p-12 rounded-[2.5rem] border border-brand-white/10 hover:border-brand-gold/30 transition-colors duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-white/5 rounded-full blur-3xl group-hover:bg-brand-gold/10 transition-colors duration-500" />
                <span className="text-4xl md:text-5xl mb-6 block transform group-hover:scale-110 transition-transform duration-500 origin-left">
                  {value.icon}
                </span>
                <h3 className="text-2xl font-black text-brand-white tracking-tight mb-4">{value.title}</h3>
                <p className="text-sm font-medium text-brand-white/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="relative py-24 md:py-32 border-b border-brand-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] block mb-8"
            >
              Why We Exist
            </motion.span>

            <div className="space-y-10">
              {[
                'We saw a gap in the market. Jain snacks were either traditional or unhealthy. Nothing was modern, high-protein, and clean.',
                'We built Jainacks to bridge that gap. Premium snacks that respect your values and fuel your lifestyle.',
                'Every pack is a step towards making clean, protein-rich snacking the norm — not the exception.',
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl md:text-4xl text-brand-white leading-tight font-black tracking-tight"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-brand-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-secondary/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[15rem] font-black text-brand-white/5 whitespace-nowrap pointer-events-none z-0">
              TIMELINE
            </div>
            <div className="relative z-10">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] block mb-4"
              >
                Our Timeline
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black tracking-tighter text-brand-white"
              >
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-gold italic font-serif">Journey.</span>
              </motion.h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { year: '2025', title: 'The Spark', desc: 'The idea of premium Jain snacking takes shape.' },
              { year: 'Early 2026', title: 'R&D Phase', desc: 'Perfecting recipes and sourcing clean ingredients.' },
              { year: 'Jun 2026', title: 'Bhopal Launch', desc: 'Our first city. The beginning of something special.' },
              { year: '2027+', title: 'Pan-India', desc: 'Expanding to every city. Online and offline.' },
            ].map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="glass-dark rounded-[2rem] p-8 h-full border border-brand-white/10 hover:border-brand-gold/30 transition-colors duration-500 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-white/5 rounded-full blur-3xl group-hover:bg-brand-gold/10 transition-colors duration-500" />
                  <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] block mb-4">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-black text-brand-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-sm font-medium text-brand-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-48 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight text-brand-white"
          >
            Join the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-gold italic font-serif">Movement.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-white/50 text-xl mb-12 font-medium"
          >
            Follow us on Instagram for updates, recipes, and the latest from Jainacks.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a
              href="https://instagram.com/jainacks.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-white text-brand-dark rounded-full text-sm font-black tracking-widest uppercase hover:bg-brand-white/90 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @jainacks.in
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-brand-white/5 border border-brand-white/20 text-brand-white rounded-full text-sm font-black tracking-widest uppercase hover:border-brand-gold/40 hover:bg-brand-white/10 transition-all"
            >
              Explore Products
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
