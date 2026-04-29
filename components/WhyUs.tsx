"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, slideLeft, slideRight } from "@/lib/animations";
import whyUsData from "@/data/whyus.json";
import Image from "next/image";
import { CheckCircle, Clock, BarChart3, HeartHandshake, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  CheckCircle, Clock, BarChart3, HeartHandshake,
};

export default function WhyUs() {
  return (
    <section
      id="whyus"
      className="section-padding"
      style={{ background: `var(--color-primary)` }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeUp}
              className="block w-14 h-0.5 bg-[var(--color-accent)] mb-6"
            />
            <motion.h2
              variants={fadeUp}
              className="font-heading text-4xl md:text-5xl text-white font-bold mb-4 leading-tight"
            >
              {whyUsData.heading}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/60 text-lg mb-10 leading-relaxed"
            >
              {whyUsData.subheading}
            </motion.p>

            <div className="grid gap-6">
              {whyUsData.items.map((item, i) => {
                const Icon = iconMap[item.icon] ?? CheckCircle;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex gap-4 items-start"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center mt-0.5">
                      <Icon size={18} className="text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base mb-1">{item.title}</h4>
                      <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl"
          >
            <Image
              src={whyUsData.image}
              alt="Por que nos escolher"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[var(--color-primary)]/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}