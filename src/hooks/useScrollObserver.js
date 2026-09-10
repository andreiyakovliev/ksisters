import { useEffect } from 'react';

export function useScrollObserver(selector = '[data-scroll]') {
  useEffect(() => {
    let observer;

    // Чекаємо, поки React точно вставить усі DOM-вузли
    const timer = setTimeout(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('_active');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1, // Елемент вважається видимим, коли покажеться хоча б на 10%
      });

      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [selector]);
}