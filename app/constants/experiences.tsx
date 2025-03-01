import { RiPhpFill as Php } from "react-icons/ri";
import { IoLogoJavascript as Javascript } from "react-icons/io5";
import { GrMysql as SQL } from 'react-icons/gr'
import { FaWordpress as Wordpress } from "react-icons/fa";
import { FaReact as ReactIcon } from 'react-icons/fa'

export interface ToolUsedI {
  name: string;
  icon: React.ElementType;
}

export interface ExperienceI {
  company: string;
  period: string;
  role: string;
  description: string;
  tools: ToolUsedI[]; 
}

interface ToolsUsedI {
  title: string;
  skills: ToolUsedI[];
}

const tools: ToolsUsedI[] = [
  {
    title: 'Clia Empório',
    skills: [
      { name: 'Php', icon: Php },
      { name: 'Javascript', icon: Javascript },
      { name: 'SQL', icon: SQL },
    ],
  },
  {
    title: 'Rede UNIFTC',
    skills: [
      { name: 'Php', icon: Php },
      { name: 'Javascript', icon: Javascript },
      { name: 'React', icon: ReactIcon },
      { name: 'Wordpress', icon: Wordpress },
      { name: 'SQL', icon: SQL },      
    ],
  }
];

export const experiences: ExperienceI[] = [
  {
    company: 'Clia Empório',
    period: 'Abr 2023 - Set 2024',
    role: 'Desenvolvedor de Software',
    description:
      'Como Desenvolvedor, otimizei processos logísticos manuais, automatizando sistemas e integrando bases de dados (SQL Server) para unificar informações e gerar indicadores. Participei da migração de sistemas legados para infraestrutura moderna, implementando ferramentas de gestão que melhoraram a acessibilidade e centralização de dados, aumentando a eficiência e o controle operacional.',
    tools: tools.find(tool => tool.title === 'Clia Empório')?.skills || []
  },
  {
    company: 'Rede UNIFTC',
    period: 'Fev 2020 - Jan 2021',
    role: 'Estagiário em Desenvolvimento Web',
    description:
      'Como Estagiário contribui para a criação e manutenção de serviços web, atuando na migração de sistemas legados e no desenvolvimento de landing pages para campanhas e oportunidades. Realizei manutenções e atualizações em páginas baseadas na plataforma WordPress, garantindo funcionalidade e compatibilidade contínuas.',
    tools: tools.find(tool => tool.title === 'Rede UNIFTC')?.skills || []
  },
];