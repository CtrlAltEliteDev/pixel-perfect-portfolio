import React, { useEffect } from 'react';
import './GlitterEffect.scss';

const GlitterEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 1000); // remove after 1s
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // nothing to render — pure effect
};

export default GlitterEffect;
