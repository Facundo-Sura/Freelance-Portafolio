import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { ProfessionalProjects } from "@/components/ProfessionalProjects";
import { AcademicProjects } from "@/components/AcademicProjects";
import { Technologies } from "@/components/Technologies";
import { Contact } from "@/components/Contact";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutMe />
      <ProfessionalProjects />
      <AcademicProjects />
      <Technologies />
      <Contact />
      <WhatsAppButton />
      
      <footer className="py-8 text-center text-muted border-t border-white/5">
        <p className="text-sm">
          © {new Date().getFullYear()} FreelancePort. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
