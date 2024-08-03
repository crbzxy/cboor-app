import React from 'react';
import Image from 'next/image';

// Define tus habilidades
const skills = [
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
  { skill: 'Jupyter Notebooks' },
  { skill: 'Node.js' },
  { skill: 'Express' },
  { skill: 'MongoDB' },
  { skill: 'Docker' },
  { skill: 'Adobe Creative Cloud' },
  { skill: 'Figma' },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Acerca de mí
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              ¡Conóceme!
            </h1>
            <p>
              Hola, mi nombre es Carlos Armando Boyzo Oregón y soy un{' '}
              <span className="font-bold">Desarrollador Web Front-End</span> y{' '}
              <span className="font-bold">Diseñador UI-UX</span> con más de 4.5 años
              de experiencia, basado en México. Soy{' '}
              <span className="font-bold">apasionado</span> por la creación de experiencias
              digitales que superan las expectativas de los clientes mediante la
              integración de tecnologías innovadoras.
            </p>
            <br />
            <p>
              Me gradué de la{' '}
              <span className="font-bold">
                Escuela Nacional de Pintura, Escultura y Grabado &quot;La Esmeralda&quot;
              </span>{' '}
              (INBA - ENPEG) en México, con una especialidad en Arte Digital y Nuevos Medios.
              También completé un intercambio Erasmus en la{' '}
              <span className="font-bold">École Nationale Supérieure des Beaux-Arts</span>{' '}
              en Lyon, Francia, donde profundicé mis conocimientos en Artes Visuales.
            </p>
            <br />
            <p>
              A lo largo de mi carrera, he trabajado en empresas líderes como Truper,
              Totalplay, Telmex, Pfizer, Eisai, y Sección Amarilla, donde he desarrollado
              habilidades en optimización de productos digitales, diseño de interfaces, y
              desarrollo front-end.
            </p>
            <br />
            <p>
              Fuera del trabajo, disfruto de una variedad de pasatiempos que me permiten crecer
              tanto personal como profesionalmente.
            </p>
            <br />
            <p>
              Estoy comprometido con el aprendizaje continuo y la exploración de nuevas oportunidades.
              Creo firmemente en la importancia de empujar los límites de lo que es posible en el
              mundo digital y espero contribuir a proyectos que hagan una diferencia significativa. 😊
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Mis Habilidades</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
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
