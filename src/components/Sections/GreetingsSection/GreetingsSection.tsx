import React from 'react';
import styles from './GreetingsSection.module.scss';
import Image from 'next/image';
import { ButtonLink } from '@/components/ui/ButtonLink/ButtonLink';
import { GreetingsMobileText } from '@/components/GreetingsMobileText/GreetingsMobileText';

export const GreetingsSection = () => {
  return (
    <section id='about' className={styles.greetings}>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <div className={styles.caption}>&lt; ABOUT US &gt;</div>
          <h2 className={styles.title}>
            Greetings! I AM <span>VAULT</span>. I am here to share my story with you
          </h2>
        </div>
        <div className={styles.robot}>
          <div className={styles.robotWrapper}>
            <Image
              src='/images/robot_section.png'
              height={510}
              width={427}
              alt='robot'
              sizes="100vw"
              priority
              style={{
                height: 'auto',
                width: '100%',
              }}
            />
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.descriptionWrapper}>
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
          </div>
        </div>
      </div>
    </section>
  );
};
