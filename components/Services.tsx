"use client";

import { motion } from "framer-motion";
import { staggerContainer, scaleIn, fadeUp } from "@/lib/animations";
import servicesData from "@/data/services.json";
import {
  Building2, Landmark, Wrench, FileText, Leaf, Shield,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Building2, Landmark, Wrench, FileText, Leaf, Shield,
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="accent-line mx-auto" />
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl text-[var(--color-primary)] font-bold mb-4"
          >
            {servicesData.heading}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[var(--color-muted)] text-lg max-w-xl mx-auto"
          >
            {servicesData.subheading}
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.items.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Building2;
            return (
              <motion.div
                key={i}
                variants={scaleIn}
                className="card-hover bg-white rounded-2xl p-8 border border-[var(--color-border)] group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/8 flex items-center justify-center mb-5 group-hover:bg-[var(--color-accent)]/15 transition-colors">
                  <Icon
                    size={22}
                    className="text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors"
                  />
                </div>
                <h3 className="font-heading text-xl text-[var(--color-primary)] font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}