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
    title: "Luís Renato Toniati(@luistoniati02)",
    description: "FullStack / Brazil / luisrtoniati@gmail.com",
    url: "",
    siteName: "Luís Renato - Portfólio",
    images: [
      {
        url: "https://og-playground.vercel.app/?share=xVRLjtswDL2KoFULRLWbZIrUSGdTzK5FgSLLbGSLjjXRx7DoOsFgDtMD9BRzsVJRPs4gGHTXhS3Sen4kHyk98cor4AXPMvbdK11rUKyUgd7esQaxDUWWodRm0E71-kPlbUZP6x04DJmV3RZQu00WoELtXcgqlOLkrN3aLZX-xXD4sua1gR2LL1F5wwZR98awJi0awQZRESl07LEPqOv9yS03YmgIsOb3a8fYhZA2Np3ci7v8QHukPMLGwOvIVhUHu_PDKYt2Lz5OWbsT87h7M5kScABwrBWLcwSK0UxvhUDYoZjtDAu2ONhzsmvvUJTeKIadrLakmkC9aTChg5EI4nOeJ9dAjaM4FCm00t3_MC-_J8wCqxpp_TI7fHwFSgkl0u1ezPKciL71L38C-wlOomcr77RE_er3ZdZML85ZPItikfQlaciJbKOI1yJ3vncKlLCKhUYqP1yBCS5H4LeaPiIqfafiGBwWQdo5SrsjWJyMJNsnko26dxcbOUsCxilOkltQurfp62mQvnrXQAXdMpPjYjKq5mZx1hDvf6ow9fDf6jtPEWX14IipY2BZRTDq-1vFjr2LfbLSyifct4eDzYsnPmiFDS8WeT7hDcRB5sU8OgrKfsOLWpoAEw7WP-rVvo23DJ2g6BFPTPzBlqB4gV0PzxOOsiTE6njVsHewa6HTlkSQ5j1__gs",
        width: 800,
        height: 400,
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
