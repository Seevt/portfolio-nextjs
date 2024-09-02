import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Projects from "@/components/sections/projects";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="center">
        <div className="box-wrapper space-y-8">
          <section>
            <Skills />
          </section>
          <section>
            <Experience />
          </section>
          <section>
            <Projects />
          </section>
          <section>
            <Education />
          </section>
        </div>
      </div>
    </div>
  );
}
