"use client";
import { useState } from "react";
import { Education } from "./Education";
import { Expirience } from "./Expirience";
import { useTranslations } from "next-intl";
import { BriefcaseBusiness, GraduationCap, Wrench } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Badges } from "./Badges";

export const TabsAbout = () => {
  const t = useTranslations("Tabs");
  const [selectedTab, setSelectedTab] = useState(1);
  const selectClassName = "dark:bg-slate-700 bg-gray-200 cursor-pointer";
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="mb-5 flex list-none ps-0 w-full justify-around rounded-lg border border-gray-300 dark:border-slate-600 *:text-gray-400 *:dark:text-gray-300 *:rounded-lg dark:hover:*:bg-slate-800 hover:*:bg-gray-100 *:p-1 items-center *:w-full *:h-full *:place-content-center *:flex">
        <li
          className={selectedTab === 1 ? selectClassName : "cursor-pointer"}
          onClick={() => setSelectedTab(1)}
        >
          <p className="hidden md:block">{t("expirience")}</p>

          <BriefcaseBusiness className="block md:hidden" />
        </li>
        <li
          className={selectedTab === 2 ? selectClassName : "cursor-pointer"}
          onClick={() => setSelectedTab(2)}
        >
          <p className="hidden md:block">{t("skills")}</p>
          <Wrench className="block md:hidden" />
        </li>{" "}
        <li
          className={selectedTab === 3 ? selectClassName : "cursor-pointer"}
          onClick={() => setSelectedTab(3)}
        >
          <p className="hidden md:block">{t("education")}</p>
          <GraduationCap className="block md:hidden" />
        </li>
      </ul>

      <div>
        {selectedTab === 1 && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Expirience />
            </motion.div>
          </AnimatePresence>
        )}
        {selectedTab === 2 && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Badges />
            </motion.div>
          </AnimatePresence>
        )}
        {selectedTab === 3 && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Education />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
};
