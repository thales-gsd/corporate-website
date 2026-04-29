"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { fadeUp, staggerContainer, slideLeft, slideRight } from "@/lib/animations";
import aboutData from "@/data/about.json";
import Image from "next/image";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
          >
            <Image
              src={aboutData.image}
              alt="Sobre a empresa"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Accent box */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--color-accent)] rounded-xl -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeUp} className="accent-line" />
            <motion.h2
              variants={fadeUp}
              className="font-heading text-4xl md:text-5xl text-[var(--color-primary)] font-bold mb-6 leading-tight"
            >
              {aboutData.heading}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[var(--color-muted)] text-lg leading-relaxed mb-10"
            >
              {aboutData.paragraph}
            </motion.p>

            {/* Stats */}
            <div ref={ref} className="grid grid-cols-2 gap-6">
              {aboutData.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-[var(--color-background)] rounded-xl p-5"
                >
                  <p className="font-heading text-4xl font-bold text-[var(--color-primary)]">
                    {inView ? (
                      <CountUp end={stat.value} duration={2.5} />
                    ) : (
                      "0"
                    )}
                    <span className="text-[var(--color-accent)]">{stat.suffix}</span>
                  </p>
                  <p className="text-[var(--color-muted)] text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}