import { useEffect } from 'react';

export function useScrollObserver(selector = '[data-scroll]') {
  useEffect(() => {
    let observer;

    const timer = setTimeout(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('_active');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
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