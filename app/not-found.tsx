import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Página No Encontrada</h1>
      <p className="mt-4 text-lg">Lo sentimos, la página que estás buscando no existe.</p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Volver a la página de inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
