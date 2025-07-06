'use client';

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { freezeOnceVisible = false, ...intersectionObserverOptions } = options;
  
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const elementRef = useRef<HTMLElement>(null);
  const frozen = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen.current || !element) return;

    const observerParams = {
      threshold: 0,
      root: null,
      rootMargin: '50px',
      ...intersectionObserverOptions,
    };

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        const thresholdArray = Array.isArray(observerParams.threshold)
          ? observerParams.threshold
          : [observerParams.threshold];

        entries.forEach((entry) => {
          const isIntersecting =
            entry.isIntersecting &&
            thresholdArray.some((threshold) => entry.intersectionRatio >= threshold);

          setIsIntersecting(isIntersecting);
          setEntry(entry);

          if (isIntersecting && freezeOnceVisible) {
            frozen.current = true;
          }
        });
      },
      observerParams
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [freezeOnceVisible, intersectionObserverOptions]);

  return { ref: elementRef, isIntersecting, entry };
}

// Performance-focused hook for animations
export function useAnimationInView(threshold = 0.1) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    freezeOnceVisible: true,
    rootMargin: '100px 0px',
  });

  useEffect(() => {
    if (isIntersecting) {
      setShouldAnimate(true);
    }
  }, [isIntersecting]);

  return { ref, shouldAnimate };
}
