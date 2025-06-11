import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>

      <Hero />

      <section className="section-border-divider">
        <div className="section-container section-padding">
          <Projects />
        </div>
      </section>

    </div>
  );
}
