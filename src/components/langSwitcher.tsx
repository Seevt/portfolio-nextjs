"use client";

import { usePathname, useRouter } from "@/navigation";
import { locales, type Locale } from "@/config";

import { useOptimistic, useTransition } from "react";

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  /* `pathname` will contain the current
  route without the locale e.g. `/about`... */
  // routing
  const pathname = usePathname();
  const router = useRouter();

  // ux
  const [isPending, startTransition] = useTransition();
  const [optimisticLocale, setOptimisticLocale] = useOptimistic(locale);

  const changeLocale = (sentLocale: Locale) => {
    const newLocale = sentLocale as Locale;

    startTransition(() => {
      setOptimisticLocale(newLocale);
      // ...if the user chose Arabic ("ar-eg"),
      // router.replace() will prefix the pathname
      // with this `newLocale`, effectively changing
      // languages by navigating to `/ar-eg/about`.
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div>
      <ul
        // gap must be minor than outer radius or viceversa
        style={
          {
            "--gap": "0.55rem",
            "--outer-radius": "0.375rem"
          } as React.CSSProperties
        }
        className="fixed right-4 top-4 z-10 flex rounded-[--outer-radius] border border-outline-color p-[--gap] backdrop-blur-md max-md:[--gap:0.3rem_!important] max-md:[--outer-radius:0.1rem_!important]"
      >
        {locales.map((loc) => (
          <li
            className={`${optimisticLocale === loc ? "rounded-[calc(var(--gap)_-_var(--outer-radius))] border border-zinc-700 bg-black-primary" : "border border-transparent"} ${isPending && optimisticLocale === loc ? "opacity-40" : ""} text-md cursor-pointer px-4 py-2 font-light uppercase transition-all max-md:px-3 max-md:py-1`}
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
