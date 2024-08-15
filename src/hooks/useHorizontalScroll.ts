import { useRef, useEffect } from 'react';

export const useHorizontalScroll = () => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;

    if (el) {
      const onWheel = (e: any) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 5, // Adjust the multiplier as needed
          behavior: 'smooth',
        });
      };

      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return elRef;
};
