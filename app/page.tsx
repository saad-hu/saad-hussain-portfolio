import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/constants/nav-items";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <FloatingNav navItems={navItems} />

      <section id="#">
        <Hero />
      </section>

      <section className="section-border-divider" id="services">
        <div className="section-container section-padding">
          <Services />
        </div>
      </section>

      <section className="section-border-divider" id="experience">
        <div className="section-container section-padding">
          <Experience />
        </div>
      </section>

      <section className="section-border-divider" id="projects">
        <div className="section-container section-padding">
          <Projects />
        </div>
      </section>

      <section className="section-border-divider" id="contact">
        <div className="section-container section-padding">
          <Contact />
        </div>
      </section>
    </div>
  );
}
