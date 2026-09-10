import { useEffect } from 'react';

export function useParallax(selector = '[data-parallax]') {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    let ticking = false;

    const updateParallax = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        // Перевірка видимості на екрані
        if (rect.top < windowHeight && rect.bottom > 0) {
          const speed = parseFloat(el.dataset.speed) || 0.2;
          const translateY = -scrollY * speed;

          el.style.setProperty('--parallax-y', `${translateY}px`);
        }
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateParallax(); // Початковий розрахунок

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selector]);
}