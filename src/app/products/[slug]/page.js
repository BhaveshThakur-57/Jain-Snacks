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
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">Product Not Found</h1>
          <Link href="/products" className="text-brand-secondary underline">
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const otherProducts = Object.values(productsData).filter((p) => p.id !== product.id);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-32 md:pt-36 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-xs text-brand-text/40"
          >
            <Link href="/" className="hover:text-brand-text transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-brand-text transition-colors">Products</Link>
            <span>/</span>
            <span className="text-brand-text/70 font-medium">{product.shortName}</span>
          </motion.div>
        </div>
      </section>

      {/* Product Hero */}
      <section className="relative py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`relative rounded-3xl bg-gradient-to-br ${product.bgGradient} p-12 md:p-16 aspect-square flex items-center justify-center`}>
                {/* Background circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full border border-brand-muted/15" />
                  <div className="absolute w-1/2 h-1/2 rounded-full border border-brand-muted/10" />
                </div>

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-64 h-80 md:w-72 md:h-96"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>

                {/* Floating highlights */}
                {product.highlights.map((h, i) => (
                  <motion.div
                    key={h.text}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="absolute"
                    style={{
                      top: `${15 + i * 20}%`,
                      right: i % 2 === 0 ? '3%' : 'auto',
                      left: i % 2 !== 0 ? '3%' : 'auto',
                    }}
                  >
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-white/90 shadow-sm border border-brand-muted/10">
                      <span className="text-sm">{h.icon}</span>
                      <span className="text-[10px] font-bold text-brand-text/70">{h.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                style={{ backgroundColor: `${product.color}15` }}
              >
                <span className="text-sm font-extrabold" style={{ color: product.color }}>
                  {product.protein}
                </span>
                <span className="text-[10px] font-semibold text-brand-text/40 uppercase tracking-wider">
                  protein per pack
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 leading-tight">
                {product.name}
              </h1>

              <p className="text-lg text-brand-text/40 italic font-medium mb-6">
                {product.tagline}
              </p>

              <p className="text-base text-brand-text/60 leading-relaxed mb-8 max-w-lg">
                {product.description}
              </p>

              {/* Benefits tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.benefits.map((b) => (
                  <span
                    key={b}
                    className="px-4 py-2 rounded-full bg-brand-light text-xs font-bold text-brand-text/60 border border-brand-muted/20"
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-3xl font-extrabold text-brand-text">{product.price}</span>
                <span className="text-sm text-brand-text/30">/ {product.weight}</span>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3">
                <Link href="https://instagram.com/jainacks.in" target="_blank">
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(30, 42, 31, 0.15)' }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-brand-text text-brand-white rounded-full text-sm font-bold tracking-wide hover:bg-brand-secondary transition-colors duration-300"
                  >
                    Order via Instagram
                    <svg className="inline ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </Link>
                <Link href="https://wa.me/" target="_blank">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border border-brand-text/20 text-brand-text rounded-full text-sm font-bold tracking-wide hover:border-brand-text/40 transition-all duration-300"
                  >
                    WhatsApp
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nutrition & Details */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nutrition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-white rounded-3xl p-8 border border-brand-muted/20"
            >
              <h3 className="text-sm font-bold text-brand-text/30 uppercase tracking-widest mb-6">
                Nutrition
              </h3>
              <div className="space-y-4">
                {Object.entries(product.nutrition).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between py-2 border-b border-brand-muted/10 last:border-0">
                    <span className="text-sm text-brand-text/50 capitalize">{key}</span>
                    <span className="text-sm font-bold text-brand-text">{value}</span>
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
              className="bg-brand-white rounded-3xl p-8 border border-brand-muted/20"
            >
              <h3 className="text-sm font-bold text-brand-text/30 uppercase tracking-widest mb-6">
                Ingredients
              </h3>
              <div className="space-y-3">
                {product.ingredients.map((ingredient, i) => (
                  <div key={ingredient} className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: product.color }}
                    />
                    <span className="text-sm text-brand-text/70 font-medium">{ingredient}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-brand-muted/10">
                <div className="flex items-center gap-2 text-xs text-brand-secondary font-bold">
                  <span>✅</span>
                  <span>No Onion · No Garlic · No Preservatives</span>
                </div>
              </div>
            </motion.div>

            {/* How to Use */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brand-white rounded-3xl p-8 border border-brand-muted/20"
            >
              <h3 className="text-sm font-bold text-brand-text/30 uppercase tracking-widest mb-6">
                How to Use
              </h3>
              <div className="space-y-4">
                {product.usage.map((use, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xs font-bold text-brand-muted mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-brand-text/60 leading-relaxed">{use}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 md:py-24 bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12"
          >
            You Might Also Like
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProducts.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/products/${p.id}`}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: `0 20px 50px ${p.color}10` }}
                    className={`rounded-3xl bg-gradient-to-br ${p.bgGradient} p-6 cursor-pointer transition-shadow`}
                  >
                    <div className="relative h-40 mb-4 flex items-center justify-center">
                      <div className="relative w-28 h-40">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-contain drop-shadow-lg"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-brand-text mb-1">{p.shortName}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-extrabold" style={{ color: p.color }}>
                        {p.protein}
                      </span>
                      <span className="text-[10px] text-brand-text/40 uppercase">protein</span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
