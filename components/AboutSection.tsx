'use client'; // Indica que es un componente del cliente

import React from 'react';
import Image from 'next/image';

// Define el tipo para las habilidades
type Skill = {
  skill: string;
};

const skills: Skill[] = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'Python' },
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Git' },
  { skill: 'GitHub' },
  { skill: 'Node.js' },
  { skill: 'Express' },
  { skill: 'MongoDB' },
  { skill: 'Docker' },
  { skill: 'Adobe Creative Cloud' },
  { skill: 'Figma' },
];

// Define el componente para cada tarjeta de habilidad
const SkillCard: React.FC<Skill> = ({ skill }) => (
  <li
    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:bg-lime-500 hover:text-white transition duration-300"
  >
    {skill}
  </li>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-4xl text-gray-900 dark:text-gray-100 mb-8">
          Acerca de mí
          <hr className="w-16 h-1 mx-auto mt-4 bg-lime-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-10 items-center md:items-start">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              ¡Conóceme!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              ¡Hola! Soy Carlos Armando Boyzo Oregón, un apasionado{' '}
              <span className="font-bold">Desarrollador Web Front-End</span> y{' '}
              <span className="font-bold">Diseñador UI-UX</span> con más de 4.5 años de
              experiencia, basado en México. Me especializo en crear experiencias
              digitales que no solo cumplen, sino que también impulsan el éxito de las
              empresas al integrar tecnologías innovadoras y enfoques transdisciplinarios.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Me gradué de la{' '}
              <span className="font-bold">
                Escuela Nacional de Pintura, Escultura y Grabado &quot;La Esmeralda&quot;
              </span>{' '}
              (INBA - ENPEG) en México, donde me especialicé en Arte Digital y Nuevos
              Medios. Durante mi intercambio en la{' '}
              <span className="font-bold">École Nationale Supérieure des Beaux-Arts</span>{' '}
              en Lyon, Francia, profundicé mis conocimientos en Artes Visuales.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              He tenido el privilegio de trabajar en empresas líderes como Truper,
              Totalplay, Telmex, Pfizer, Eisai, y Sección Amarilla, desarrollando
              habilidades en la optimización de productos digitales, diseño de interfaces,
              y desarrollo front-end.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Fuera del trabajo, disfruto explorar una variedad de pasatiempos que me
              permiten crecer personal y profesionalmente. Estoy comprometido con el
              aprendizaje continuo y la exploración de nuevas oportunidades, siempre
              buscando empujar los límites de lo que es posible en el mundo digital.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Mis Habilidades
            </h2>
            <ul className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => (
                <SkillCard skill={item.skill} key={idx} />
              ))}
            </ul>
            <Image
              src="/hero-image.png"
              alt="Imagen de Carlos Boyzo Oregón"
              width={185}
              height={185}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 md:top-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
