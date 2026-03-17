"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";
import { GraduationCap, Github } from "lucide-react";

const academicProjects = [
  {
    title: "Simulador de Redes Neuronales",
    institution: "Universidad Tecnológica",
    description: "Desarrollo de una interfaz visual para la creación y entrenamiento de modelos básicos de IA.",
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
  },
  {
    title: "Sistema de Voto Electrónico Seguro",
    institution: "Proyecto de Grado",
    description: "Prototipo basado en blockchain para garantizar la integridad y anonimato en procesos electorales.",
    technologies: ["Solidity", "Ethereum", "Next.js", "Web3.js"],
  },
  {
    title: "Optimización de Algoritmos de Búsqueda",
    institution: "Laboratorio de Algoritmia",
    description: "Análisis comparativo de eficiencia entre diferentes estructuras de datos en conjuntos masivos.",
    technologies: ["C++", "Qt Framework", "Data Visualization"],
  },
];

export function AcademicProjects() {
  return (
    <Section
      id="academic"
      title="Proyectos estudiantiles"
      subtitle="Mi trayectoria académica y proyectos de investigación durante mi formación profesional."
      className="bg-white/5"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {academicProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-3xl bg-glass border border-white/10 flex flex-col justify-between hover:shadow-2xl hover:shadow-primary/5 transition-all group"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap size={28} strokeWidth={1.5} />
                </div>
                <a href="#" className="p-2 text-muted hover:text-white transition-colors">
                  <Github size={20} />
                </a>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-xs font-semibold text-primary/80 uppercase tracking-widest">{project.institution}</p>
                <p className="text-sm text-muted leading-relaxed line-clamp-3">{project.description}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-[10px] text-muted-foreground/60">#{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
