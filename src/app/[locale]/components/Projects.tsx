import rickMorty from "../../../../public/rick_morty.png";
import lrstore from "../../../../public/lrstore.png";
import portal from "../../../../public/portal.png";
import menuluck from "../../../../public/menuluck.png";
import costs from "../../../../public/costs.png";
import sasInfoluck from "../../../../public/sasInfoluck.png";
import { Project } from "./Project";
import { useTranslations } from "next-intl";

export const Projects = () => {
  const t = useTranslations("Projects");
  return (
    <section id="projects" className="mt-40 mb-40">
      <h2 className="text-xl flex place-content-center mb-4 font-bold">
        {t("title")}
      </h2>
      <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-8">
        <Project
          linkGithub={t("project1.linkGithub")}
          linkDemo={t("project1.linkDemo")}
          image={rickMorty}
          project={t("project1.project")}
          description={t("project1.description")}
        >
          <div className="flex gap-1 items-center flex-wrap">
            <span
              className={`bg-emerald-100 text-emerald-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-emerald-900 dark:text-emerald-300 flex place-content-center`}
            >
              <p>Next.js</p>
            </span>
            <span
              className={`bg-blue-100 text-blue-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300 flex place-content-center`}
            >
              <p>TypeScript</p>
            </span>
            <span
              className={`bg-orange-100 text-orange-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-orange-900 dark:text-orange-300 flex place-content-center`}
            >
              TanstackQuery
            </span>
            <span
              className={`bg-blue-100 text-blue-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300 flex place-content-center`}
            >
              StyledComponents
            </span>{" "}
          </div>
        </Project>
        <Project
          linkGithub={t("project2.linkGithub")}
          image={lrstore}
          project={t("project2.project")}
          description={t("project2.description")}
        >
          {" "}
          <div className="flex gap-1 items-center flex-wrap">
            <span
              className={`bg-emerald-100 text-emerald-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-emerald-900 dark:text-emerald-300 flex place-content-center`}
            >
              Next.js
            </span>
            <span
              className={`bg-blue-100 text-blue-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300 flex place-content-center`}
            >
              TypeScript
            </span>
            <span
              className={`bg-purple-100 text-purple-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-purple-900 dark:text-purple-300 flex place-content-center`}
            >
              PrismaORM
            </span>
            <span
              className={`bg-blue-100 text-blue-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300 flex place-content-center`}
            >
              Tailwind
            </span>
          </div>
        </Project>
        <Project
          image={portal}
          project={t("project3.project")}
          description={t("project3.description")}
        >
          <div className="flex gap-1 items-center flex-wrap">
            <span
              className={`bg-indigo-100 text-indigo-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-indigo-900 dark:text-indigo-300 flex place-content-center`}
            >
              React.js
            </span>
            <span
              className={`bg-blue-100 text-blue-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300 flex place-content-center`}
            >
              TypeScript
            </span>
            <span
              className={`bg-orange-100 text-orange-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-orange-900 dark:text-orange-300 flex place-content-center`}
            >
              TanstackQuery
            </span>
            <span
              className={`bg-gray-100 text-gray-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-gray-900 dark:text-gray-300 flex place-content-center`}
            >
              Axios
            </span>
            <span
              className={`bg-blue-100 text-blue-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300 flex place-content-center`}
            >
              Mantine
            </span>
          </div>
        </Project>
        <Project
          image={menuluck}
          project={t("project4.project")}
          description={t("project4.description")}
        >
          <div className="flex gap-1 items-center flex-wrap">
            <span
              className={`bg-emerald-100 text-emerald-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-emerald-900 dark:text-emerald-300 flex place-content-center`}
            >
              React.js
            </span>
            <span
              className={`bg-blue-100 text-blue-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300 flex place-content-center`}
            >
              TypeScript
            </span>
            <span
              className={`bg-gray-100 text-gray-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-gray-900 dark:text-gray-300 flex place-content-center`}
            >
              OAuth2.0
            </span>
            <span
              className={`bg-blue-100 text-blue-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300 flex place-content-center`}
            >
              StyledComponents
            </span>
            <span
              className={`bg-blue-100 text-blue-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300 flex place-content-center`}
            >
              Mantine
            </span>
          </div>
        </Project>
        <Project
          linkGithub={t("project5.linkGithub")}
          image={costs}
          project={t("project5.project")}
          description={t("project5.description")}
        >
          <div className="flex gap-1 items-center flex-wrap">
            <span
              className={`bg-emerald-100 text-emerald-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-emerald-900 dark:text-emerald-300 flex place-content-center`}
            >
              React.js
            </span>
            <span
              className={`bg-orange-100 text-orange-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-orange-900 dark:text-orange-300 flex place-content-center`}
            >
              JavaScript
            </span>
            <span
              className={`bg-blue-100 text-blue-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300 flex place-content-center`}
            >
              CSS
            </span>
          </div>
        </Project>
        <Project
          image={sasInfoluck}
          project={t("project6.project")}
          description={t("project6.description")}
        >
          <div className="flex gap-1 items-center flex-wrap">
            <span
              className={`bg-emerald-100 text-emerald-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-emerald-900 dark:text-emerald-300 flex place-content-center`}
            >
              React.js
            </span>
            <span
              className={`bg-orange-100 text-orange-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-orange-900 dark:text-orange-300 flex place-content-center`}
            >
              TanstackQuery
            </span>
            <span
              className={`bg-blue-100 text-blue-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300 flex place-content-center`}
            >
              TypeScript
            </span>
            <span
              className={`bg-red-100 text-red-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-red-900 dark:text-red-300 flex place-content-center`}
            >
              Jest
            </span>
            <span
              className={`bg-blue-100 text-blue-800 text-xs font-medium  px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300 flex place-content-center`}
            >
              Mantine
            </span>
          </div>
        </Project>
      </div>
    </section>
  );
};
