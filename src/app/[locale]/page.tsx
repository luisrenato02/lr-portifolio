import { useTranslations } from "next-intl";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <Navbar />
      <main>
        <About />
      </main>
    </>
  );
}
