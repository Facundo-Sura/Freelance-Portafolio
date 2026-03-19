"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";
import { Calendar, Video, Send, Clock } from "lucide-react";
import { useEffect } from "react";

export function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Section
      id="contact"
      title="Hablemos de tu proyecto"
      subtitle="Agenda una videoconferencia directamente en mi calendario. Elige el día y la hora que mejor te convenga."
      className="pb-40"
    >
      <div className="grid lg:grid-cols-3 gap-12 items-start max-w-7xl mx-auto">
        {/* Info Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">¿Por qué agendar?</h3>
            <p className="text-muted text-lg leading-relaxed">
              Una breve llamada de 15-30 minutos nos permitirá entender mejor tus necesidades y cómo puedo ayudarte a alcanzar tus objetivos.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start p-6 rounded-2xl bg-glass border border-white/10 hover:border-primary/50 transition-all group">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Video size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">Videollamada</h4>
                <p className="text-sm text-muted">A través de Google Meet o Zoom.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-2xl bg-glass border border-white/10 hover:border-primary/50 transition-all group">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">Horarios flexibles</h4>
                <p className="text-sm text-muted">Adaptado a tu zona horaria.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-2xl bg-glass border border-white/10 hover:border-primary/50 transition-all group">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Send size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">Respuesta rápida</h4>
                <p className="text-sm text-muted">Confirmación inmediata vía email.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Calendly Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 w-full h-[650px] bg-glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative"
        >
          {/* Calendly inline widget */}
          <div 
            className="calendly-inline-widget w-full h-full" 
            data-url="https://calendly.com/facundomesura?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=3e1f73"
            style={{ minWidth: '320px', height: '100%' }}
          />
          
          {/* Overlay loading state (opcional) */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center bg-black/20">
            <Calendar className="animate-pulse text-primary" size={48} />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
