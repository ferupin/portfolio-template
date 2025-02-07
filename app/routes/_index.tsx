import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" }, // coloque seu nome se quiser
    {
      name: "Portfolio",
      content: "Bem-vindos ao meu portfolio construido em Remix.",
    },
  ];
};

export default function Index() {
  return (
    <div className="relative min-h-screen">
      {/* background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 ">
        {/* conteudo principal do seu portfolio */}
        <section
          id="hero"
          className="h-screen flex flex-col gap-4 items-center justify-center sm:flex-row sm:gap-16"
        >
          {/* troque por uma foto de sua preferencia e descreva sobre voce*/}
          <div>
            <h1 className="text-6xl">Hello World.</h1>
            <h1 className="text-4xl">
              I'm{" "}
              <span className="font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Tifany.
              </span>
            </h1>
            <span className="text-gray-400">
              Web Designer | Front-End Developer
            </span>
            <p className="text-gray-400 w-96 mt-4">
              Uma <b>Software Engineer</b> com foco no <b>Front-End</b>.
              Buscando sempre desenvolver telas robustas e responsivas. Sinto-me
              confortável projetando meus próprios designs e aplicando-os na
              prática durante o desenvolvimento.
            </p>
          </div>

          <img src="/yourProfilePic.jpg" className="rounded-full" />
        </section>
      </div>
    </div>
  );
}
