import { SelectTab } from "./SelectTab";

export const Education = () => {
  return (
    <div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 z-0">
        <SelectTab
          date="2017 - 2019"
          title="ETEC - Escola Técnica Estadual de São Paulo"
          description="Curso técnico em eletrônica integrado ao ensino médio."
        />

        <SelectTab
          date="2021 - 2023"
          title="Universidade São Francisco"
          description="Curso Superior de Tecnologia (CST), Analise e desenvolvimento de sistemas"
        />
      </ol>
      <h3 className="text-lg mb-5 font-semibold text-gray-500 ">Courses</h3>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 z-0">
        <SelectTab
          date="2015 - 2017"
          description="VIA BRASIL"
          title="Tecnologia e Gestão"
        />
        <SelectTab
          date="Setembro de 2020 - 27 de Outubro de 2020"
          description="GEEK UNIVERSITY"
          title="Algoritmos e Lógica de Programação"
        />
        <SelectTab
          date="fevereiro de 2022"
          description="CURSO EM VÍDEO"
          title="MySQL"
        />
        <SelectTab
          date=" julho de 2022"
          description="CURSO EM VÍDEO"
          title="JavaScript"
        />
        <SelectTab
          date=" julho de 2022"
          description="CURSO EM VÍDEO"
          title="Html5 e ss3"
        />
        <SelectTab
          date="julho 2021"
          description="UNIVERSIDADE SÃO FRANCISCO"
          title="Suporte de ti"
        />
        <SelectTab
          date="julho 2021"
          description="UNIVERSIDADE SÃO FRANCISCO"
          title="Suporte de tecnologia da informação: hardware básico e
Aplicações"
        />
        <SelectTab
          date="dezembro 2021"
          description="UNIVERSIDADE SÃO FRANCISCO"
          title="Programação de computadores"
        />
        <SelectTab
          date="julho 2022"
          description="UNIVERSIDADE SÃO FRANCISCO"
          title="Infraestrutura de redes e computadores"
        />
        <SelectTab
          date="julho 2022"
          description="UNIVERSIDADE SÃO FRANCISCO"
          title="Desenvolvimento de software"
        />
        <SelectTab
          date="julho 2022"
          description="UNIVERSIDADE SÃO FRANCISCO"
          title="Desenvolvimento de software: modelagem de banco de
Dados e orientação a objetos"
        />
        <SelectTab
          date="dezembro 2022"
          description="UNIVERSIDADE SÃO FRANCISCO"
          title="Programação de computadores: soluções algorítmicas"
        />

        <SelectTab
          date="maio de 2024"
          title="Curso de inglês para iniciantes - módulo 1: beginners - completo [VIP]"
          description="CURSO EM VÍDEO"
        />
      </ol>
    </div>
  );
};
