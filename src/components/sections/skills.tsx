import { useTranslations } from "next-intl";

function Skills() {
  const t = useTranslations("skills");

  return (
    <>
      <div className="relative space-y-4">
        <div className="border-outline-color absolute right-0 top-0 mt-0 h-6 w-6 border border-b-0 border-l-0 border-r border-t"></div>

        <h2 className="heading-2-humane text-fluid-4xl">{t("title")}</h2>
        <ul className="flex flex-wrap items-center justify-start gap-4 font-geist font-medium *:bg-zinc-600/40">
          {t.raw("list").map(({ name }: { name: string }) => (
            <li
              className="rounded-custom border-outline-color cursor-default border px-3 py-1 text-sm font-light capitalize tracking-wide"
              key={name}
            >
              {name}
            </li>
          ))}
        </ul>
        <Languages />
      </div>
    </>
  );
}

function Languages() {
  const t = useTranslations("languages");

  return (
    <>
      <div className="space-y-4">
        <h3 className="heading-3-geist text-fluid-md pt-4">{t("title")}</h3>
        <ul className="grid list-inside list-[square] gap-4 indent-8">
          {t.raw("list").map((item: { language: string; fluency: string }) => (
            <li className="text-lg font-light" key={item.language}>
              {item.language} - {item.fluency}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Skills;
