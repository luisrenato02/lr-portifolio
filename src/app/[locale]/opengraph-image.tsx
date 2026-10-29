import { ImageResponse } from "next/og";
import pt from "../../../messages/pt.json";
import en from "../../../messages/en.json";

// Social preview (WhatsApp, LinkedIn, Discord…) generated in the site's own
// look, so it never depends on an external image host.
export const runtime = "edge";
export const alt = "Luís Renato Toniati — Portfólio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: { locale: string };
}) {
  const { Hero } = params.locale === "pt" ? pt : en;
  const photoSrc = await fetch(
    new URL("../../../public/LuisRenato.jpeg", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 80px",
          background: "#0B0C0E",
          backgroundImage:
            "radial-gradient(circle at 85% 10%, rgba(182,242,62,0.16), transparent 50%)",
          color: "#EDEDEF",
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 24,
              color: "#C9CBD1",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 9999,
                background: "#B6F23E",
              }}
            />
            {Hero.status}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Luís Renato Toniati
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 32,
              lineHeight: 1.3,
              color: "#A1A3AB",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {/* Gap as margin on the left part, so a wrapped accent starts flush */}
            <span style={{ marginRight: 9 }}>{Hero.title}</span>
            <span style={{ color: "#B6F23E" }}>{Hero.titleAccent}</span>.
          </div>
          <div
            style={{
              marginTop: 36,
              fontSize: 24,
              color: "#B6F23E",
            }}
          >
            lr-portifolio.vercel.app
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          // Satori accepts the raw image bytes directly
          src={photoSrc as unknown as string}
          width={340}
          height={340}
          alt=""
          style={{
            borderRadius: 32,
            border: "2px solid #24262C",
            objectFit: "cover",
          }}
        />
      </div>
    ),
    size,
  );
}
