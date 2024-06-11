import React, { useEffect, useState } from 'react';
import '../css/main.css';
  const Photo = () => {
  const [offsetY, setOffsetY] = useState(50);
  const [scrollDirection, setScrollDirection] = useState('down');
   useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in-photo');
    const fadeOutElements = document.querySelectorAll('.fade-out-photo');
    const handleFadeInsOuts = () => {
      const currentYPos = window.pageYOffset;
      const screenHeight = window.innerHeight;
      const direction = currentYPos > offsetY ? 'down' : 'up';
       setOffsetY(currentYPos);
      setScrollDirection(direction);
       fadeInElements.forEach((fadeIn) => {
        const elementTop = fadeIn.getBoundingClientRect().top;
        if (elementTop < screenHeight && elementTop > 10) {
          const opacity = 1.5 - elementTop / screenHeight;
          fadeIn.style.opacity = opacity;
        }
      });
       fadeOutElements.forEach((fadeOut) => {
        const elementTop = fadeOut.getBoundingClientRect().top;
        const elementBottom = fadeOut.getBoundingClientRect().bottom;
        if (elementBottom < screenHeight && currentYPos === 0) {
          const opacity = elementBottom / screenHeight;
          fadeOut.style.opacity = opacity;
        } else {
          fadeOut.style.opacity = 0;
        }
      });
    };
    window.addEventListener('scroll', handleFadeInsOuts);
    return () => {
      window.removeEventListener('scroll', handleFadeInsOuts);
    };
  }, [offsetY, scrollDirection]);
   return (
    <div
      
      className={`projectPhoto ${
        scrollDirection === 'down' ? 'slide-in' : 'slide-out'
      }`}
    >
      
      
    </div>
    
  );
};
 export default Photo;