import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations("basics.about");

  return (
    <>
      <div className="center relative">
        {/* <div className="absolute left-0 top-0 h-6 w-6 border border-b-0 border-l border-r-0 border-t border-outline-color"></div> */}
        <p className="text-fluid-base p-6 font-geist font-light">
          {t("summary")}
        </p>
        {/* <div className="absolute bottom-0 right-0 h-6 w-6 border border-b border-l-0 border-r border-t-0 border-outline-color"></div> */}
      </div>
    </>
  );
}
{
  /* [mask-image:radial-gradient(circle_at_top,hsl(0,0%,12%)_50%_,transparent_90%)] */
}

export default About;
