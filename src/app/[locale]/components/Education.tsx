"use client";
import { useState } from "react";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { SectionLabel, SectionTitle } from "./ui";
import { CertificateModal } from "./CertificateModal";
import solucoes from "../../../../public/solucoes.png";
import redes from "../../../../public/redes.png";
import programacao from "../../../../public/programação.png";
import infra from "../../../../public/infra.png";
import desenModelagem from "../../../../public/desenModelagem.png";
import desenSoftware from "../../../../public/desenSoftware.png";
import logicaGeek from "../../../../public/logicaGeek.png";
import js from "../../../../public/js.png";
import sql from "../../../../public/sql.png";
import html from "../../../../public/html.png";
import ingles from "../../../../public/ingles.png";

const certs = [
  { key: "solutions", image: solucoes },
  { key: "networks", image: redes },
  { key: "programming", image: programacao },
  { key: "infra", image: infra },
  { key: "modeling", image: desenModelagem },
  { key: "software", image: desenSoftware },
];

const courses = [
  { key: "logic", school: "Geek University", image: logicaGeek },
  { key: "js", school: "Curso em Vídeo", image: js },
  { key: "sql", school: "Curso em Vídeo", image: sql },
  { key: "html", school: "Curso em Vídeo", image: html },
  { key: "english", school: "Curso em Vídeo", image: ingles },
];

const rowButton =
  "w-full flex justify-between items-center gap-4 min-h-[52px] py-2 border-t border-line text-left text-[15px] md:text-base hover:text-white";

const Arrow = () => (
  <span aria-hidden="true" className="text-muted">
    ↗
  </span>
);

const ListTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-2 font-mono text-[13px] font-medium text-muted">
    {children}
  </h3>
);

export const Education = () => {
  const t = useTranslations("Education");
  const [selected, setSelected] = useState<{
    title: string;
    image: StaticImageData;
  } | null>(null);

  return (
    <section
      id="formacao"
      className="pt-[72px] md:pt-[120px] md:pb-10 flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-12"
    >
      <div className="md:flex-[1_1_360px] flex flex-col gap-4 md:gap-6">
        <SectionLabel>{t("label")}</SectionLabel>
        <SectionTitle>{t("title")}</SectionTitle>
        <div className="p-6 md:p-7 border border-edge rounded-[20px] bg-surface flex flex-col gap-2.5">
          <span className="font-mono text-xs text-muted uppercase tracking-[0.08em]">
            {t("degreeLabel")}
          </span>
          <h3 className="text-xl md:text-[22px] font-semibold tracking-[-0.02em] leading-tight">
            {t("degree")}
          </h3>
          <p className="text-[15px] text-muted">{t("university")}</p>
        </div>
      </div>

      <div className="md:flex-[999_1_560px] min-w-0 flex flex-col gap-8">
        <div className="flex flex-col">
          <ListTitle>{t("certsTitle")}</ListTitle>
          {certs.map(({ key, image }) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelected({ title: t(`certs.${key}`), image })}
              className={rowButton}
            >
              {t(`certs.${key}`)}
              <Arrow />
            </button>
          ))}
        </div>
        <div className="flex flex-col">
          <ListTitle>{t("coursesTitle")}</ListTitle>
          {courses.map(({ key, school, image }, i) => (
            <button
              key={key}
              type="button"
              onClick={() =>
                setSelected({ title: `${t(`courses.${key}`)} · ${school}`, image })
              }
              className={`${rowButton} ${
                i === courses.length - 1 ? "border-b" : ""
              }`}
            >
              <span>
                {t(`courses.${key}`)}{" "}
                <span className="text-muted">· {school}</span>
              </span>
              <Arrow />
            </button>
          ))}
        </div>
      </div>

      <CertificateModal
        title={selected?.title ?? null}
        image={selected?.image ?? null}
        alt={t("certificateAlt", { name: selected?.title ?? "" })}
        closeLabel={t("close")}
        onClose={() => setSelected(null)}
      />
    </section>
  );
};
