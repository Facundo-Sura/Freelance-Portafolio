"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";
import { User, Code, Palette, Rocket } from "lucide-react";
import  Image  from "next/image";

const skills = [
  { icon: Code, label: "Desarrollo", desc: "Soluciones a medida con tecnologías modernas." },
  { icon: Palette, label: "Diseño UI/UX", desc: "Interfaces limpias e intuitivas." },
  { icon: Rocket, label: "Optimización", desc: "Rendimiento veloz y experiencias fluidas." },
];

export function AboutMe() {
  return (
    <Section
      id="about"
      title="Quién soy"
      subtitle="Soy un desarrollador freelance apasionado por crear aplicaciones web modernas, funcionales y centradas en el usuario."
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-auto h-[500px] rounded-2xl overflow-hidden bg-glass flex items-center justify-center border border-white/10 shadow-2xl"
        >
          {/* Placeholder for Profile Image */}
          <div className="text-primary opacity-40 flex flex-col items-center">
            <User size={120} strokeWidth={1} />
            <Image src="/profile.png" alt="Foto de perfil" width={400} height={200} />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Impulsando tu visión digital</h3>
            <p className="text-muted leading-relaxed text-lg">
              Con años de experiencia trabajando de forma remota para clientes en todo el mundo, 
              entiendo la importancia de una comunicación clara y resultados excepcionales. 
              Mi enfoque se basa en combinar la creatividad visual con la robustez técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <skill.icon size={24} />
                </div>
                <h4 className="font-semibold text-white">{skill.label}</h4>
                <p className="text-sm text-muted leading-tight">{skill.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
