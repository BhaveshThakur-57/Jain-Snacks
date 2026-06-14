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
    >
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg to-brand-light/30" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-semibold text-brand-secondary uppercase tracking-[0.2em] block mb-4"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8 max-w-4xl"
          >
            Rooted in Values.
            <br />
            <span className="text-gradient-green">Built for Today.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-brand-text/50 max-w-2xl leading-relaxed"
          >
            Jainacks was born from a simple belief — Jain snacking deserves better. 
            We&apos;re building a brand that honours tradition while serving modern lifestyles.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-20 md:py-32" id="why">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-muted to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold text-brand-gold uppercase tracking-[0.2em] block mb-4">
                Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                Good Food
                <br />
                Should Be <span className="text-gradient-gold">Simple.</span>
              </h2>
              <p className="text-base text-brand-text/50 leading-relaxed mb-6">
                We exist to make high-protein, clean-ingredient snacking accessible to everyone 
                who values purity in their food. No complicated labels. No hidden ingredients. 
                Just honest, nutritious food.
              </p>
              <p className="text-base text-brand-text/50 leading-relaxed">
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
              <div className="rounded-3xl overflow-hidden aspect-square bg-gradient-to-br from-brand-secondary/10 to-brand-gold/10 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5">
                  <Image
                    src="/images/lifestyle.png"
                    alt="Jainacks healthy lifestyle"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
              {/* Floating stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -left-4 bg-brand-white rounded-2xl p-6 shadow-xl border border-brand-muted/20"
              >
                <span className="text-3xl font-extrabold text-brand-protein block">64g</span>
                <span className="text-xs text-brand-text/40 font-medium">Protein per pack</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Jain Principles */}
      <section className="relative py-20 md:py-32 bg-brand-text text-brand-white overflow-hidden" id="purity">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold text-brand-gold uppercase tracking-[0.2em] block mb-4"
            >
              Purity Promise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            >
              Jainism Teaches
              <br />
              <span className="text-brand-gold">Purity.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-white/50 text-base leading-relaxed"
            >
              Our snacks are rooted in Jain values. Every ingredient is carefully vetted. 
              We follow strict guidelines to ensure purity in every pack.
            </motion.p>
          </div>

          {/* Principles grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {principles.map((principle, i) => (
              <motion.div
                key={principle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <motion.div
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(200, 155, 60, 0.15)' }}
                  className="rounded-2xl border border-brand-white/10 p-5 text-center transition-colors"
                >
                  <span className="text-sm font-bold text-brand-white/80">{principle}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold text-brand-secondary uppercase tracking-[0.2em] block mb-4"
            >
              Our Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
            >
              What We <span className="text-gradient-green">Stand For.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(30, 42, 31, 0.06)' }}
                  className="rounded-3xl bg-brand-white p-8 md:p-10 h-full border border-brand-muted/20 transition-shadow"
                >
                  <span className="text-4xl mb-4 block">{value.icon}</span>
                  <h3 className="text-2xl font-extrabold text-brand-text mb-3 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-sm text-brand-text/50 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="relative py-20 md:py-32">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-muted to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold text-brand-secondary uppercase tracking-[0.2em] block mb-4"
            >
              Why We Exist
            </motion.span>

            <div className="space-y-8">
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
                  className="text-xl md:text-2xl text-brand-text/60 leading-relaxed font-medium"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 md:py-32 bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold text-brand-gold uppercase tracking-[0.2em] block mb-4"
            >
              Our Timeline
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
            >
              The <span className="text-gradient-gold">Journey.</span>
            </motion.h2>
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
                <div className="bg-brand-white rounded-3xl p-6 h-full border border-brand-muted/20">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-extrabold text-brand-text mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-text/40">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Join the
            <br />
            <span className="text-gradient-green">Movement.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-text/40 text-lg mb-10"
          >
            Follow us on Instagram for updates, recipes, and the latest from Jainacks.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://instagram.com/jainacks.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-text text-brand-white rounded-full text-sm font-bold hover:bg-brand-secondary transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @jainacks.in
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 border border-brand-text/20 text-brand-text rounded-full text-sm font-bold hover:border-brand-text/40 transition-all"
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
