import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

// Definición de proyectos con configuraciones individuales
const projects = [
  {
    name: "Vortex Media Lab",
    description:
      "Un laboratorio de ideas especializado en la creación de contenido hecho a medida para tus proyectos.",
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
    name: "Lapi Laboratorio Médico",
    description: "Foundation Desing de Lapi Laboratorio Médico: desarrollo de interfaz y estructura de e-commerce.",
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
    <section id="projects" className="py-20">
      <h1 className="my-10 text-center font-bold text-4xl">
        Proyectos
        <hr className="w-6 h-1 mx-auto my-4 bg-lime-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:space-x-12 animate-slideUpCubiBezier animation-delay-2">
            {project.config.showImage && (
              <div className="md:w-1/2">
                <Link href={project.link} passHref>
                  <Image
                    src={project.image}
                    alt={`Imagen del proyecto ${project.name}`}
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                </Link>
              </div>
            )}
            <div className="mt-8 md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">{project.name}</h2>
              {project.config.showDescription && (
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
              )}
              <div className="flex flex-row align-bottom space-x-4">
                {project.config.showGithubLink && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                )}
                {project.config.showExternalLink && (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <BsArrowUpRightSquare
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
