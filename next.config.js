/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Activar React Strict Mode para ayudar a identificar problemas potenciales en tu aplicación.
  swcMinify: true, // Usar el minificador SWC para mejorar el rendimiento de construcción.

  images: {
    remotePatterns: [
      {
        protocol: 'https', // Especifica el protocolo, por ejemplo, 'https'
        hostname: 'carlosboyzo.com', // Dominio permitido
        port: '', // Deja vacío si no necesitas un puerto específico
        pathname: '/**', // Permite todas las rutas desde este dominio
      },
    ],
    formats: ['image/avif', 'image/webp'], // Habilitar formatos de imagen modernos para mejorar la carga.
  },
  i18n: {
    locales: ['es', 'en'], // Configurar internacionalización si es necesario.
    defaultLocale: 'es', // Establecer el idioma predeterminado.
  },
  webpack: (config, { isServer }) => {
    // Configuraciones adicionales de Webpack, si las necesitas
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
