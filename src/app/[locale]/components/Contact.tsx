import { useTranslations } from "next-intl";
import { Briefcase, Code2, Mail, Phone } from "lucide-react";
import { SectionLabel } from "./ui";

const EMAIL = "luisrtoniati@gmail.com";

const channels = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, Icon: Mail },
  {
    label: "GitHub",
    value: "@luisrenato02",
    href: "https://github.com/luisrenato02",
    Icon: Code2,
  },
  {
    label: "LinkedIn",
    value: "@luis-renato-toniati",
    href: "https://www.linkedin.com/in/luis-renato-toniati/",
    Icon: Briefcase,
  },
  {
    label: "WhatsApp",
    value: "+55 (19) 99745-9187",
    href: "https://wa.me/+5519997459187",
    Icon: Phone,
  },
];

export const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <section
      id="contato"
      className="pt-[72px] md:pt-[120px] pb-16 md:pb-24 flex flex-col gap-8 md:gap-12"
    >
      <div className="flex flex-col gap-4 md:gap-5">
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="text-[34px] md:text-[64px] leading-[1.05] md:leading-[1.02] tracking-[-0.035em] font-semibold max-w-[820px]">
          {t("title")}
        </h2>
        <a
          href={`mailto:${EMAIL}`}
          className="self-start text-lg md:text-2xl text-accent border-b border-accent pb-1 break-all"
        >
          {EMAIL}
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3 md:gap-4">
        {channels.map(({ label, value, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="flex flex-col gap-5 p-6 border border-edge rounded-2xl bg-surface transition-colors hover:border-edge-hover"
          >
            <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
            <span className="flex flex-col gap-1">
              <span className="font-mono text-xs text-muted">{label}</span>
              <span className="text-[15px]">{value}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export const Footer = () => {
  const t = useTranslations("Contact");
  return (
    <footer className="border-t border-line">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-7 flex flex-wrap justify-between gap-3 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} Luís Renato Toniati</span>
        <a
          href="https://github.com/luisrenato02/lr-portifolio"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          {t("source")} ↗
        </a>
      </div>
    </footer>
  );
};
