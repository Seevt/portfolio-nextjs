"use client";

import { locales, type Locale } from "@/config";

import { usePathname, useRouter } from "@/navigation";

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  // `pathname` will contain the current
  // route without the locale e.g. `/about`...
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (sentLocale: Locale) => {
    const newLocale = sentLocale as Locale;

    // ...if the user chose Arabic ("ar-eg"),
    // router.replace() will prefix the pathname
    // with this `newLocale`, effectively changing
    // languages by navigating to `/ar-eg/about`.
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div>
      {/* <select value={locale} onChange={changeLocale} className="...">
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select> */}

      <ul
        // gap must be minor than outer radius or viceversa
        style={
          {
            "--gap": "0.55rem",
            "--outer-radius": "0.375rem"
          } as React.CSSProperties
        }
        className="border-outline-color fixed right-4 top-4 z-10 flex rounded-[--outer-radius] border p-[--gap] backdrop-blur-md max-md:[--gap:0.3rem_!important] max-md:[--outer-radius:0.1rem_!important]"
      >
        {locales.map((loc) => (
          <li
            className={`${locale === loc ? "rounded-[calc(var(--gap)_-_var(--outer-radius))] border border-zinc-700 bg-black-primary" : "border border-transparent"} text-md cursor-pointer px-4 py-2 font-light uppercase transition-all max-md:px-3 max-md:py-1`}
            key={loc}
            onClick={() => changeLocale(loc)}
            value={loc}
          >
            {loc}
          </li>
        ))}
      </ul>
    </div>
  );
}

// after:[&:not(:last-child)]:mx-2 after:[&:not(:last-child)]:content-['|']
