import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

// Definimos un array para los íconos de redes sociales para facilitar su manejo y escalabilidad
const socialLinks = [
  { href: "https://github.com/crbzxy", icon: AiOutlineGithub },
  { href: "https://www.linkedin.com/in/carlosboyzo/", icon: AiOutlineLinkedin },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="text-neutral-500 dark:text-neutral-100">
          © {currentYear} Carlos Armando Boyzo Oregón
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          {socialLinks.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              rel="noreferrer"
              target="_blank"
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            >
              <Icon size={30} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
