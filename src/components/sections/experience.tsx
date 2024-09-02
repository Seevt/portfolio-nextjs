import { useTranslations } from "next-intl";

function Experience() {
  const t = useTranslations("experience");
  return (
    <>
      <h2 className="heading-2-humane text-fluid-4xl">{t("title")}</h2>
      <ul className="mt-2 space-y-10 pr-4 max-md:pr-0">
        {t
          .raw("jobs")
          .map(
            ({
              position,
              company,
              endDate,
              startDate,
              stillWorking,
              summary
            }: {
              position: string;
              company: string;
              endDate: string;
              startDate: string;
              stillWorking: boolean;
              summary: { main: string; extra: { bullet_points: string[] } };
            }) => (
              <li key={company}>
                <article>
                  <header className="mb-1 flex items-center justify-between">
                    <h3 className="heading-3-geist text-fluid-md">
                      {position}
                    </h3>

                    <div className="flex w-fit flex-wrap items-center justify-end gap-2 *:text-xs">
                      <time
                        className="rounded-custom border-outline-color border px-4 py-1"
                        dateTime={startDate}
                      >
                        {startDate}
                      </time>
                      {stillWorking ? (
                        <span className="rounded-custom border-outline-color border px-4 py-1">
                          {stillWorking}
                        </span>
                      ) : (
                        <time
                          className="rounded-custom border-outline-color border px-4 py-1"
                          dateTime={endDate}
                        >
                          {endDate}
                        </time>
                      )}
                    </div>
                  </header>
                  <h4 className="mb-4 text-sm font-medium uppercase">
                    {company}
                  </h4>
                  <div className="space-y-3 font-light">
                    <p>{summary.main}</p>
                    <ul className="grid list-outside list-[square] flex-col gap-4">
                      {summary.extra.bullet_points.map((item: string) => (
                        <li className="ml-8" key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            )
          )}
      </ul>
    </>
  );
}

export default Experience;
