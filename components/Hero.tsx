"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Globe, Laptop, Server, Smartphone } from "lucide-react";
import { CodeTerminal } from "./CodeTerminal";

const floatingIcons = [
  { icon: Code2, x: "-10%", y: "-15%", delay: 0 },
  { icon: Server, x: "15%", y: "-10%", delay: 0.2 },
  { icon: Database, x: "-15%", y: "10%", delay: 0.4 },
  { icon: Globe, x: "10%", y: "15%", delay: 0.6 },
  { icon: Smartphone, x: "-8%", y: "20%", delay: 0.8 },
];

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20 relative overflow-hidden">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              x: [item.x, `${parseInt(item.x) + 5}%`, item.x],
              y: [item.y, `${parseInt(item.y) - 5}%`, item.y],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              delay: item.delay,
              ease: "easeInOut"
            }}
            className="absolute left-1/2 top-1/2 text-primary"
          >
            <item.icon size={120} strokeWidth={0.5} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium">
              Desarrollador Full Stack
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Creando soluciones <span className="text-gradient">digitales</span> de alto impacto
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-muted leading-relaxed max-w-xl"
          >
            Especializado en el ecosistema de JavaScript para construir aplicaciones robustas, escalables y con un diseño excepcional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              Explorar proyectos
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 border border-white/10 transition-all backdrop-blur-sm"
            >
              Contactar ahora
            </a>
          </motion.div>
        </div>

        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative"
          >
            {/* Glow effect behind terminal */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <CodeTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
