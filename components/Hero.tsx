"use client";

import { motion } from "framer-motion";
import { heroContainer, heroItem } from "@/lib/animations";
import heroData from "@/data/hero.json";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/90 via-[var(--color-primary)]/70 to-[var(--color-primary)]/50" />

      {/* Content */}
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.span
          variants={heroItem}
          className="inline-block text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4"
        >
          Há mais de 20 anos construindo
        </motion.span>

        <motion.h1
          variants={heroItem}
          className="font-heading text-5xl md:text-7xl text-white font-bold leading-tight mb-6"
        >
          {heroData.heading}
        </motion.h1>

        <motion.p
          variants={heroItem}
          className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {heroData.subheading}
        </motion.p>

        <motion.div
          variants={heroItem}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={heroData.ctaPrimary.href}
            className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-full text-base hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {heroData.ctaPrimary.label}
          </a>
          <a
            href={heroData.ctaSecondary.href}
            className="px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full text-base hover:border-white hover:bg-white/10 transition-all"
          >
            {heroData.ctaSecondary.label}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}