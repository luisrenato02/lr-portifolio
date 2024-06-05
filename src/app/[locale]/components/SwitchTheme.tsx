"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import on from "../../../../public/on.png";
import off from "../../../../public/off.png";
import Image from "next/image";

export function SwitchTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const icon = theme === "dark" ? off : on;

  const classNameLight =
    "text-white hover:bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-100 dark:focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2";
  const classNameDark =
    "text-white hover:bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2";
  return (
    <div
      className={theme === "light" ? classNameLight : classNameDark}
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      <Image width={30} height={30} src={icon} alt={""} />
    </div>
  );
}
