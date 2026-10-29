"use client";
import { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";

const sections = ["experience", "projects", "education", "contact"] as const;
const anchors: Record<(typeof sections)[number], string> = {
  experience: "#experiencia",
  projects: "#projetos",
  education: "#formacao",
  contact: "#contato",
};

const LanguageSwitch = () => {
  const t = useTranslations("Nav");
  const locale = useLocale();
  return (
    <div
      role="group"
      aria-label={t("language")}
      className="flex p-[3px] border border-edge rounded-full font-mono text-xs"
    >
      {(["pt", "en"] as const).map((lang) => (
        <Link
          key={lang}
          href={`/${lang}`}
          aria-current={locale === lang ? "true" : undefined}
          className={`min-w-[44px] h-8 flex items-center justify-center rounded-full uppercase transition-colors ${
            locale === lang
              ? "bg-fg text-ink"
              : "text-muted hover:text-white"
          }`}
        >
          {lang}
        </Link>
      ))}
    </div>
  );
};

export const Header = () => {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/90 backdrop-blur">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-4 md:py-5 flex items-center justify-between gap-4">
        <a href="#topo" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-[10px] bg-accent text-ink flex items-center justify-center font-mono font-medium text-sm">
            LR
          </span>
          <span className="font-semibold text-[15px] tracking-[-0.01em]">
            Luís Renato
          </span>
        </a>

        <nav
          aria-label="Principal"
          className="hidden md:flex items-center gap-7 text-sm"
        >
          {sections.map((key) => (
            <a
              key={key}
              href={anchors[key]}
              className="text-muted hover:text-white transition-colors"
            >
              {t(key)}
            </a>
          ))}
          <LanguageSwitch />
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitch />
          <button
            type="button"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="w-11 h-11 border border-edge rounded-full flex items-center justify-center"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line px-5 pb-4 flex flex-col">
          {sections.map((key) => (
            <a
              key={key}
              href={anchors[key]}
              onClick={() => setOpen(false)}
              className="py-3 border-b border-line text-soft hover:text-white"
            >
              {t(key)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
