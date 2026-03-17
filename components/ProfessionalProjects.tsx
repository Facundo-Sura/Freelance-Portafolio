"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const proProjects = [
  {
    title: "Plataforma E-commerce",
    description: "Tienda online completa con pasarela de pagos, gestión de inventario y panel de administración personalizado.",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "SaaS de Gestión de Tareas",
    description: "Aplicación para equipos remotos que permite organizar proyectos y mejorar la productividad en tiempo real.",
    tags: ["React", "TypeScript", "Firebase", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Portal de Reservas Médicas",
    description: "Sistema de gestión para clínicas con agenda inteligente, notificaciones automáticas y expedientes digitales.",
    tags: ["Node.js", "Express", "MongoDB", "Redux"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e90526ef49?auto=format&fit=crop&q=80&w=1000",
  },
];

export function ProfessionalProjects() {
  return (
    <Section
      id="projects"
      title="Trabajos realizados"
      subtitle="Una selección de mis proyectos profesionales más destacados para clientes corporativos y startups."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-glass border border-white/10 hover:border-primary/50 transition-all duration-500"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-sm text-muted line-clamp-2 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-white/5 border border-white/10 text-muted">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-muted hover:text-primary transition-all">
                  <ExternalLink size={18} />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-muted hover:text-primary transition-all">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
