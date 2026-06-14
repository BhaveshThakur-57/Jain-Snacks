'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhySection from '@/components/WhySection';
import ProductsSection from '@/components/ProductsSection';
import ComparisonSection from '@/components/ComparisonSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import AddToAnythingSection from '@/components/AddToAnythingSection';
import BenefitsGrid from '@/components/BenefitsGrid';
import IngredientsSection from '@/components/IngredientsSection';
import LaunchStorySection from '@/components/LaunchStorySection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        <Navbar />
        <HeroSection />
        <WhySection />
        <ProductsSection />
        <ComparisonSection />
        <HowItWorksSection />
        <AddToAnythingSection />
        <BenefitsGrid />
        <IngredientsSection />
        <LaunchStorySection />
        <FinalCTASection />
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}
