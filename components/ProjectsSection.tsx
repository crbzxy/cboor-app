import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

// Definición de proyectos con configuraciones individuales
const projects = [
  {
    name: "Vortex Media Lab",
    description:
      "Un laboratorio de ideas, experimentado en la creación de contenido hecho a la medida de tus proyectos.",
    image: "/vortex.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://vortexmedialab.netlify.app/",
    config: {
      showGithubLink: false,
      showExternalLink: true,
      showDescription: true,
      showImage: true,
    },
  },
  {
    name: "Lapi Laboratorio Médico ",
    description: "Foundation de Lapi Laboratorio Médico, desarrollo de interfza y estructura ecommerce.",
    image: "/lapi.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://www.lapi.com.mx/",
    config: {
      showGithubLink: false,
      showExternalLink: true,
      showDescription: true,
      showImage: true,
    },
  },
  {
    name: "Tienda en Línea",
    description:
      "Obtén tu propia tienda en línea de manera fácil, segura y sin plazos forzosos.",
    image: "/tiendaenlinea.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://tiendaenlinea.adn.com.mx/",
    config: {
      showGithubLink: false,
      showExternalLink: true,
      showDescription: false,
      showImage: true,
    },
  },
  // Más proyectos...
];


const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-lime-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects?.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                {project.config.showImage && (
                  <div className="md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                )}
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  {project.config.showDescription && (
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                  )}
                  <div className="flex flex-row align-bottom space-x-4">
                    {project.config.showGithubLink && (
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    )}
                    {project.config.showExternalLink && (
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection
