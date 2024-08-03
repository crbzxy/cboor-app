'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section
      id='home'
      className='flex flex-col justify-center items-center h-screen my-10 py-16 text-center sm:py-32 md:flex-row md:space-x-4 md:text-left md:my-0 animate-fadeIn animation-delay-2'
    >
      <div className='flex-shrink-0 w-full md:w-1/2 lg:flex lg:justify-center'>
        <Image
          src='/head.gif'
          alt='Carlos Armando Boyzo Oregón, Diseñador UX y Desarrollador Front End'
          width={325}
          height={325}
          className='rounded-full shadow-2xl bg-black'
          priority
        />
      </div>
      <div className='w-full md:w-1/2'>
        <h1 className='text-4xl font-bold mt-6 md:mt-0'>
          ¡Hola, soy{' '}
          <span className='font-semibold text-lime-500'>
            Carlos Boyzo Oregón!
          </span>
        </h1>
        <p className='mt-4 mb-6 text-lg md:text-xl'>
          Soy un <span className="font-bold">Desarrollador Web Front-End</span> y <span className="font-bold">Diseñador UI-UX</span> con más de 4.5 años de experiencia. 
        </p>
        <p className='mt-4 mb-6' >Me especializo en crear experiencias digitales que no solo cumplen con las expectativas de los clientes, sino que las superan, integrando nuevas tecnologías y enfoques transdisciplinarios para ofrecer soluciones innovadoras y eficientes.</p>
        <Link
          to='projects'
          className='inline-block px-6 py-3 text-white bg-gray-800 rounded shadow font-semibold hover:bg-lime-500 transition duration-300 ease-in-out'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Conoce más
        </Link>
      </div>
      <div className='absolute bottom-0 w-full pb-10 flex justify-center'>
        <Link
          to='about'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className='animate-bounce text-lime-500' />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
