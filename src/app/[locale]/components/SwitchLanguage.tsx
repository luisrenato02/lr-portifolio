"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import br from "../../../../public/bandeiraBr.png";
import eua from "../../../../public/bandeiraEua.png";

export function SwitchLanguage() {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState("pt");

  useEffect(() => {
    setMounted(true);
    const currentURL = window.location.href;
    if (currentURL.includes("pt")) {
      setLanguage("pt");
    } else if (currentURL.includes("en")) {
      setLanguage("en");
    } else {
      setLanguage("error");
    }
  }, []);
  if (!mounted) return null;

  const classNameBr =
    "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  xl:size-15 lg:block hidden";
  const classNameEN =
    "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  xl:size-15 lg:block hidden";
  const classNameDisabled =
    "text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  xl:size-15 lg:block hidden";
  const classNameBrHidden =
    "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  w-max h-max lg:hidden sm:block";
  const classNameENHidden =
    "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  w-max h-max  lg:hidden sm:block";

  const classNameDisabledHidden =
    "text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  w-max h-max lg:hidden sm:block";

  return (
    <div className="gap-1 flex">
      <Link
        href={"/pt"}
        className={language === "pt" ? classNameBr : classNameDisabled}
      >
        <Image
          className="size-15"
          width={30}
          height={30}
          src={br}
          alt={"bandeira Brasil"}
        />
      </Link>
      <Link
        href={"/en"}
        className={language === "en" ? classNameEN : classNameDisabled}
      >
        <Image width={30} height={30} src={eua} alt={"bandeira Eua"} />
      </Link>

      {/* Hidden links */}
      <Link
        href={"/pt"}
        className={
          language === "pt" ? classNameBrHidden : classNameDisabledHidden
        }
      >
        <Image
          className="size-15"
          width={20}
          height={20}
          src={br}
          alt={"bandeira Brasil"}
        />
      </Link>
      <Link
        href={"/en"}
        className={
          language === "en" ? classNameENHidden : classNameDisabledHidden
        }
      >
        <Image width={20} height={20} src={eua} alt={"bandeira Eua"} />
      </Link>
    </div>
  );
}
