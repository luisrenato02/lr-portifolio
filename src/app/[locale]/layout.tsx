import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Luís Renato Toniati(@luistoniati02)",
    absolute: "Luís Renato Toniati(@luistoniati02)",
  },
  description: "Portfolio de Luís Renato Toniati(@luistoniati02)",
  openGraph: {
    title: "Luís Renato Toniati",
    description: "FullStack / Developer / Brazil / luisrtoniati@gmail.com",
    url: "https://www.luisrenatodev.com",
    siteName: "Luís Renato - Portfólio",
    images: [
      {
        url: "https://i.imgur.com/6woKyaW.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <html lang="pt">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
