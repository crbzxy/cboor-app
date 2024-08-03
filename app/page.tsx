// app/page.tsx

import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SplineScene from '@/components/SplineScene'; // Importa el componente

// Definir metadatos usando la Metadata API
export const metadata = {
  title: 'Carlos Boyzo Oregón - Desarrollador Web Front-End y Diseñador UI/UX',
  description:
    'Carlos Boyzo Oregón, un apasionado desarrollador web front-end y diseñador UI/UX con más de 4.5 años de experiencia en la creación de soluciones digitales innovadoras.',
  keywords:
    'Carlos Boyzo Oregón, desarrollador web, front-end, diseñador UI/UX, soluciones digitales, tecnología, innovación, React, Next.js, Tailwind CSS',
  openGraph: {
    title: 'Carlos Boyzo Oregón - Desarrollador Web Front-End y Diseñador UI/UX',
    description:
      'Explora el portafolio de Carlos Boyzo Oregón, un experto en desarrollo web y diseño UI/UX que ofrece soluciones digitales innovadoras.',
    images: [
      {
        url: 'https://carlosboyzo.com/path/to/your/image.png',
        width: 800,
        height: 600,
        alt: 'Carlos Boyzo Oregón - Portafolio',
      },
    ],
    url: 'https://carlosboyzo.com',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="relative h-screen">
      <SplineScene /> {/* Asegúrate de que este componente esté renderizado aquí */}
      <main className="mx-auto max-w-3xl sm:px-6 md:max-w-5xl custom-scrollbar relative p-8 z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
