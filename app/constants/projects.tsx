export interface ProjectI {
  title: string
  description: string
  imageUrl: string
  liveUrl?: string
  repoUrl?: string
}

// insira os dados de projetos que voce possui aqui.
export const projects: ProjectI[] = [
  {
    title: 'Portfólio', // titulo do seu projeto.
    description:
      'Projeto pessoal e template open-source, utilizando Remix e TailwindCSS.', // breve descricao do seu projeto
    imageUrl: '/assests/portfolioImage.png', // imagem de banner do seu projeto, recomendo que coloque na pasta /assets/ na pasta public
    liveUrl: 'https://portfolio-pinuya.vercel.app/', // link do seu site deployado (se n houver pode deletar a linha)
    repoUrl: 'https://github.com/pinuya/portfolio-template', // link do seu rep
  },
]
