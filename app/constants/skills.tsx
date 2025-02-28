import { FaHtml5 as Html, FaNodeJs as NodeJs } from 'react-icons/fa6'
import {
  IoLogoJavascript as Javascript,
  IoLogoCss3 as CssIcon,
} from 'react-icons/io'
import { DiMongodb as Database } from 'react-icons/di'
import { FaReact as ReactIcon } from 'react-icons/fa'
import { SiNextdotjs as NextJs } from 'react-icons/si'
import {
  RiTailwindCssFill as Tailwind,
  RiRemixRunFill as Remix,
  RiSupabaseFill as Supabase,
} from 'react-icons/ri'
import { GrMysql as Sql } from 'react-icons/gr'
import {
  FaGitAlt as Git,
  FaDocker as Docker,
  FaCloud as CloudCog,
  FaFigma as Figma,
  FaPhp as PHP,
} from 'react-icons/fa'
import { VscVscode as VsCode } from 'react-icons/vsc'
import { html } from 'motion/react-client'

export interface SkillI {
  name: string
  icon: React.ElementType
}

interface SkillsI {
  title: string
  skills: SkillI[]
}

export const skills: SkillsI[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: Html },
      { name: 'CSS', icon: CssIcon },
      { name: 'JavaScript', icon: Javascript },
      { name: 'React', icon: ReactIcon },
      { name: 'Next.js', icon: NextJs },
      { name: 'Remix', icon: Remix },
      { name: 'Tailwind CSS', icon: Tailwind },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP', icon: PHP },
      { name: 'Node.js', icon: NodeJs },
      { name: 'Supabase', icon: Supabase },
      { name: 'SQL', icon: Sql },
      { name: 'MongoDB', icon: Database },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'Git', icon: Git },
      { name: 'Docker', icon: Docker },
      { name: 'CI/CD', icon: CloudCog },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'VS Code', icon: VsCode },
      { name: 'Figma', icon: Figma },
    ],
  },
]
