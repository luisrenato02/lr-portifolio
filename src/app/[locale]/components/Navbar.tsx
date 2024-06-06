"use client";
import Image from "next/image";
import Logo from "../../../../public/logo.svg";
import hamburguer from "../../../../public/hamburger.png";
import { SwitchTheme } from "./SwitchTheme";
import Link from "next/link";
import { SwitchLanguage } from "./SwitchLanguage";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState("hidden");
  return (
    <div className="flex fixed w-full flex-col md:flex-row-reverse justify-between items-center inset-x-0 top-0">
      <nav className="bg-white dark:bg-slate-900 flex w-full justify-between md:py-10 py-4 sm:px-20 px-12 shadow-sm border-b-2 dark:border-slate-700 items-center">
        <Image src={Logo} alt="Logo" width={80} height={80} />

        <div className="hidden md:flex ">
          <ul className="flex font-bold sm:space-x-6 text-slate-400 dark:text-slate-300 hover:*:text-sky-500 dark:hover:*:text-sky-700 items-center text-xs xl:text-lg lg:text-base">
            <Link href={"#about"}>About me</Link>
            <Link href={"#certs"}>Certifications</Link>
            <Link href={"#projects"}>Projects</Link>
            <Link href={"#contact"}>Contact</Link>
          </ul>
          <div className="flex ml-5 gap-1">
            <SwitchTheme />
            <SwitchLanguage />
          </div>
        </div>
        <div className="flex gap-5 md:hidden">
          <SwitchTheme />

          <Image
            width={30}
            height={30}
            src={hamburguer}
            alt="hamburg"
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
              About me
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              href={"#certs"}
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              href={"#projects"}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              href={"#contact"}
            >
              Contact
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
