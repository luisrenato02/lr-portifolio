import Image from "next/image";
import Logo from "../../../../public/logo.svg";
import { SwitchTheme } from "./SwitchTheme";
import Link from "next/link";
import { SwitchLanguage } from "./SwitchLanguage";

export const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-slate-900 flex fixed w-full justify-between md:py-10 py-4 sm:px-20 px-12 shadow-sm border-b-2 dark:border-slate-700 items-center">
      <div className="hidden sm:block">
        <Image src={Logo} alt="Logo" width={80} height={80} />
      </div>

      <Image
        src={Logo}
        alt="Logo"
        width={40}
        height={40}
        className="sm:invisible"
      />

      <div className="hidden sm:flex">
        <ul className="flex font-bold space-x-10 *:text-slate-400 dark:*:text-slate-300 *:text-lg hover:*:text-sky-500  dark:hover:*:text-sky-700 *:items-center *:flex">
          <Link href={"#about"}>About me</Link>
          <Link href={"#certs"}>Certifications</Link>
          <Link href={"#projects"}>Projects</Link>
          <Link href={"#contact"}>Contact</Link>
        </ul>
        <div className="flex gap-5 ml-5">
          <SwitchTheme />
          <SwitchLanguage />
        </div>
      </div>
    </nav>
  );
};
