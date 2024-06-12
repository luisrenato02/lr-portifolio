"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../../../public/logo.svg";
import { SwitchTheme } from "./SwitchTheme";
import { SwitchLanguage } from "./SwitchLanguage";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";

export const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState("hidden");

  return (
    <div className="flex fixed w-full flex-col md:flex-row-reverse justify-between items-center inset-x-0 top-0  z-10">
      <nav className="bg-white dark:bg-slate-900 flex w-full justify-between 2xl:px-60 xl:px-32 lg:px-12 md:px-12 sm:px-6 px-4  md:py-10 py-4  shadow-sm border-b-2 dark:border-slate-700 items-center">
        <Link href={"#about"}>
          <Image src={Logo} alt="Logo" width={80} height={80} />
        </Link>

        <div className="hidden md:flex ">
          <ul className="flex font-bold sm:space-x-6 text-slate-400 dark:text-slate-300 hover:*:text-sky-200 dark:hover:*:text-sky-700 items-center text-xs xl:text-lg lg:text-base">
            <Link href={"#about"}>{t("aboutMe")}</Link>
            <Link href={"#certs"}>{t("certifications")}</Link>
            <Link href={"#projects"}>{t("projects")}</Link>
            <Link href={"#contact"}>{t("contact")}</Link>
          </ul>
          <div className="flex ml-5 gap-1">
            <SwitchTheme />
            <SwitchLanguage />
          </div>
        </div>
        <div className="flex items-center gap-5 md:hidden">
          <SwitchTheme />
          <Menu
            color={"#374151"}
            width={30}
            height={30}
            className="flex md:hidden p-1  hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg cursor-pointer w-auto"
            onClick={() => setIsOpen(isOpen === "hidden" ? "block" : "hidden")}
          />
        </div>
      </nav>
      <div
        className={`${isOpen} md:hidden z-10 bg-white hidde divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-slate-900 self-end md:self-auto md:absolute right-0 top-full sm:mr-20 mr-10 mt-1`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <Link
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              href={"#about"}
            >
              {t("aboutMe")}
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              href={"#certs"}
            >
              {t("certifications")}
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              href={"#projects"}
            >
              {t("projects")}
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              href={"#contact"}
            >
              {t("contact")}
            </Link>
          </li>
          <li className="mt-2 pt-2 border-t dark:border-gray-400">
            <div className="flex align-middle justify-center">
              <SwitchLanguage />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
