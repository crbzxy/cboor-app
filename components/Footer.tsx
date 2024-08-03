import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const socialLinks = [
  { href: "https://github.com/crbzxy", icon: AiOutlineGithub },
  { href: "https://www.linkedin.com/in/carlosboyzo/", icon: AiOutlineLinkedin },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 py-4 z-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <hr className="w-full h-0.5 mx-auto mb-4 bg-neutral-200 border-0" />
        <div className="flex flex-col text-center text-neutral-900 dark:text-neutral-100 md:flex-row md:justify-between">
          <div className="text-neutral-500 dark:text-neutral-400">
            © {currentYear} Carlos Armando Boyzo Oregón
          </div>
          <div className="flex flex-row items-center justify-center space-x-4">
            {socialLinks.map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                rel="noreferrer"
                target="_blank"
                className="hover:scale-110 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              >
                <Icon size={30} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
