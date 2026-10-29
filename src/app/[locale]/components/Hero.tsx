import Image from "next/image";
import { useTranslations } from "next-intl";
import { Download, MessageCircle } from "lucide-react";
import photo from "../../../../public/LuisRenato.jpeg";
import { Typewriter } from "./Typewriter";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section className="pt-10 pb-12 md:pt-24 md:pb-20 flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
      <div className="md:order-last md:flex-[1_1_320px] flex justify-center">
        <div className="relative w-full md:w-[360px] max-w-full">
          <div className="aspect-square rounded-[28px] md:rounded-[32px] overflow-hidden border border-edge bg-surface">
            <Image
              src={photo}
              alt={t("photoAlt")}
              priority
              placeholder="blur"
              sizes="(min-width: 768px) 360px, 100vw"
              className="w-full h-full object-cover object-[50%_42%]"
            />
          </div>
          <div className="hidden md:flex absolute -left-6 bottom-7 flex-col gap-1 px-[18px] py-3.5 bg-surface border border-edge-strong rounded-2xl">
            <span className="font-mono text-[11px] text-muted uppercase tracking-[0.08em]">
              {t("currently")}
            </span>
            <span className="text-[15px] font-semibold">
              {t("currentRole")}
            </span>
          </div>
        </div>
      </div>

      <div className="md:flex-[999_1_560px] min-w-0 flex flex-col gap-6 md:gap-7">
        <div className="inline-flex self-start items-center gap-2.5 px-3.5 py-2 border border-edge rounded-full text-[13px] text-soft">
          <span className="w-2 h-2 rounded-full bg-accent" />
          {t("status")}
        </div>
        <div className="flex flex-col gap-3 md:gap-4">
          <p className="font-mono text-[13px] md:text-sm text-muted">
            <Typewriter text={t("hello")} />
          </p>
          <h1 className="text-[38px] md:text-[64px] leading-[1.05] md:leading-[1.02] tracking-[-0.035em] font-semibold">
            {t("title")} <span className="text-accent">{t("titleAccent")}</span>
            .
          </h1>
        </div>
        <p className="max-w-[620px] text-base md:text-lg leading-relaxed text-muted">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
          <a
            href="https://wa.me/+5519997459187"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 rounded-xl bg-accent text-ink font-semibold text-[15px] hover:brightness-110 transition"
          >
            <MessageCircle size={18} aria-hidden="true" />
            {t("talk")}
          </a>
          <a
            href="/Curriculo2026.pdf"
            download
            className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 rounded-xl border border-edge-strong font-medium text-[15px] hover:border-edge-hover transition-colors"
          >
            <Download size={18} aria-hidden="true" />
            {t("cv")}
          </a>
        </div>
      </div>
    </section>
  );
};
