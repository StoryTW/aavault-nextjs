'use client';
import React, { useRef } from 'react';
import styles from './AavaultSection.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AavaultSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const fontSize = useTransform(scrollYProgress, [0, 1], ['32px', '336px']);

  return (
    <section className={styles.aavaultSection} ref={ref}>
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <motion.span className={styles.text} style={{ fontSize }}>AAVAULT</motion.span>
        </div>
      </div>
    </section>
  );
};
