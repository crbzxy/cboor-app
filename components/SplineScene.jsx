// components/SplineScene.jsx

'use client'; // Este es un componente cliente

import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const SplineScene = () => {
  const splineRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (splineRef.current) {
        const scene = splineRef.current;
        const camera = scene.camera;
        if (camera) {
          camera.position.z = 1 + scrollY / 500;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Spline
      scene="https://prod.spline.design/9JgSXdnaX496fbRG/scene.splinecode"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1,
        opacity: 0.1, // Establece la opacidad aquí
      }}
      onLoad={(spline) => {
        splineRef.current = spline;
      }}
      onError={(error) => {
        console.error('Error loading Spline scene:', error);
      }}
    />
  );
};

export default SplineScene;
