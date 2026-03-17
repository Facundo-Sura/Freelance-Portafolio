"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function Section({ children, id, className, title, subtitle }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-6", className)}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            {title && <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
