"use client";
import xp from "../../../../public/xp.png";
import education from "../../../../public/education.png";
import techs from "../../../../public/techs.png";
import Image from "next/image";
import { useState } from "react";
import { SelectTab } from "./SelectTab";
import { Badge } from "./badge";
import { Education } from "./Education";
import { Expirience } from "./Expirience";

export const TabsAbout = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const selectClassName = "dark:bg-slate-700 bg-gray-200";
  return (
    <>
      <ul className="mb-5 flex list-none ps-0 w-full justify-around rounded-lg border border-gray-300 dark:border-slate-600 *:text-gray-400 *:dark:text-gray-300 *:rounded-lg dark:hover:*:bg-slate-800 hover:*:bg-gray-100 *:p-1 items-center *:w-full *:h-full *:place-content-center *:flex">
        <li
          className={selectedTab === 1 ? selectClassName : ""}
          onClick={() => setSelectedTab(1)}
        >
          <p className="hidden md:block">Experience</p>
          <Image
            className="block md:hidden"
            height={25}
            width={25}
            src={xp}
            alt={"expirience"}
          />
        </li>
        <li
          className={selectedTab === 2 ? selectClassName : ""}
          onClick={() => setSelectedTab(2)}
        >
          <p className="hidden md:block">Academic Education</p>
          <Image
            className="block md:hidden"
            height={25}
            width={25}
            src={education}
            alt={"education"}
          />
        </li>
        <li
          className={selectedTab === 3 ? selectClassName : ""}
          onClick={() => setSelectedTab(3)}
        >
          <p className="hidden md:block">Technologies</p>
          <Image
            className="block md:hidden"
            height={25}
            width={25}
            src={techs}
            alt={"technologies"}
          />
        </li>
      </ul>

      <div>
        {selectedTab === 1 && <Expirience />}
        {selectedTab === 2 && <Education />}
        {selectedTab === 3 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-5">
            <Badge color={"orange"} title={"HTML"} />
            <Badge color={"blue"} title={"CSS"} />
            <Badge color={"yellow"} title={"JavaScript"} />
            <Badge color={"blue"} title={"TypeScript"} />
            <Badge color={"indigo"} title={"React.js"} />
            <Badge color={"sky"} title={"Next.js"} />
            <Badge color={"green"} title={"Node.js"} />
            <Badge color={"red"} title={"Nest.js"} />
            <Badge color={"gray"} title={"Git"} />
            <Badge color={"gray"} title={"SQL"} />
            <Badge color={"purple"} title={"Prisma ORM"} />
            <Badge color={"blue"} title={"Mantine"} />
            <Badge color={"blue"} title={"Tailwind"} />
            <Badge color={"emerald"} title={"StyledComponents"} />
          </div>
        )}
      </div>
    </>
  );
};
