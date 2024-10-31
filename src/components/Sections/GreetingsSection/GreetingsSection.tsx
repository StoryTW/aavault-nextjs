'use client';
import React, { useRef } from 'react';
import styles from './GreetingsSection.module.scss';
import { ButtonLink } from '@/components/ui/ButtonLink/ButtonLink';
import { GreetingsMobileText } from '@/components/GreetingsMobileText/GreetingsMobileText';
import { motion, useInView } from 'framer-motion';
import IconPalmaWhite from '@/assets/images/icon-palma.svg';

export const GreetingsSection = () => {
  const refTitle = useRef(null);
  const refImage = useRef(null);
  const refDescription = useRef(null);

  const inViewTitle = useInView(refTitle, {
    once: false,
  });

  const inViewImage = useInView(refImage, {
    once: false,
  });

  const inViewDescription = useInView(refDescription, {
    once: false,
  });

  return (
    <section id='about' className={styles.greetings}>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <div className={styles.caption}>&lt; ABOUT US &gt;</div>
          <motion.h2
            ref={refTitle}
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: inViewTitle ? 1 : 0, y: inViewTitle ? 0 : 40 }}
            transition={{ duration: 0.7 }}
          >
            Palma Network —
            <br />
            AI-Driven Multi-Blockchain Trading Platform
          </motion.h2>
        </div>
        <div className={styles.robot}>
          <motion.div
            ref={refImage}
            className={styles.robotWrapper}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: inViewImage ? 1 : 0, y: inViewImage ? 0 : 40 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.icon}>
              <IconPalmaWhite />
            </div>
          </motion.div>
        </div>
        <div className={styles.description}>
          <motion.div
            className={styles.descriptionWrapper}
            ref={refDescription}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: inViewDescription ? 1 : 0, y: inViewDescription ? 0 : 40 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.text}>
              Palma Network is a next-gen multi-blockchain trading platform that combines AI-Powered
              tools with advanced trading options for secure, efficient transactions.
              <br />
              <br />
              Palma’s unique mix of AI-driven features, advanced tools and innovative technology
              directly addresses the market’s demand for scalability, security, and high
              performance, enabling traders to maximize efficiency across multiple networks.
            </div>

            <GreetingsMobileText />

            <ButtonLink
              href='https://whitepaper.palma.network'
              target='_blank'
              className={styles.link}
            >
              CHECK WHITEPAPER
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
