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

  return (
    <div
      className="flex justify-center items-center dark:hover:bg-slate-600 hover:bg-slate-200 rounded p-1"
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      <Image width={30} height={30} src={icon} alt={""} />
    </div>
  );
}
