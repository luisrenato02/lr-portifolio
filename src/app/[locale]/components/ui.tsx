export const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2.5 py-1 border border-edge-strong rounded-full">
    {children}
  </span>
);

export const TagList = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2 font-mono text-xs text-soft">
    {tags.map((tag) => (
      <Tag key={tag}>{tag}</Tag>
    ))}
  </div>
);

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="font-mono text-xs md:text-[13px] text-accent">
    {children}
  </span>
);

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="m-0 text-3xl md:text-[40px] leading-[1.1] tracking-[-0.03em] font-semibold">
    {children}
  </h2>
);

export const ArrowUpRight = ({ size = 14 }: { size?: number }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);
