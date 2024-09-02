import { useTranslations } from "next-intl";

interface EducationItem {
  institution: string;
  url: string;
  area: string;
  endDate: string;
}

interface CertificatesItem {
  name: string;
  url: string;
  issuer: string;
  date: string;
}

function Education() {
  const t = useTranslations("education");
  return (
    <>
      <h2 className="heading-2-humane text-fluid-4xl">{t("title")}</h2>
      <ul className="space-y-4">
        {t.raw("list").map((item: EducationItem) => {
          return (
            <li key={item.area}>
              <article className="space-y-2 max-md:space-y-3">
                <header className="flex items-center justify-between">
                  <h3 className="heading-3-geist text-fluid-md max-md:text-fluid-base">
                    <a
                      className="url"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.institution}
                    </a>
                  </h3>
                  <time
                    className="rounded-custom border-outline-color self-start border px-4 py-1 text-xs"
                    dateTime={item.endDate}
                  >
                    {item.endDate}
                  </time>
                </header>
                <h4 className="font-light">{item.area}</h4>
              </article>
            </li>
          );
        })}
      </ul>
      <Certificates />
    </>
  );
}

function Certificates() {
  const t = useTranslations("certificates");

  return (
    <>
      <ul className="mt-4 space-y-4">
        {t.raw("list").map((item: CertificatesItem) => {
          return (
            <li key={item.name}>
              <article className="space-y-2 max-md:space-y-3">
                <header className="flex items-center justify-between">
                  <h3 className="heading-3-geist text-fluid-md max-md:text-fluid-base">
                    <a
                      className="url"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.issuer}
                    </a>
                  </h3>
                  <time
                    className="rounded-custom border-outline-color self-start border px-4 py-1 text-xs"
                    dateTime={item.date}
                  >
                    {item.date}
                  </time>
                </header>
                <h4 className="font-light">{item.name}</h4>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Education;
