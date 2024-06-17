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
import { motion } from "framer-motion";
import { Cert } from "./Cert";

export const Certifications = () => {
  const t = useTranslations("Certifications");
  return (
    <section id="certs" className="mt-40 flex flex-col mb-4mt-40">
      <h2 className="text-xl flex place-content-center mb-4 font-semibold text-gray-700 dark:text-gray-100">
        {t("title")}
      </h2>
      <div className="relative flex justify-center items-center">
        <div className="absolute w-full h-12 bg-sky-200 dark:bg-sky-900"></div>
        <div className="relative grid grid-cols-3 md:grid-cols-6 gap-4">
          <Cert
            img={analise}
            alt={"Analise e Desenvolvimento"}
            duration={0.5}
          />

          <Cert img={logica} alt={"Lógica de programação"} duration={0.6} />
          <Cert img={js} alt={"JavaScript"} duration={0.7} />
          <Cert img={sql} alt={"SQL"} duration={0.8} />
          <Cert img={html} alt={"HTML e CSS"} duration={0.9} />
          <Cert img={ingles} alt={"Inglês"} duration={1} />
        </div>
      </div>
      <div className="relative flex justify-center items-center mt-10">
        <div className="absolute w-full h-12 bg-sky-200 dark:bg-sky-900"></div>

        <div className="relative grid grid-cols-3 md:grid-cols-6 gap-4">
          <Cert img={solucoes} alt={"Soluções Algorítmicas"} duration={0.5} />
          <Cert img={redes} alt={"Rede de computadores"} duration={0.6} />
          <Cert
            img={programação}
            alt={"Programação de computadores"}
            duration={0.7}
          />
          <Cert img={infra} alt={"Infraestrutura de TI"} duration={0.8} />
          <Cert
            img={desenvolvimento_modelagem}
            alt={"Desenvolvimento e modelagem"}
            duration={0.9}
          />
          <Cert
            img={desenvolvimento_software}
            alt={"Desenvolvimente de software"}
            duration={1}
          />
        </div>
      </div>
    </section>
  );
};
