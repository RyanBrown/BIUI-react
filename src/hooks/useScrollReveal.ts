// src/hooks/useScrollReveal.ts
/**
 * useScrollReveal.ts
 *
 * A custom React hook that uses the IntersectionObserver API
 * to add a 'reveal' class to elements when they enter the viewport.
 */

import { useEffect, RefObject } from 'react';

export function useScrollReveal(
  ref: RefObject<HTMLElement>,
  options?: IntersectionObserverInit
): void {
  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('reveal');
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);
}
