import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import { Metadata } from "next";

// The social preview image comes from ./opengraph-image.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://lr-portifolio.vercel.app"),
  title: {
    template: "Luís Renato Toniati(@luistoniati02)",
    absolute: "Luís Renato Toniati(@luistoniati02)",
  },
  description: "Portfolio de Luís Renato Toniati(@luistoniati02)",
  openGraph: {
    title: "Luís Renato Toniati",
    description:
      "Desenvolvedor full stack · React, TypeScript, Node.js, Go e Flutter · luisrtoniati@gmail.com",
    url: "https://lr-portifolio.vercel.app/pt",
    siteName: "Luís Renato - Portfólio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale === "pt" ? "pt-BR" : "en"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
