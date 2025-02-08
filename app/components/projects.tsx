import type React from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
};

// insira os dados de projetos que voce possui aqui.
const projects: Project[] = [
  {
    id: "1",
    title: "Portfólio", // titulo do seu projeto.
    description:
      "Projeto pessoal e template open-source, utilizando Remix e TailwindCSS.", // breve descricao do seu projeto
    imageUrl: "/assests/portfolioImage.png", // imagem de banner do seu projeto, recomendo que coloque na pasta /assets/ na pasta public
    liveUrl: "https://example.com/ecommerce", // link do seu site deployado (se n houver pode deletar a linha)
    repoUrl: "https://github.com/pinuya/portfolio-template", // link do seu rep
  },
  {
    id: "2",
    title: "Sylvanian Families Store",
    description:
      "Projeto em desenvolvimento, uma lojinha de e-commerce de Sylvanian Families.",

    imageUrl: "/assests/sylvanianStore.png",
    liveUrl: "https://github.com/pinuya",
    repoUrl: "https://github.com/pinuya",
  },
  {
    id: "3",
    title: "TicTacToe",
    description:
      "Projeto que refatorei recentemente de um jogo da velha para jogar com amigos.",

    imageUrl: "/assests/ticTacToe.png",
    liveUrl: "https://pinuya.github.io/tic-tac-toe/",
    repoUrl: "https://github.com/pinuya/tic-tac-toe",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <img
        src={project.imageUrl || "/placeholder.svg"}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full transition-colors duration-300"
            >
              Ver Site
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium px-4 py-2 text-white rounded-full hover:bg-gray-600 transition-colors duration-300"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
