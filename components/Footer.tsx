"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import siteData from "@/data/site.json";
import footerData from "@/data/footer.json";
import contactData from "@/data/contact.json";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 md:px-12"
      style={{ background: "#0d1e33" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl text-white font-bold mb-3">
              {siteData.brandName}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {footerData.tagline}
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2">
              {footerData.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-[var(--color-accent)] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: contactData.social.instagram, label: "Instagram" },
                { Icon: Linkedin, href: contactData.social.linkedin, label: "LinkedIn" },
                { Icon: Facebook, href: contactData.social.facebook, label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[var(--color-accent)] flex items-center justify-center transition-colors"
                >
                  <Icon size={16} className="text-white" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <p className="text-white/30 text-xs text-center mt-8">
          {footerData.copyright}
        </p>
      </div>
    </footer>
  );
}