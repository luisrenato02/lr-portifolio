import { useTranslations } from "next-intl";
import { ArrowUpRight, SectionLabel, SectionTitle, TagList } from "./ui";

// Every card uses a typographic cover (kind + name) instead of a screenshot
interface ProjectData {
  key: string;
  name: string;
  tags: string[];
  wide: boolean;
  tall?: boolean;
  github?: string;
  demo?: string;
  post?: string;
}

const projects: ProjectData[] = [
  {
    key: "agentLuck",
    name: "AgentLuck",
    tags: ["Electron", "Svelte", "Node.js", "Gemini", "Redis", "Sentry"],
    wide: true,
    tall: true,
  },
  {
    key: "menuluck",
    name: "MenuLuck 2.0",
    tags: ["React", "TypeScript", "TanStack Query", "SSE", "Jest"],
    wide: false,
    tall: true,
  },
  {
    key: "deliveryZones",
    name: "Delivery Zones",
    tags: ["React", "TypeScript", "Google Maps", "Places API"],
    wide: false,
    post: "https://www.linkedin.com/feed/update/urn:li:activity:7425347592320045057/",
  },
  {
    key: "infoluckErp",
    name: "Infoluck ERP",
    tags: ["React 19", "Zustand", "Vitest", "Go", "Fiber", "PostgreSQL"],
    wide: true,
  },
  {
    key: "kiosk",
    name: "Totem & KDS",
    tags: ["Flutter", "React Native", "WebSockets", "POS"],
    wide: true,
  },
  {
    key: "timerRodeo",
    name: "Timer Rodeo",
    tags: ["Flutter", "Dart", "WebSockets"],
    wide: false,
  },
  {
    key: "infoluckWeb",
    name: "Infoluck Web",
    tags: ["React", "TypeScript", "TanStack Query", "Jest", "Mantine"],
    wide: true,
  },
  {
    key: "lrStore",
    name: "Lr Store",
    tags: ["Next.js", "Prisma", "Stripe", "Tailwind"],
    wide: false,
    github: "https://github.com/luisrenato02/FSW-Store",
  },
  {
    key: "portal",
    name: "Portal Infoluck",
    tags: ["React", "TypeScript", "Axios", "Mantine"],
    wide: true,
  },
];

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-1.5 min-h-[44px] hover:text-white"
  >
    {children} <ArrowUpRight />
  </a>
);

export const Projects = () => {
  const t = useTranslations("Projects");
  return (
    <section
      id="projetos"
      className="pt-[72px] md:pt-[120px] md:pb-10 flex flex-col gap-6 md:gap-12"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-4 max-w-[640px]">
          <SectionLabel>{t("label")}</SectionLabel>
          <SectionTitle>{t("title")}</SectionTitle>
        </div>
        <a
          href="https://github.com/luisrenato02"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-soft hover:text-white"
        >
          {t("viewAll")}
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-5">
        {projects.map((p) => (
          <article
            key={p.key}
            className={`${
              p.wide ? "md:flex-[2_1_520px]" : "md:flex-[1_1_300px]"
            } w-full md:w-auto min-w-0 flex flex-col border border-edge rounded-[18px] md:rounded-[20px] bg-surface overflow-hidden transition-colors hover:border-edge-hover`}
          >
            <div
              className={`relative h-[180px] ${
                p.tall ? "md:h-[280px]" : "md:h-[220px]"
              } bg-[#16171B] border-b border-edge`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 flex flex-col justify-end gap-2 p-6 md:p-8 bg-[radial-gradient(circle_at_85%_15%,rgba(182,242,62,0.14),transparent_55%)]"
              >
                <span className="font-mono text-[11px] md:text-xs text-accent uppercase tracking-[0.08em]">
                  {t(`${p.key}.kind`)}
                </span>
                <span className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-fg">
                  {p.name}
                </span>
              </div>
            </div>
            <div className="p-5 md:p-6 flex flex-col gap-2.5 md:gap-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl md:text-[22px] font-semibold tracking-[-0.02em]">
                  {p.name}
                </h3>
                <span className="hidden sm:block font-mono text-xs text-muted text-right">
                  {t(`${p.key}.kind`)}
                </span>
              </div>
              <p className="text-[15px] leading-relaxed text-muted">
                {t(`${p.key}.description`)}
              </p>
              <TagList tags={p.tags} />
              {(p.github || p.demo || p.post) && (
                <div className="flex gap-5 pt-1 text-sm">
                  {p.github && (
                    <ExternalLink href={p.github}>{t("repository")}</ExternalLink>
                  )}
                  {p.demo && (
                    <ExternalLink href={p.demo}>{t("demo")}</ExternalLink>
                  )}
                  {p.post && (
                    <ExternalLink href={p.post}>{t("post")}</ExternalLink>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
