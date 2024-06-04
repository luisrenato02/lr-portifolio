"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import on from "../../../../public/on.png";
import off from "../../../../public/off.png";
import Image from "next/image";
import Link from "next/link";

export function SwitchLanguage() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const icon = theme === "dark" ? off : on;

  return (
    <>
      <Link href={"/pt"}>BR</Link>
      <Link href={"/en"}>EN</Link>
    </>
  );
}
