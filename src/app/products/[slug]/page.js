'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { productsData } from '@/data/products';

export default function ProductDetailPage() {
  const params = useParams();
  const product = productsData[params.slug];

  if (!product) {
    return (
      <main className="min-h-screen bg-brand-dark text-brand-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Product Not Found</h1>
          <Link href="/products" className="text-brand-gold hover:underline">
            Back to Collection
          </Link>
        </div>
      </main>
    );
  }

  const otherProducts = Object.values(productsData).filter((p) => p.id !== product.id);

  // Map product to dark gradient
  let darkGradient = 'from-[#1A1A1A] to-[#0A0A0A]';
  if (product.id === 'sweet-corn') darkGradient = 'from-[#2A2315] to-[#14120A]';
  if (product.id === 'kabuli-channa') darkGradient = 'from-[#2A180E] to-[#140A05]';
  if (product.id === 'bhindi') darkGradient = 'from-[#141D12] to-[#0A0E09]';
  if (product.id === 'tvp') darkGradient = 'from-[#2A1C12] to-[#140D08]';

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-dark text-brand-white min-h-screen"
    >
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-36 md:pt-40 pb-4 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-brand-white/30"
          >
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <span className="text-brand-white/10">/</span>
            <Link href="/products" className="hover:text-brand-gold transition-colors">Collection</Link>
            <span className="text-brand-white/10">/</span>
            <span className="text-brand-white/80">{product.shortName}</span>
          </motion.div>
        </div>
      </section>

      {/* Luxury Product Hero */}
      <section className="relative py-8 md:py-16 overflow-hidden">
        {/* Abstract Glows */}
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] mix-blend-screen pointer-events-none opacity-20"
          style={{ backgroundColor: product.color }}
        />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Immersive Product Stage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className={`relative rounded-[3rem] bg-gradient-to-br ${darkGradient} p-12 md:p-20 aspect-square flex items-center justify-center border border-brand-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden`}>
                {/* Stage Rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[80%] h-[80%] rounded-full border border-brand-white/5" />
                  <div className="absolute w-[50%] h-[50%] rounded-full border border-brand-white/5" />
                </div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-64 h-80 md:w-80 md:h-[450px] z-10"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.9)]"
                    priority
                  />
                </motion.div>

                {/* Floating highlights */}
                {product.highlights.map((h, i) => (
                  <motion.div
                    key={h.text}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="absolute z-20"
                    style={{
                      top: `${15 + i * 25}%`,
                      right: i % 2 === 0 ? '5%' : 'auto',
                      left: i % 2 !== 0 ? '5%' : 'auto',
                    }}
                  >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-white/5 backdrop-blur-xl border border-brand-white/10 shadow-2xl">
                      <span className="text-sm">{h.icon}</span>
                      <span className="text-[10px] font-bold text-brand-white/70 uppercase tracking-widest">{h.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Premium Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Badge */}
              <div
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8 border border-brand-white/10 bg-brand-white/5 backdrop-blur-md"
              >
                <span className="text-xl font-black" style={{ color: product.color }}>
                  {product.protein}
                </span>
                <span className="text-[10px] font-bold text-brand-white/50 uppercase tracking-widest">
                  Protein Per Pack
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 leading-none">
                {product.name}
              </h1>

              <p className="text-xl md:text-2xl text-brand-gold font-serif italic mb-8">
                {product.tagline}
              </p>

              <p className="text-lg text-brand-white/50 leading-relaxed mb-10 max-w-xl font-medium">
                {product.description}
              </p>

              {/* Benefits tags */}
              <div className="flex flex-wrap gap-3 mb-12">
                {product.benefits.map((b) => (
                  <span
                    key={b}
                    className="px-5 py-2.5 rounded-full bg-brand-white/5 text-[11px] font-bold uppercase tracking-widest text-brand-white/70 border border-brand-white/10"
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-10 pb-10 border-b border-brand-white/10">
                <span className="text-5xl font-black text-brand-white">{product.price}</span>
                <span className="text-sm font-bold text-brand-white/30 uppercase tracking-widest">/ {product.weight}</span>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://instagram.com/jainacks.in" target="_blank" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-10 py-5 bg-brand-white text-brand-dark rounded-full text-sm font-black tracking-widest uppercase hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
                  >
                    Order via Instagram
                    <svg className="inline ml-3 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </Link>
                <Link href="https://wa.me/" target="_blank" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-10 py-5 border border-brand-white/20 text-brand-white rounded-full text-sm font-black tracking-widest uppercase hover:bg-brand-white/5 transition-all duration-300"
                  >
                    WhatsApp
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark Details Grid */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Nutrition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-dark rounded-[2.5rem] p-10 border border-brand-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-white/5 rounded-full blur-3xl group-hover:bg-brand-gold/10 transition-colors duration-500" />
              <h3 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] mb-10">
                Nutrition Profile
              </h3>
              <div className="space-y-6">
                {Object.entries(product.nutrition).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between pb-4 border-b border-brand-white/5 last:border-0 last:pb-0">
                    <span className="text-sm font-medium text-brand-white/50 capitalize tracking-wide">{key}</span>
                    <span className="text-base font-black text-brand-white">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Ingredients */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-dark rounded-[2.5rem] p-10 border border-brand-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-white/5 rounded-full blur-3xl group-hover:bg-brand-secondary/10 transition-colors duration-500" />
              <h3 className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.3em] mb-10">
                Pure Ingredients
              </h3>
              <div className="space-y-4">
                {product.ingredients.map((ingredient, i) => (
                  <div key={ingredient} className="flex items-center gap-4">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: product.color }}
                    />
                    <span className="text-sm text-brand-white/80 font-bold tracking-wide">{ingredient}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-brand-white/5">
                <div className="flex flex-col gap-2 text-[10px] text-brand-white/40 font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <span className="text-brand-secondary">✦</span> NO ONION
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-secondary">✦</span> NO GARLIC
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-secondary">✦</span> NO PRESERVATIVES
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How to Use */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-dark rounded-[2.5rem] p-10 border border-brand-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-white/5 rounded-full blur-3xl group-hover:bg-brand-protein/10 transition-colors duration-500" />
              <h3 className="text-[10px] font-black text-brand-protein uppercase tracking-[0.3em] mb-10">
                How to Enjoy
              </h3>
              <div className="space-y-6">
                {product.usage.map((use, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-xs font-black text-brand-white/20 mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium text-brand-white/70 leading-relaxed">{use}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Luxury Related Products */}
      <section className="py-24 md:py-32 border-t border-brand-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tighter mb-16 text-center"
          >
            Explore More
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProducts.map((p, i) => {
              let relatedGradient = 'from-[#1A1A1A] to-[#0A0A0A]';
              if (p.id === 'sweet-corn') relatedGradient = 'from-[#2A2315] to-[#14120A]';
              if (p.id === 'kabuli-channa') relatedGradient = 'from-[#2A180E] to-[#140A05]';
              if (p.id === 'bhindi') relatedGradient = 'from-[#141D12] to-[#0A0E09]';
              if (p.id === 'tvp') relatedGradient = 'from-[#2A1C12] to-[#140D08]';

              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/products/${p.id}`}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      className={`group relative rounded-[2rem] bg-gradient-to-br ${relatedGradient} p-8 cursor-pointer border border-brand-white/5 overflow-hidden transition-all duration-500`}
                    >
                      <motion.div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 mix-blend-screen transition-opacity duration-500"
                        style={{ background: `radial-gradient(circle at 50% 0%, ${p.color}, transparent 70%)` }}
                      />
                      <div className="relative h-48 mb-8 flex items-center justify-center">
                        <motion.div 
                          className="relative w-36 h-48"
                          whileHover={{ scale: 1.1, y: -5 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                          />
                        </motion.div>
                      </div>
                      <div className="relative z-10 text-center">
                        <h3 className="text-xl font-black text-brand-white mb-3 tracking-tight">{p.shortName}</h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-white/5 border border-brand-white/10">
                          <span className="text-sm font-black" style={{ color: p.color }}>
                            {p.protein}
                          </span>
                          <span className="text-[9px] font-bold text-brand-white/50 uppercase tracking-widest">protein</span>
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

      <Footer />
    </motion.main>
  );
}
