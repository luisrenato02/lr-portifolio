import { useTranslations } from "next-intl";
import { SelectTab } from "./SelectTab";

export const Expirience = () => {
  const t = useTranslations("Tabs");
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 z-0">
      <SelectTab
        date={t("experience1.date")}
        title={t("experience1.title")}
        description={t("experience1.description")}
      />

      <SelectTab
        date={t("experience2.date")}
        title={t("experience2.title")}
        description={t("experience2.description")}
      />
      <SelectTab
        date={t("experience3.date")}
        title={t("experience3.title")}
        description={t("experience3.description")}
      />
      <SelectTab
        date={t("experience4.date")}
        title={t("experience4.title")}
        description={t("experience4.description")}
      />
    </ol>
  );
};
