'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id='home' className='relative  flex flex-col items-center justify-center h-screen py-16 text-center sm:py-32 md:flex-row md:items-center md:text-left md:space-x-8 md:py-24'>
      <div className='flex-shrink-0 w-64 h-64 md:w-1/2 md:h-auto lg:flex lg:justify-center mt-10 md:mt-0'>
        <Image
          src='/head.gif'
          alt='Carlos Armando Boyzo Oregón, Diseñador UX y Desarrollador Front End'
          width={325}
          height={325}
          className='rounded-full shadow-2xl bg-black object-cover'
          priority
        />
      </div>
      <div className='w-full md:w-1/2 mt-8 md:mt-0 md:pl-8'>
        <h1 className='text-3xl font-bold mb-6 md:text-4xl'>
          ¡Hola, soy{' '}
          <span className='font-semibold text-lime-500'>
            Carlos Boyzo Oregón!
          </span>
        </h1>
        <p className='mb-4 text-lg md:text-xl'>
          Soy un <span className='font-bold'>Desarrollador Web Front-End</span> y <span className='font-bold'>Diseñador UI-UX</span> con más de 4.5 años de experiencia.
        </p>
        <p className='mb-8'>
          Me especializo en crear experiencias digitales que son altamente efectivas para generar los insights que las empresas buscan entender de sus usuarios. Al integrar nuevas tecnologías y enfoques transdisciplinarios, desarrollo soluciones que mejoran la toma de decisiones y potencian el valor de cada proyecto.
        </p>
        <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4'>
          {/* Botón de descarga del PDF */}
          <a
            href='/CV-Carlos_Boyzo_Oregon-DesarrolladorWeb-UI-UX.pdf' // Ruta al archivo PDF en la carpeta public
            download
            className='inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-lime-500 to-green-600 rounded-full shadow-md hover:from-green-600 hover:to-lime-500 transition duration-300 ease-in-out'
          >
            Descargar CV
          </a>
          {/* Botón de navegación */}
          <Link
            to='projects'
            className='inline-block px-8 py-4 text-lg font-semibold text-white bg-gray-800 rounded-full shadow-md hover:bg-lime-500 transition duration-300 ease-in-out'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Conoce más
          </Link>
        </div>
      </div>
      <div className='absolute bottom-10 w-full flex justify-center'>
        <Link
          to='about'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
