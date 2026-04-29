"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import testimonialsData from "@/data/testimonials.json";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonialsData.items.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 4500);
  };

  useEffect(() => {
    startAuto();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const go = (idx: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActive(idx);
    startAuto();
  };

  const item = testimonialsData.items[active];

  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{
        background: `linear-gradient(135deg, var(--color-primary) 0%, #0d1e33 100%)`,
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="block w-14 h-0.5 bg-[var(--color-accent)] mx-auto mb-6"
          />
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl text-white font-bold mb-3"
          >
            {testimonialsData.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg">
            {testimonialsData.subheading}
          </motion.p>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/8 backdrop-blur border border-white/10 rounded-2xl p-8 md:p-12 mb-10"
        >
          <Quote size={36} className="text-[var(--color-accent)] mx-auto mb-6 opacity-70" />
          <p className="text-white text-lg md:text-xl leading-relaxed font-light mb-8">
            "{item.quote}"
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--color-accent)]">
              <Image
                src={item.photo}
                alt={item.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">{item.name}</p>
              <p className="text-[var(--color-accent)] text-xs">{item.company}</p>
            </div>
          </div>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonialsData.items.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === active
                  ? "bg-[var(--color-accent)] w-6"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}