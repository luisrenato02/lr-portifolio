"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Lightbulb, LightbulbOff } from "lucide-react";

export function SwitchTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const iconLg =
    theme === "dark" ? (
      <LightbulbOff width={30} height={30} color={"#374151"} />
    ) : (
      <Lightbulb width={30} height={30} color={"#374151"} />
    );
  const iconSm =
    theme === "dark" ? (
      <LightbulbOff width={20} height={20} color={"#374151"} />
    ) : (
      <Lightbulb width={20} height={20} color={"#374151"} />
    );

  const classNameLight =
    "text-white hover:bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-100 dark:focus:ring-yellow-400 font-medium rounded-lg text-sm p-1  text-center  sm:w-max sm:h-max md:px-5 md:py-2.5 ";
  const classNameDark =
    "text-white hover:bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm p-1  text-center  sm:w-max sm:h-max md:px-5 md:py-2.5";
  return (
    <div
      className={theme === "light" ? classNameLight : classNameDark}
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      <div className="lg:block hidden">{iconLg}</div>
      <div className="lg:hidden sm:block">{iconSm}</div>
    </div>
  );
}
