import { useTranslations } from "next-intl";
import { SelectTab } from "./SelectTab";

export const Education = () => {
  const t = useTranslations("Tabs");
  return (
    <div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 z-0">
        <SelectTab
          date={t("education1.date")}
          title={t("education1.title")}
          description={t("education1.description")}
        />

        <SelectTab
          date={t("education2.date")}
          title={t("education2.title")}
          description={t("education2.description")}
        />
      </ol>
      <h3 className="text-lg mb-5 font-semibold text-gray-500 ">Courses</h3>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 z-0">
        <SelectTab
          date={t("education3.date")}
          title={t("education3.title")}
          description={t("education3.description")}
        />
        <SelectTab
          date={t("education4.date")}
          title={t("education4.title")}
          description={t("education4.description")}
        />
        <SelectTab
          date={t("education5.date")}
          title={t("education5.title")}
          description={t("education5.description")}
        />
        <SelectTab
          date={t("education6.date")}
          title={t("education6.title")}
          description={t("education6.description")}
        />
        <SelectTab
          date={t("education7.date")}
          title={t("education7.title")}
          description={t("education7.description")}
        />
        <SelectTab
          date={t("education8.date")}
          title={t("education8.title")}
          description={t("education8.description")}
        />
        <SelectTab
          date={t("education9.date")}
          title={t("education9.title")}
          description={t("education9.description")}
        />
        <SelectTab
          date={t("education10.date")}
          title={t("education10.title")}
          description={t("education10.description")}
        />
        <SelectTab
          date={t("education11.date")}
          title={t("education11.title")}
          description={t("education11.description")}
        />
        <SelectTab
          date={t("education12.date")}
          title={t("education12.title")}
          description={t("education12.description")}
        />
        <SelectTab
          date={t("education13.date")}
          title={t("education13.title")}
          description={t("education13.description")}
        />
        <SelectTab
          date={t("education14.date")}
          title={t("education14.title")}
          description={t("education14.description")}
        />

        <SelectTab
          date={t("education15.date")}
          title={t("education15.title")}
          description={t("education15.description")}
        />
      </ol>
    </div>
  );
};
