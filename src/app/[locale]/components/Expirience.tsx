import { SelectTab } from "./SelectTab";

export const Expirience = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 z-0">
      <SelectTab
        date="Janeiro 2020"
        title="Montador eletrônico - IBRAMED Brasil"
        description=" Realizar inspeção, soldagem e montagem das placas eletrônicas
                nos equipamentos, montagem de equipamentos eletrônicos em linhas
                e células produtivas, auxiliar a equipe na implementação de
                melhorias durante o processo produtivo."
      />

      <SelectTab
        date="Fevereiro 2021"
        title="Auxiliar técnico eletrônico - IBRAMED Brasil"
        description="Calibrar placas e equipamentos eletrônicos, reparar e trocar
                componentes eletrrônicos danificados dos equipamentos, lançar e
                responder os defeitos dos equipamentos e placas no sistema
                manufatura, recomendando ações corretivas, preventivas e
                melhorias nos dispositivos de testes."
      />
      <SelectTab
        date="Novembro 2021"
        title="Técnico de TI - Infoluck Sistemas"
        description="Suporte á clientes que utilizam o sistema, manutenção em
                impressoras, infraestrutura em geral, Windows, banco de dados,
                treinamentos, criação de relatórios, manutenção em servidores."
      />
      <SelectTab
        date=" Janeiro 2023"
        title="Desenvolvedor Web - Infoluck Sistemas"
        description="Desenhar e desenvolver o front-end de aplicações utilizando
                Figma, React, TypeScript, dentre outras tecnologias. Manutenir
                aplicações legado que utilizam PHP, JQuery, HTML, CSS,
                JavaScript. Alteração de relatórios utilizando pl/sql."
      />
    </ol>
  );
};
