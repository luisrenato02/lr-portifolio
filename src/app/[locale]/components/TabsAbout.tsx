"use client";
import techs from "../../../../public/techs.png";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "./Badge";
import { Education } from "./Education";
import { Expirience } from "./Expirience";
import { useTranslations } from "next-intl";
import { BriefcaseBusiness, GraduationCap, Wrench } from "lucide-react";

export const TabsAbout = () => {
  const t = useTranslations("Tabs");
  const [selectedTab, setSelectedTab] = useState(1);
  const selectClassName = "dark:bg-slate-700 bg-gray-200";
  return (
    <>
      <ul className="mb-5 flex list-none ps-0 w-full justify-around rounded-lg border border-gray-300 dark:border-slate-600 *:text-gray-400 *:dark:text-gray-300 *:rounded-lg dark:hover:*:bg-slate-800 hover:*:bg-gray-100 *:p-1 items-center *:w-full *:h-full *:place-content-center *:flex">
        <li
          className={selectedTab === 1 ? selectClassName : ""}
          onClick={() => setSelectedTab(1)}
        >
          <p className="hidden md:block">{t("expirience")}</p>

          <BriefcaseBusiness className="block md:hidden" />
        </li>
        <li
          className={selectedTab === 2 ? selectClassName : ""}
          onClick={() => setSelectedTab(2)}
        >
          <p className="hidden md:block">{t("skills")}</p>
          <Wrench className="block md:hidden" />
        </li>{" "}
        <li
          className={selectedTab === 3 ? selectClassName : ""}
          onClick={() => setSelectedTab(3)}
        >
          <p className="hidden md:block">{t("education")}</p>
          <GraduationCap className="block md:hidden" />
        </li>
      </ul>

      <div>
        {selectedTab === 1 && <Expirience />}
        {selectedTab === 2 && <Badge />}
        {selectedTab === 3 && <Education />}
      </div>
    </>
  );
};
