import { useTranslations } from "next-intl";

const groups = [
  {
    key: "languages",
    items: "TypeScript · JavaScript · Go · Dart · Python · SQL · PHP",
  },
  {
    key: "frontend",
    items:
      "React · Next.js · React Native · Expo · Flutter · Electron · Tailwind CSS",
  },
  {
    key: "backend",
    items: "Node.js · Express · Go (Fiber) · PostgreSQL · Prisma · Redis",
  },
  {
    key: "integrations",
    items: "Stripe · Pix · Gemini / OpenAI · WebSockets · SSE · Webhooks",
  },
  {
    key: "quality",
    items: "Jest · Vitest · Playwright · Sentry · Docker · GitHub Actions",
  },
] as const;

export const Stack = () => {
  const t = useTranslations("Stack");
  return (
    <section
      aria-label="Stack"
      className="border-y border-line py-6 md:py-8 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[18px] md:gap-x-8 md:gap-y-7"
    >
      {groups.map(({ key, items }) => (
        <div key={key} className="flex flex-col gap-1.5 md:gap-2.5">
          <h2 className="font-mono text-[11px] md:text-xs font-medium text-accent uppercase tracking-[0.08em]">
            {t(key)}
          </h2>
          <p className="text-sm leading-relaxed text-soft">{items}</p>
        </div>
      ))}
    </section>
  );
};
