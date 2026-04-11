"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const proProjects = [
  {
    title: "Pintureria Caso Viejo",
    description: "E-commerce para la pintureria Caso Viejo, muestra productos, permite comprar y permite contactar con el cliente.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "node.js", "express", "sequelize", "postgresql", "cloudinary", "nodemailer", "mercado pago"],
    image: "/pintureria-caso-viejo.jpg",
    link: "https://pintureria-caso-viejo.com.ar/",
    Github: "https://github.com/Facundo-Sura/pcv.git"
  },
  {
    title: "Portafolio creadora de contenido",
    description: "Sitio web para portafolio de contenido, muestra proyectos, servicios y contacto.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/portafolio-aby-doro.jpg",
    link: "https://portafolio-creativo.vercel.app/",
    Github: "https://github.com/Facundo-Sura/Portafolio-Creativo.git"
  },
  {
    title: "Inmobiliaria Scotto",
    description: "Sitio web deInmobiliaria local autogestionable de propiedades, vehiculos y subastas.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "node.js", "express", "cloudinary", "neon-db"],
    image: "/inmobiliaria-scotto.jpg",
    link: "https://inmobiliariascotto.com.ar/",
    Github: "https://github.com/Facundo-Sura/Scotto-inmobiliaria.git"
  },
  {
    title: "Titanium Team - escuela de kickboxing y muay thai",
    description: "Plataforma online para mostrar clases y competidores de la escuela de kickboxing y muay thai Titanium Team.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/titanium-team.jpg",
    link: "https://titanium-team.vercel.app/",
    Github: "https://github.com/Facundo-Sura/Titanium-Team.git"
  },
  {
    title: "Estudio Juridico Sura",
    description: "Sitio web de Estudio Juridico Sura, muestra información sobre el estudio, sus servicios y permite agendar citas.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "calendly"],
    image: "/estudio-juridico-sura.jpg",
    link: "https://estudio-juridico-sura.vercel.app/",
    Github: "https://github.com/Facundo-Sura/estudio-juridico-sura.git"
  },
  {
    title: "Profesora Ieca",
    description: "Sitio web para mostrar información sobre la profesora de educación abogacía Ieca, sus servicios y contacto.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/profesora-ieca.jpg",
    link: "https://violeta-gomez.vercel.app/",
    Github: "https://github.com/Facundo-Sura/Violeta-Gomez.git"
  }
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
                <Link href={project.link} target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-muted hover:text-primary transition-all">
                  <ExternalLink size={18} />
                </Link>
                <Link href={project.Github} target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-muted hover:text-primary transition-all">
                  <Github size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
