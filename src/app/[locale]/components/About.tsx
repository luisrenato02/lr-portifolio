import Image from "next/image";
import LuisRenato from "../../../../public/LuisRenato.jpeg";
import wpp from "../../../../public/wpp.png";
import download from "../../../../public/download.png";
import { TabsAbout } from "./TabsAbout";
import { Certifications } from "./Certifications";
import { Projects } from "./Projects";

export const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 place-items-center">
        <Image
          className="md:col-span-1 flex justify-center rounded-full xl:w-80 xl:h-80 lg:w-64 lg:h-64 md:w-60 md:h-60  w-80 h-80 object-cover align-middle border-2 dark:border-slate-700"
          width={250}
          height={250}
          src={LuisRenato}
          alt={""}
        />
        <div className="md:col-span-2 p-4 text-gray-700 dark:text-gray-300">
          <h1 className="sm:text-3xl md:text-4xl text-2xl mb-6 text-center md:text-left">
            Olá, me chamo Luís Renato!
          </h1>
          <h2 className="sm:text-2xl md:text-3xl text-1xl mb-1">About me</h2>
          <p>
            s simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industrys standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset. i was born 01/03/2002
          </p>
          <div className="sm:flex grid h-full mt-10 gap-4">
            <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-1/2 lg:w-1/3 ">
              <div className="flex justify-center gap-2">
                <Image width={30} height={30} src={wpp} alt={"contact"} />
                <p className="flex items-center">Get in touch</p>
              </div>
            </button>
            <button className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-1/2   lg:w-1/3">
              <div className="flex justify-center align-middle gap-2">
                <Image width={30} height={30} src={download} alt={""} />
                <p className="flex items-center">Download CV</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <TabsAbout />
      <Certifications />
      <Projects />
    </>
  );
};
