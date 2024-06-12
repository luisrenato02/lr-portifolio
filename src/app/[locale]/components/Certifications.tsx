import Image from "next/image";
import analise from "../../../../public/ads.png";
import logica from "../../../../public/logicaGeek.png";
import js from "../../../../public/js.png";
import sql from "../../../../public/sql.png";
import html from "../../../../public/html.png";
import ingles from "../../../../public/ingles.png";
import solucoes from "../../../../public/solucoes.png";
import redes from "../../../../public/redes.png";
import programação from "../../../../public/programação.png";
import infra from "../../../../public/infra.png";
import desenvolvimento_modelagem from "../../../../public/desenModelagem.png";
import desenvolvimento_software from "../../../../public/desenSoftware.png";
import { useTranslations } from "next-intl";

export const Certifications = () => {
  const t = useTranslations("Certifications");
  return (
    <section id="certs" className="mt-40 flex flex-col mb-4mt-40">
      <h2 className="text-xl flex place-content-center mb-4 font-bold">
        {t("title")}
      </h2>
      <div className="relative flex justify-center items-center">
        <div className="absolute w-full h-12 bg-sky-200 dark:bg-sky-900"></div>
        <div className="relative grid grid-cols-3 md:grid-cols-6 gap-4">
          <Image
            width={200}
            height={200}
            src={analise}
            alt={"Analise e Desenvolvimento"}
          />
          <Image
            width={200}
            height={200}
            src={logica}
            alt={"Lógica de programação"}
          />
          <Image width={200} height={200} src={js} alt={"JavaScript"} />
          <Image width={200} height={200} src={sql} alt={"SQL"} />
          <Image width={200} height={200} src={html} alt={"HTML e CSS"} />
          <Image width={200} height={200} src={ingles} alt={"Inglês"} />
        </div>
      </div>
      <div className="relative flex justify-center items-center mt-10">
        <div className="absolute w-full h-12 bg-sky-200 dark:bg-sky-900"></div>
        <div className="relative grid grid-cols-3 md:grid-cols-6 gap-4">
          <Image
            width={200}
            height={200}
            src={solucoes}
            alt={"Soluções Algorítmicas"}
          />
          <Image
            width={200}
            height={200}
            src={redes}
            alt={"Rede de computadores"}
          />
          <Image
            width={200}
            height={200}
            src={programação}
            alt={"Programação de computadores"}
          />
          <Image
            width={200}
            height={200}
            src={infra}
            alt={"Infraestrutura de TI"}
          />
          <Image
            width={200}
            height={200}
            src={desenvolvimento_modelagem}
            alt={"Desenvolvimento e modelagem"}
          />
          <Image
            width={200}
            height={200}
            src={desenvolvimento_software}
            alt={"Desenvolvimente de software"}
          />
        </div>
      </div>
    </section>
  );
};
