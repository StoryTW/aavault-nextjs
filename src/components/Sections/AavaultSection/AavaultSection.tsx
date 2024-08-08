'use client';
import React, { useEffect, useState } from 'react';
import styles from './AavaultSection.module.scss';

export const AavaultSection = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newSize = 1 + scrollPosition / 1000; 
      setScale(newSize); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.aavaultSection}>
      <div className={styles.wrapper}>
        <div
          className={styles.text}
          style={{
            transform: `scale(${scale})`,
          }}
        >
          AAVAULT
        </div>
      </div>
    </section>
  );
};
