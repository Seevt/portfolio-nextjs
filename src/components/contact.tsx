import LinkedIn from "@/components/icons/linkedin";
import Mail from "@/components/icons/mail";
import Phone from "@/components/icons/phone";
import GitHub from "@/components/icons/github";

type SocialIcon = Record<string, string | any>;

import { useTranslations } from "next-intl";

function Contact() {
  const t = useTranslations("basics");

  const SOCIAL_ICONS: SocialIcon = {
    GitHub,
    LinkedIn
  };
  return (
    <>
      <ul className="flex gap-1">
        <li className="border-outline-color flex cursor-pointer rounded-[0.25rem] border transition-colors hover:bg-zinc-600/40">
          <a
            className="p-2"
            href={`mailto:${t("email")}`}
            title={`Enviar un correo electrónico a ${t("name")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail />
          </a>
        </li>

        <li className="border-outline-color flex cursor-pointer rounded-[0.25rem] border transition-colors hover:bg-zinc-600/40">
          <a
            className="p-2"
            href={`tel:${t("phone")}`}
            title={`Llamar a ${t("name")}`}
          >
            <Phone />
          </a>
        </li>
        {t.raw("profiles").map((profile: any, index: number) => {
          const Icon = SOCIAL_ICONS[profile.network];

          return (
            <li
              className="border-outline-color flex cursor-pointer rounded-[0.25rem] border transition-colors hover:bg-zinc-600/40"
              key={index}
            >
              <a
                href={profile.url}
                title={`Visitar el perfin de ${profile.username} en ${profile.network}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Contact;
