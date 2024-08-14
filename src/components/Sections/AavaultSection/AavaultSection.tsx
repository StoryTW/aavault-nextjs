'use client';
import React, { useRef } from 'react';
import styles from './AavaultSection.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useHydrated } from '@/hooks/useHydrated';
import { useMediaQuery } from 'react-responsive';
import { AavaultSwiper } from '@/components/AavaultSwiper/AavaultSwiper';

const VIDEO_DATA: IVideoData[] = [
  {
    name: '1_Shield',
  },
  {
    name: '2_Defend',
  },
  {
    name: '3_Speed_1',
  },
  {
    name: '4_SLTP',
  },
];

export const AavaultSection = () => {
  const ref = useRef(null);
  const hasHydrated = useHydrated();

  const isTablet = useMediaQuery({ query: '(max-width: 838px)' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const fontSize = useTransform(scrollYProgress, [0, 1], ['32px', '336px']);

  if (!hasHydrated) {
    return null;
  }

  return (
    <section className={styles.aavaultSection} ref={ref}>
      <div className={styles.wrapper}>
        {isTablet ? (
          <div className={styles.tabletContent}>
            <span className={styles.title}>AAVAULT</span>
            <div className={styles.catalog}>
              <AavaultSwiper data={VIDEO_DATA} />
            </div>
          </div>
        ) : (
          <div className={styles.textWrapper}>
            <motion.span className={styles.text} style={{ fontSize }}>
              AAVAULT
            </motion.span>
          </div>
        )}
      </div>
    </section>
  );
};
