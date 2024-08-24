import Image from "next/image";
import ProfilePic from "@/assets/images/fotocarne.png";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Worldmap from "@/components/icons/worldmap";
import About from "@/components/about";

import { useTranslations } from "next-intl";

import Contact from "@/components/contact";

export default function Home() {
  const t = useTranslations("basics");

  return (
    <>
      <header className="relative isolate flex min-h-[60svh] flex-col space-y-6 overflow-x-hidden bg-black-secondary pt-16">
        <div className="hero-content center box-wrapper flex h-full w-full flex-col justify-between space-y-4">
          <div className="flex justify-between">
            <div>
              <h1 className="heading-1-humane text-fluid-6xl h-fit leading-[1]">
                {t("name")}
              </h1>
              <h2 className="heading-2-geist text-fluid-lg max-md:text-fluid-md">
                {t("label")}
              </h2>

              <div className="flex h-fit items-center gap-2 space-y-4">
                <Worldmap className="mt-4 size-4 font-thin text-[hsl(0,0%,70%)]" />
                <address className="cursor-pointer text-sm font-extralight text-[hsl(0,0%,70%)] transition-all hover:underline">
                  <p>
                    {t("location.city")}, {t("location.region")}
                  </p>
                </address>
              </div>
            </div>
            <picture className="h-fit">
              <Image
                className="border-outline-color size-32 rounded-full border object-cover max-md:hidden"
                src={ProfilePic}
                alt="Picture of Author"
                width={100}
                height={100}
              />
            </picture>
          </div>

          <Contact />
        </div>
        <div className="divider layer"></div>
        <div className="stars absolute inset-0 z-[-2]"></div>
        <div className="stars absolute inset-x-full inset-y-0 z-[-2]"></div>

        <About />
      </header>
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
    </>
  );
}
