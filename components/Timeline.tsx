"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, timelineItem } from "@/lib/animations";
import timelineData from "@/data/timeline.json";

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span variants={fadeUp} className="accent-line mx-auto" />
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl text-[var(--color-primary)] font-bold mb-4"
          >
            {timelineData.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--color-muted)] text-lg max-w-xl mx-auto">
            {timelineData.subheading}
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent)]/30 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-12">
            {timelineData.milestones.map((m, i) => (
              <motion.div
                key={i}
                variants={timelineItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div className="bg-[var(--color-background)] rounded-xl p-6 border border-[var(--color-border)] card-hover">
                    <span className="text-[var(--color-accent)] font-bold text-sm tracking-widest uppercase">
                      {m.year}
                    </span>
                    <h3 className="font-heading text-xl text-[var(--color-primary)] font-semibold mt-1 mb-2">
                      {m.title}
                    </h3>
                    <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden md:flex shrink-0 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-white shadow-md z-10" />

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}