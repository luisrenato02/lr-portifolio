import Image, { StaticImageData } from "next/image";
import { EyeOff, Github } from "lucide-react";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface ProjectProps {
  project: string;
  description: string;
  image: StaticImageData;
  children?: React.ReactNode;
  linkGithub?: string;
  linkDemo?: string;
}

export const Project = ({
  project,
  description,
  image,
  children,
  linkGithub,
  linkDemo,
}: ProjectProps) => {
  const t = useTranslations("Projects");
  return (
    <div className="flex w-auto flex-col items-center lg:flex-row p-2 rounded-lg border dark:border-slate-700 gap-4">
      <Image
        className="rounded-lg 2xl:w-80 2xl:h-w-80 w-96 "
        width={400}
        height={400}
        src={image}
        alt={"project"}
      />
      <div className="flex flex-col items-center lg:grid w-auto">
        <h3 className="text-lg mb-2 font-semibold text-gray-700 dark:text-gray-300">
          {project}
        </h3>
        <p className="text-gray-700 dark:text-gray-400 text-sm mb-4 ">
          {description}
        </p>
        <div className="m-2 flex gap-4 ">
          {linkGithub ? (
            <Link
              className="flex gap-1 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg"
              href={linkGithub}
              target="_blank"
            >
              <Github width={20} height={20} color="#3b82f6" />
              <p className="text-sm text-blue-500  hover:underline">
                {t("repository")}
              </p>
            </Link>
          ) : (
            <div className="flex gap-1 ">
              <Github width={20} height={20} color="gray" />
              <p className="text-sm text-gray-500">{t("unavailable")}</p>
            </div>
          )}

          {linkDemo ? (
            <Link
              className="flex gap-1  hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg"
              href={linkDemo}
              target="_blank"
            >
              <Eye width={20} height={20} color="#3b82f6" />
              <p className="text-sm text-blue-500 hover:underline">
                {t("demonstration")}
              </p>
            </Link>
          ) : (
            <div className="flex gap-1">
              <EyeOff width={20} height={20} color="gray" />
              <p className="text-sm text-gray-500">{t("unavailable")}</p>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
