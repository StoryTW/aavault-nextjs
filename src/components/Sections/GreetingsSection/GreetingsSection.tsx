'use client';
import React, { useRef } from 'react';
import styles from './GreetingsSection.module.scss';
import Image from 'next/image';
import { ButtonLink } from '@/components/ui/ButtonLink/ButtonLink';
import { GreetingsMobileText } from '@/components/GreetingsMobileText/GreetingsMobileText';
import { motion, useInView } from 'framer-motion';

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
            Greetings! I AM <span>VAULT</span>. I am here to share my story with you
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
            <Image
              src='/images/robot_section.png'
              height={510}
              width={427}
              alt='robot'
              sizes='100vw'
              priority
              style={{
                height: 'auto',
                width: '100%',
              }}
            />
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
              As a multi-blockchain terminal for decentralized exchanges (DEX), I offer unmatched
              trading tools such as sniper trading, stop loss, take profit, automatic token auditing
              and more, providing users with enhanced security, speed and convenience
              <br />
              <br />I have studied the DEX trading field well and realized my purpose in the web 3.0
              world. My mission is to change the DEX trading industry by allowing everyone to buy
              tokens securely, quickly and conveniently without hassle
            </div>

            <GreetingsMobileText />

            <ButtonLink href={'/'} className={styles.link}>
              CHECK WHITEPAPER
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
