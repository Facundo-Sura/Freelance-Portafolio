"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";
import { Mail, Facebook, Instagram, Send } from "lucide-react";

const socialLinks = [
  {
    name: "Gmail",
    icon: Mail,
    href: "mailto:tuemail@gmail.com",
    color: "hover:bg-red-500/20 hover:text-red-500 hover:border-red-500/50",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/tucuenta",
    color: "hover:bg-blue-600/20 hover:text-blue-600 hover:border-blue-600/50",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/tucuenta",
    color: "hover:bg-pink-500/20 hover:text-pink-500 hover:border-pink-500/50",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contáctame"
      subtitle="¿Tienes un proyecto en mente? Estoy listo para ayudarte a hacerlo realidad. Conéctate conmigo a través de mis redes sociales."
      className="pb-40"
    >
      <div className="flex flex-col items-center gap-12 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6 animate-pulse">
            <Send size={40} />
          </div>
          <h3 className="text-3xl font-bold">¡Hablemos de tu próximo gran paso!</h3>
          <p className="text-muted text-lg">
            Respondo en menos de 24 horas. Elige tu plataforma preferida:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`flex flex-col items-center gap-4 p-10 rounded-3xl bg-glass border border-white/10 transition-all duration-300 ${link.color} group`}
            >
              <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-transparent transition-colors">
                <link.icon size={36} strokeWidth={1.5} />
              </div>
              <span className="text-xl font-bold">{link.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
