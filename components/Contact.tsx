"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, slideLeft, slideRight } from "@/lib/animations";
import contactData from "@/data/contact.json";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Integrate with your preferred form handler (Formspree, Resend, etc.)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-white">
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
            {contactData.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--color-muted)] text-lg max-w-xl mx-auto">
            {contactData.subheading}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { Icon: MapPin, label: "Endereço", value: contactData.address },
              { Icon: Phone, label: "Telefone", value: contactData.phone },
              { Icon: Mail, label: "E-mail", value: contactData.email },
              { Icon: Clock, label: "Horário", value: contactData.hours },
            ].map(({ Icon, label, value }, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-4 mb-6">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[var(--color-background)] flex items-center justify-center">
                  <Icon size={18} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <p className="text-[var(--color-primary)] font-semibold text-sm mb-0.5">{label}</p>
                  <p className="text-[var(--color-muted)] text-sm">{value}</p>
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div
              variants={fadeUp}
              className="mt-6 rounded-2xl overflow-hidden h-56 border border-[var(--color-border)]"
            >
              <iframe
                src={contactData.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização"
              />
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-heading text-2xl text-[var(--color-primary)] font-bold mb-2">
                  Mensagem enviada!
                </h3>
                <p className="text-[var(--color-muted)]">
                  Nossa equipe retornará em até 24 horas úteis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-primary)] mb-1.5">
                      Nome completo
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="João Silva"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-primary)] mb-1.5">
                      Empresa
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Sua empresa"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--color-primary)] mb-1.5">
                    E-mail
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="joao@empresa.com.br"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--color-primary)] mb-1.5">
                    Telefone / WhatsApp
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="(19) 99999-0000"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--color-primary)] mb-1.5">
                    Tipo de projeto
                  </label>
                  <select name="type" className="form-input">
                    <option value="">Selecione...</option>
                    <option>Construção Residencial</option>
                    <option>Obra Comercial</option>
                    <option>Reforma & Retrofit</option>
                    <option>Consultoria</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--color-primary)] mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Descreva seu projeto ou dúvida..."
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--color-primary)] text-white font-semibold rounded-xl hover:bg-opacity-90 transition-all mt-2 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  Enviar mensagem
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}