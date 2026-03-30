"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";
import { 
  Layout, 
  Server, 
  Cloud,
  Database,
} from "lucide-react";

const techStack = [
  { name: "Frontend", icon: Layout, skills: ["React", "Vite", "Next.js", "Vue.js", "Bootstrap", "Tailwind", "Bulma"] },
  { name: "Backend", icon: Server, skills: ["Java", "Spring", "Node.js", "Express", "Python"] },
  { name: "Database", icon: Database, skills: ["MySQL", "PostgreSQL", "Neon", "Supabase", "MongoDB"] },
  { name: "DevOps", icon: Cloud, skills: ["Vercel", "Render", "AWS", "GCP", "Docker"] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Technologies() {
  return (
    <Section
      id="tech"
      title="Tecnologías"
      subtitle="Domino las herramientas más modernas del ecosistema de desarrollo para garantizar soluciones escalables y mantenibles."
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            className="p-10 rounded-3xl bg-glass border border-white/10 text-center hover:bg-white/5 transition-all group"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
              <tech.icon size={40} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">{tech.name}</h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {tech.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-muted">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
