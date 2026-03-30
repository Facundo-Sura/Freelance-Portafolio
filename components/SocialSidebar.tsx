"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Github, Linkedin, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    name: "Gmail",
    icon: Mail,
    href: "mailto:facundomesura@gmail.com",
    color: "hover:bg-red-500/20 hover:text-red-500 hover:border-red-500/50",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/facundo.sura",
    color: "hover:bg-blue-600/20 hover:text-blue-600 hover:border-blue-600/50",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/facu_dev/",
    color: "hover:bg-pink-500/20 hover:text-pink-500 hover:border-pink-500/50",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/dev-facundo-sura/",
    color: "hover:bg-blue-700/20 hover:text-blue-700 hover:border-blue-700/50",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Facundo-Sura",
    color: "hover:bg-white/20 hover:text-white hover:border-white/50",
  },
];

export function SocialSidebar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.1, x: 5 }}
          className={cn(
            "p-3 rounded-xl bg-glass border border-white/10 transition-all duration-300 group shadow-lg",
            link.color
          )}
          title={link.name}
        >
          <link.icon size={20} strokeWidth={1.5} />
          
          {/* Tooltip opcional */}
          <span className="absolute left-full ml-4 px-2 py-1 bg-white/10 backdrop-blur-md rounded-md text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
            {link.name}
          </span>
        </motion.a>
      ))}
      
      {/* Línea decorativa */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 100 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="w-px bg-linear-to-b from-primary/50 to-transparent mx-auto mt-2"
      />
    </div>
  );
}
