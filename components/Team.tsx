"use client";

import { motion } from "framer-motion";
import { staggerContainer, scaleIn, fadeUp } from "@/lib/animations";
import teamData from "@/data/team.json";
import Image from "next/image";

export default function Team() {
  return (
    <section id="team" className="section-padding bg-[var(--color-background)]">
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
            {teamData.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--color-muted)] text-lg max-w-xl mx-auto">
            {teamData.subheading}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamData.members.map((member, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] card-hover cursor-default"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Bio overlay */}
                <div className="absolute inset-0 bg-[var(--color-primary)]/85 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/90 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
              {/* Info */}
              <div className="p-5">
                <h3 className="font-heading text-lg text-[var(--color-primary)] font-semibold">
                  {member.name}
                </h3>
                <p className="text-[var(--color-accent)] text-sm font-medium mt-0.5">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}