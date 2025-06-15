import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>

      <Hero />

      <section className="section-border-divider">
        <div className="section-container section-padding">
          <Experience />
        </div>
      </section>

      <section className="section-border-divider">
        <div className="section-container section-padding">
          <Projects />
        </div>
      </section>

      <section className="section-border-divider">
        <div className="section-container section-padding">
          <Contact />
        </div>
      </section>
    </div>
  );
}
