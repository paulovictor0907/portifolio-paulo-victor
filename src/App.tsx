import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import SunIcon from "./assets/brilho.svg?react";
import MoonIcon from "./assets/estrelas-da-lua.svg?react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ChartRadarDots } from "./components/ui/languages-radar";
import { ToolsRadarChart } from "./components/ui/tools-radar";


type theme = "light" | "dark";

const sectionIds = ["welcome", "whatIdo", "tools","contact"];

function App() {
  const [theme, setTheme] = useState<theme>("light");
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionIds.indexOf(entry.target.id);
            setCurrentSectionIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleScroll = () => {
    const isLastSection = currentSectionIndex === sectionIds.length - 1;
    const nextSectionId = isLastSection
      ? sectionIds[0]
      : sectionIds[currentSectionIndex + 1];

    document
      .getElementById(nextSectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/*Botão alterar tema*/}
      <div className="absolute top-4 right-4">
        <Button onClick={toggleTheme} variant="ghost" size="icon">
          {theme === "light" ? (
            <MoonIcon className="h-[3.2rem] w-[3.2rem]" />
          ) : (
            <SunIcon className="h-[3.2rem] w-[3.2rem]" />
          )}
          <span className="sr-only">Mudar tema</span>
        </Button>
      </div>
      {/*Botão para rolagem de tela*/}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20">
        <Button
          onClick={handleScroll}
          variant="ghost"
          size="icon"
          className="animate-bounce"
        >
          {currentSectionIndex === sectionIds.length - 1 ? (
            <ChevronUp className="h-8 w-8" />
          ) : (
            <ChevronDown className="h-8 w-8" />
          )}
          <span className="sr-only">Rolar para a próxima seção</span>
        </Button>
      </div>

      <section
        id="welcome"
        className="h-screen w-full flex items-center justify-center"
      >
        <div className="text-center px-4">
          <h1 
            className="
              font-extrabold text-8xl md:text-9xl mb-6 
              drop-shadow-[0_0_10px_rgba(245,158,11,0.4)] 
              dark:drop-shadow-[0_0_15px_rgba(255,255,150,0.3)]
            "
          >
            BEM VINDO
          </h1>
        </div>
      </section>

      <section
        id="whatIdo"
        className="h-screen w-full flex items-center justify-center"
      >
        <div className="text-center p-8">
          <h2 className="text-5xl font-bold mb-4">O que eu faço</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Sou um estudante de Engenharia de Software de 21 anos na Puc Minas,
            com diploma do ensino médio, em busca de uma oportunidade em uma
            empresa onde possa aplicar meus conhecimentos e expandir minhas
            habilidades. Meu objetivo é contribuir ativamente para o sucesso da
            equipe, participando de projetos desafiadores e adquirindo novos
            conhecimentos ao longo do processo. Sou motivado a explorar novas
            tecnologias, aprimorar minhas competências e entregar soluções
            eficientes e de alta qualidade.
          </p>
        </div>
      </section>

      <section
        id="tools"
        className="h-screen w-full flex flex-col items-center justify-center"
      >
       <h2 className="text-5xl font-bold mb-12">Linguagens e Ferramentas</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <ChartRadarDots />
          <ToolsRadarChart />
        </div>
      </section>
      <section
        id="contact"
        className="h-screen w-full flex items-center justify-center"
      >
        <div className="text-center p-8">
          <h2 className="text-5xl font-bold mb-4">Contato</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Entre em contato...
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
