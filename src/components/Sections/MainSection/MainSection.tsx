'use client';
import React, { useRef } from 'react';
import styles from './MainSection.module.scss';
import { InteractiveBtn } from '@/components/InteractiveBtn/InteractiveBtn';
import { ButtonLink } from '@/components/ui/ButtonLink/ButtonLink';
import IconArrow from '@/assets/images/icon-arrow-up.svg';
import { motion, useInView } from 'framer-motion';

export const MainSection = () => {
  const refInfo = useRef(null);
  const refTitle = useRef(null);

  const inViewTitle = useInView(refTitle, {
    once: false,
  });

  const inViewInfo = useInView(refInfo, {
    once: false,
  });

  return (
    <section className={styles.main}>
      <motion.div
        ref={refTitle}
        className={styles.titleWrp}
        initial={{ opacity: 0 }}
        animate={{ opacity: inViewTitle ? 1 : 0 }}
        transition={{ duration: 2 }}
      >
        <h1 className={styles.title}>
          DISCOVER DEX
          <br />
          TRADING IN A
        </h1>
        <div className={styles.aavault}>&lt;PALMA&gt;</div>
        <div className={styles.newWay}>NEW WAY</div>
      </motion.div>

      <motion.div
        ref={refInfo}
        className={styles.info}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: inViewInfo ? 1 : 0, y: inViewInfo ? 0 : 40 }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.content}>
          Palma Network is revolutionizing DeFi by
          <br />
          implementing the best tools to improve the
          <br />
          user experience.
        </div>

        <InteractiveBtn />
      </motion.div>
      <ButtonLink href='#about' className={styles.btn}>
        <IconArrow />
      </ButtonLink>
    </section>
  );
};
