'use client';
import React from 'react';
import styles from './AavaultSection.module.scss';
import { AavaultSwiper } from '@/components/AavaultSwiper/AavaultSwiper';
// import { motion, useScroll, useTransform } from 'framer-motion';
import { useHydrated } from '@/hooks/useHydrated';
// import { useMediaQuery } from 'react-responsive';

const VIDEO_DATA: IVideoData[] = [
  // {
  //   name: '1_Shield',
  // },
  {
    name: 'coin_video',
  },
  // {
  //   name: '2_Defend',
  // },
  // {
  //   name: '3_Speed_1',
  // },
  // {
  //   name: '4_SLTP',
  // },
];

export const AavaultSection = () => {
  const hasHydrated = useHydrated();
  // const ref = useRef(null);

  // const isTablet = useMediaQuery({ query: '(max-width: 838px)' });

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['start end', 'end start'],
  // });

  // const fontSize = useTransform(scrollYProgress, [0, 1], ['32px', '336px']);

  if (!hasHydrated) {
    return null;
  }

  return (
    // <section className={styles.aavaultSection} ref={ref}>
    <section className={styles.aavaultSection}>
      <div className={styles.wrapper}>
        {/* {isTablet ? (
          <div className={styles.tabletContent}>
            <span className={styles.title}>AAVAULT</span>
            <div className={styles.catalog}>
              <AavaultSwiper data={VIDEO_DATA} />
            </div>
          </div>
        ) : (
          <div className={styles.desktopContent}>
            <div className={styles.textWrapper}>
              <motion.span className={styles.text} style={{ fontSize }}>
                AAVAULT
              </motion.span>
            </div>
            <div className={styles.cardVideo}>
              <video
                className={styles.video}
                width={'100%'}
                height={'100%'}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={`/video/advantages/1_Shield.mp4`} type='video/mp4' />
              </video>
            </div>
          </div>
        )} */}

        <div className={styles.tabletContent}>
          <span className={styles.title}>PALMA</span>
          <div className={styles.catalog}>
            <AavaultSwiper data={VIDEO_DATA} />
          </div>
        </div>
      </div>
    </section>
  );
};
