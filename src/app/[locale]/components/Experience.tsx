import { useTranslations } from "next-intl";
import { SectionLabel, SectionTitle, TagList } from "./ui";

// Jobs without a confirmed role title show only the company, plus an optional note
const jobs = [
  {
    key: "infoluckCurrent",
    tags: ["React", "Node.js", "Go", "Flutter", "Electron", "LLM"],
    hasRole: true,
    hasNote: true,
  },
  {
    key: "build",
    tags: ["React Native", "Google Maps", "Stripe", "POS"],
    hasRole: true,
    hasNote: false,
  },
  {
    key: "infoluckWeb",
    tags: ["React", "TypeScript", "Figma", "PHP", "PostgreSQL"],
    hasRole: true,
    hasNote: false,
  },
  { key: "infoluckIt", tags: [], hasRole: true, hasNote: false },
] as const;

const row =
  "flex flex-col gap-2 md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-6 border-t border-line";

export const Experience = () => {
  const t = useTranslations("Experience");
  return (
    <section
      id="experiencia"
      className="pt-[72px] md:pt-[120px] md:pb-10 flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-12"
    >
      <div className="md:flex-[1_1_280px] flex flex-col gap-4">
        <SectionLabel>{t("label")}</SectionLabel>
        <SectionTitle>{t("title")}</SectionTitle>
        <p className="hidden md:block text-base leading-relaxed text-muted">
          {t("subtitle")}
        </p>
      </div>

      <ol className="md:flex-[999_1_600px] min-w-0 mt-4 md:mt-0 flex flex-col">
        {jobs.map(({ key, tags, hasRole, hasNote }) => (
          <li key={key} className={`${row} py-[22px] md:py-7`}>
            <span className="font-mono text-xs md:text-[13px] text-muted md:pt-1">
              {t(`${key}.date`)}
            </span>
            <div className="flex flex-col gap-2.5">
              <h3 className="text-lg md:text-xl font-semibold tracking-[-0.01em]">
                {hasRole ? (
                  <>
                    {t(`${key}.role`)}{" "}
                    <span className="text-muted font-normal">
                      · {t(`${key}.company`)}
                    </span>
                  </>
                ) : (
                  t(`${key}.company`)
                )}
                {hasNote && (
                  <span className="text-muted font-normal">
                    {" "}
                    · {t(`${key}.note`)}
                  </span>
                )}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted">
                {t(`${key}.description`)}
              </p>
              {tags.length > 0 && (
                <div className="pt-1">
                  <TagList tags={[...tags]} />
                </div>
              )}
            </div>
          </li>
        ))}
        <li className={`${row} py-[18px] md:py-5 border-b`}>
          <span className="font-mono text-xs md:text-[13px] text-muted">
            {t("beforeDate")}
          </span>
          <p className="text-sm leading-relaxed text-muted">{t("before")}</p>
        </li>
      </ol>
    </section>
  );
};
