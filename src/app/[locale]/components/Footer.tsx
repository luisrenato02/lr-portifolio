import { Github, Heart, Linkedin, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("Contact");
  return (
    <footer className="bg-sky-200 dark:bg-slate-800 flex flex-col w-full  md:py-10 py-4 2xl:px-60 xl:px-32 lg:px-12 md:px-12 sm:px-6 px-4  shadow-sm border-b-2 dark:border-slate-700 items-center justify-between">
      <section id="contact"></section>
      <ol className="flex justify-between w-full">
        <li>
          <div className="flex flex-col items-center">
            <Link
              target="_blank"
              href={
                "mailto:luisrtoniati@gmail.com?subject=Ol%C3%A1%2C%20muito%20Prazer&body=Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio..."
              }
              className="flex place-content-center lg:p-8 md:p-6 p-4 w-auto bg-sky-100 dark:bg-slate-700 rounded-full lg:mt-[-82px] md:mt-[-72px] mt-[-42px]"
            >
              <Mail />
            </Link>
            <p className="mt-2 text-xs md:text-sm lg:text-base ">Email</p>
            <p className="text-xs md:text-sm lg:text-base hidden sm:block">
              luisrtoniati@gmail.com
            </p>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center">
            <Link
              target="_blank"
              href={"https://github.com/luisrenato02"}
              className="flex place-content-center lg:p-8 md:p-6 p-4 w-auto bg-sky-100 dark:bg-slate-700 rounded-full lg:mt-[-82px] md:mt-[-72px] mt-[-42px]"
            >
              <Github />
            </Link>
            <p className="mt-2 text-xs md:text-sm lg:text-base">Github</p>
            <p className="text-xs md:text-sm lg:text-base hidden sm:block">
              @luisrenato02
            </p>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/luis-renato-toniati/"
              className="flex place-content-center lg:p-8 md:p-6 p-4 w-auto bg-sky-100 dark:bg-slate-700 rounded-full lg:mt-[-82px] md:mt-[-72px] mt-[-42px]"
            >
              <Linkedin />
            </Link>
            <p className="mt-2 text-xs md:text-sm lg:text-base ">Linkedin</p>
            <p className="text-xs md:text-sm lg:text-base hidden sm:block">
              @luis-renato-toniati
            </p>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center">
            <Link
              target="_blank"
              href={"https://wa.me/+5519997459187"}
              className="flex place-content-center lg:p-8 md:p-6 p-4  w-auto bg-sky-100 dark:bg-slate-700 rounded-full lg:mt-[-82px] md:mt-[-72px] mt-[-42px]"
            >
              <Phone />
            </Link>
            <p className="mt-2 text-xs md:text-sm lg:text-base">{t("tell")}</p>
            <p className="text-xs md:text-sm lg:text-base hidden sm:block">
              +55 (19) 99745-9187
            </p>
          </div>
        </li>
      </ol>
      <div className="flex gap-1 mt-8 items-center">
        <p className="text-xs dark:text-gray-400 text-gray-600">
          {t("development")}
        </p>
        <Heart color="#78716c" width={15} height={15} />
      </div>
      <Link
        href={"https://github.com/luisrenato02/lr-portifolio"}
        target="_blank"
        className="flex gap-1 mt-1 items-center hover:bg-sky-100 dark:hover:bg-gray-700 rounded-lg p-1"
      >
        <p className="text-xs dark:text-gray-400 text-gray-600 hover:underline">
          {t("repository")}
        </p>
        <Github color="#78716c" width={15} height={15} />
      </Link>
    </footer>
  );
};

export default Footer;
