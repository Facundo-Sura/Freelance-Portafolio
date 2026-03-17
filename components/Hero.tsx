"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium">
            Desarrollador Freelance
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Creando experiencias digitales <span className="text-gradient">excepcionales</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Transformo ideas en soluciones robustas y diseños cautivadores para marcas y empresas en crecimiento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2"
          >
            Ver mis trabajos
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 bg-white/5 text-white font-semibold rounded-lg hover:bg-white/10 border border-white/10 transition-all"
          >
            Contáctame
          </a>
        </motion.div>
      </div>
    </section>
  );
}
