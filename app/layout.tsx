'use client';
import '../styles/globals.css';
import Head from './head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es-mx'>
      <Head />
      <body className='dark:bg-gray-950 scrollbar-hide flex flex-col min-h-screen'>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Navbar />
         
            {children}
       
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
