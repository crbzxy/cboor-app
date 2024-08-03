'use client'; // Este es un componente cliente
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Image from 'next/image';

interface NavItem {
  label: string;
  page: string;
  icon?: string; // Cambiado a string para permitir emojis
}

// Array de emojis que representan diferentes temas de los poemas de Roberto Bolaño
const emojis = ['🔥', '🌟', '📚', '✍️', '💫', '🎭', '🎨'];

const NAV_ITEMS: Array<NavItem> = [
  { label: 'Home', page: 'home' },
  { label: 'Sobre mí', page: 'about' },
  { label: 'Proyectos', page: 'projects' },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  const [homeIcon, setHomeIcon] = useState<string>(emojis[0]);

  useEffect(() => {
    // Seleccionar un emoji aleatorio del array cada vez que se recarga la página
    setHomeIcon(emojis[Math.floor(Math.random() * emojis.length)]);
  }, []);

  // Botón de cambio de tema
  const themeButton = currentTheme === 'dark' ? (
    <button
      onClick={() => setTheme('light')}
      aria-label="Cambiar a tema claro"
      className='bg-gray-100 p-2 rounded-xl relative'>
      <RiSunLine size={25} color='black' />
    </button>
  ) : (
    <button
      onClick={() => setTheme('dark')}
      aria-label="Cambiar a tema oscuro"
      className='p-2 rounded-xl'>
      <RiMoonFill size={25} />
    </button>
  );

  return (
    <header className='w-full mx-auto p-2 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-gray-950'>
      <div className='justify-between md:items-center md:flex'>
        <div className='flex items-center justify-between'>
          {/* Imagen del logo */}
          <Link to='home'>
            <div className='container flex items-center space-x-2'>
              <Image
                src='/cbo-logo.png'
                alt='CBO Logo'
                className='w-auto h-5'
                width={10}
                height={10}
                priority={true} // Optimización de la carga de la imagen
              />
            </div>
          </Link>
          <button
            className='md:hidden p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
            onClick={() => setNavbar(!navbar)}
            aria-label={navbar ? "Cerrar menú" : "Abrir menú"}
          >
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>

        <div className={`md:flex ${navbar ? 'block' : 'hidden'} md:block`}>
          <div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
            <Link
              to='home'
              className='block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 text-right'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavbar(false)}
            >
              <span className='text-2xl'>{homeIcon}</span>
            </Link>
            {NAV_ITEMS.slice(1).map((item) => (
              <Link
                key={item.page}
                to={item.page}
                className='block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 text-right'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavbar(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Botón de tema */}
            {themeButton}
          </div>
        </div>
      </div>
    </header>
  );
}
