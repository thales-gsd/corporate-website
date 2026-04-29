"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import siteData from "@/data/site.json";
import footerData from "@/data/footer.json";

const navLinks = footerData.links;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHidden(y > lastY && y > 100);
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-[var(--color-primary)] shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-white font-heading text-2xl font-bold tracking-tight">
            {siteData.brandName}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[var(--color-accent)] text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 bg-[var(--color-accent)] text-[var(--color-primary)] text-sm font-semibold rounded-full hover:bg-opacity-90 transition-all"
            >
              Solicitar Proposta
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-20 z-30 bg-[var(--color-primary)] px-6 py-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg font-medium border-b border-white/10 pb-3"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-5 py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-full text-center"
            >
              Solicitar Proposta
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}