import LinkedIn from "@/components/icons/linkedin";
import Mail from "@/components/icons/mail";
import Phone from "@/components/icons/phone";
import GitHub from "@/components/icons/github";
import Download from "./icons/download";

type SocialIcon = Record<string, string | any>;

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

function Contact() {
  const t = useTranslations("basics");

  const SOCIAL_ICONS: SocialIcon = {
    GitHub,
    LinkedIn
  };

  const locale = useLocale();

  const portfolio_urls: Record<string, string> = {
    es: "https://utfs.io/f/81268c31-96b6-4b0d-8eb8-4c7c3d78f03d-4oiok8.pdf",
    en: "https://utfs.io/f/449fafa6-3002-499e-9413-cdb43d42c286-sfjao.pdf"
  };

  return (
    <>
      <ul className="flex gap-1">
        <li className="flex cursor-pointer rounded-[0.25rem] border border-outline-color transition-colors hover:bg-zinc-600/40">
          <a
            className="p-2"
            href={`mailto:${t("email")}`}
            title={t("contact_tooltips.mail")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail />
          </a>
        </li>

        <li className="flex cursor-pointer rounded-[0.25rem] border border-outline-color transition-colors hover:bg-zinc-600/40">
          <a
            className="p-2"
            href={`tel:${t("phone")}`}
            title={t("contact_tooltips.phone")}
          >
            <Phone />
          </a>
        </li>
        {t.raw("profiles").map((profile: any, index: number) => {
          const Icon = SOCIAL_ICONS[profile.network];

          return (
            <li
              className="flex cursor-pointer rounded-[0.25rem] border border-outline-color transition-colors hover:bg-zinc-600/40"
              key={index}
            >
              <a
                href={profile.url}
                title={t(`contact_tooltips.${profile.network}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
              >
                <Icon />
              </a>
            </li>
          );
        })}
        <li className="flex cursor-pointer rounded-[0.25rem] border border-outline-color transition-colors hover:bg-zinc-600/40">
          <a
            href={portfolio_urls[locale]}
            title={t("contact_tooltips.download")}
            target="_blank"
            className="p-2"
            download
          >
            <Download />
          </a>
        </li>
      </ul>
    </>
  );
}

export default Contact;
