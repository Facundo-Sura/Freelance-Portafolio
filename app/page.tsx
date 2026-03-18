import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { ProfessionalProjects } from "@/components/ProfessionalProjects";
import { Technologies } from "@/components/Technologies";
import { Contact } from "@/components/Contact";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutMe />
      <ProfessionalProjects />
      <Technologies />
      <Contact />
      <WhatsAppButton />
      <Analytics />
      
      <footer className="py-8 text-center text-muted border-t border-white/5">
        <p className="text-sm">
          © {new Date().getFullYear()} Dev Facu Sura. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
