"use client";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Logo from "../../../../public/logo.svg";
import { SwitchTheme } from "./SwitchTheme";
import { SwitchLanguage } from "./SwitchLanguage";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState("hidden");

  const [show, setShow] = useState(true);

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY < 500) setShow(true);
    if (show && window.scrollY > 450) setShow(false);
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, show]);

  console.log(show);
  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex fixed w-full flex-col md:flex-row-reverse justify-between items-center inset-x-0 top-0 z-10"
          >
            <nav className="bg-white dark:bg-slate-950 flex w-full justify-between 2xl:px-40 xl:px-32 lg:px-12 md:px-12 sm:px-6 px-4  md:py-10 py-4  shadow-sm items-center">
              <Link href={"#about"}>
                <Image
                  className="hidden sm:block"
                  src={Logo}
                  alt="Logo"
                  width={120}
                  height={120}
                />
                <Image
                  className="block sm:hidden"
                  src={Logo}
                  alt="Logo"
                  width={80}
                  height={80}
                />
              </Link>

              <div className="hidden md:flex ">
                <ul className="flex font-bold sm:space-x-6 text-slate-400 dark:text-slate-300 hover:*:text-sky-200 dark:hover:*:text-white  hover:*:underline items-center text-xs xl:text-lg lg:text-base ">
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
                  onClick={() =>
                    setIsOpen(isOpen === "hidden" ? "block" : "hidden")
                  }
                />
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
