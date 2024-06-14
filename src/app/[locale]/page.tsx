import { useTranslations } from "next-intl";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import Footer from "./components/Footer";
import { TabsAbout } from "./components/TabsAbout";
import { Certifications } from "./components/Certifications";
import { Projects } from "./components/Projects";
import { ButtonToTop } from "./components/ButtonToTop";
import { motion } from "framer-motion";

export default function Home() {
  const t = useTranslations("Contact");

  return (
    <>
      <Navbar />
      <main>
        <About />
        <TabsAbout />
        <Certifications />

        <Projects />
        <h2 className="text-xl flex place-content-center mb-4 font-bold">
          {t("title")}
        </h2>
      </main>
      <Footer />
      <ButtonToTop />
    </>
  );
}
