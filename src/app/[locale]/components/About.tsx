"use client";
import Image from "next/image";
import LuisRenato from "../../../../public/LuisRenato.jpeg";
import wpp from "../../../../public/whatsapp.svg";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, PhoneCall } from "lucide-react";

export const About = () => {
  const t = useTranslations("About");

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Curriculo2024.pdf";
    link.download = "Curriculo2024.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section
        id="about"
        className="grid grid-cols-1 md:grid-cols-3 gap-4  place-items-center mb-6 md:mb-8 xl:mb-12 "
      >
        <motion.div
          className="md:col-span-1 flex justify-center rounded-full xl:w-80 xl:h-80 lg:w-64 lg:h-64 md:w-60 md:h-60  w-80 h-80 object-cover align-middle border-2 dark:border-slate-950"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            className="md:col-span-1 flex justify-center rounded-full xl:w-80 xl:h-80 lg:w-64 lg:h-64 md:w-60 md:h-60  w-80 h-80 object-cover align-middle border-2 dark:border-slate-950"
            width={250}
            height={250}
            src={LuisRenato}
            alt={""}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 text-gray-700 dark:text-gray-300"
        >
          <h1 className="sm:text-3xl md:text-4xl text-2xl mb-6 text-center md:text-left text-gray-700 dark:text-gray-100">
            {t("hello")}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-1xl mb-1">
            <p>{t("about")}</p>
          </h2>
          <p>{t("description")}</p>
          <div className="sm:flex grid h-full mt-10 gap-4">
            <Link
              target="_blank"
              href={"https://wa.me/+5519997459187"}
              className="flex items-center justify-center text-white dark:text-gray-100 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-1/2 lg:w-1/3 "
            >
              <div className="flex justify-center items-center gap-2">
                <Image width={25} height={25} src={wpp} alt={""} />
                <p className="">{t("buttonWpp")}</p>
              </div>
            </Link>
            <button
              onClick={handleDownload}
              className="flex items-center justify-center text-white dark:text-gray-100 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-1/2   lg:w-1/3"
            >
              <div className="flex justify-center align-middle gap-2">
                <Download />
                <p className="flex items-center">{t("buttonCv")}</p>
              </div>
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
};
