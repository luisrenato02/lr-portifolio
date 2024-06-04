import { useTranslations } from "next-intl";
import { Navbar } from "./components/Navbar";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <Navbar />
      <main>
        <div className="h-[2000px]"></div>
        <h1 className="bg-red-500 dark:bg-blue-500">{t("title")}</h1>
      </main>
    </>
  );
}
