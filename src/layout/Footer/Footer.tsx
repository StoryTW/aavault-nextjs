import React from 'react';
import styles from './Footer.module.scss';
import { Logo } from '@/components/Logo/Logo';
import { FooterInput } from '@/components/FooterInput/FooterInput';
import Link from 'next/link';
import { Socials } from '@/components/Socials/Socials';

const NAV_DATA = [
  {
    link: '#about',
    name: 'About Us',
  },
  {
    link: '#tokenomics',
    name: 'Tokenomics',
  },
  {
    link: '#benefits',
    name: 'Benefits',
  },
  {
    link: '#roadmap',
    name: 'Roadmap',
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logoBlock}>
          <Logo className={styles.logo} />
        </div>
        <div className={styles.emailBlock}>
          <div className={styles.title}>
            GET AN <span>EARLY BIRD</span>
          </div>
          <FooterInput />
        </div>
        <div className={styles.navBlock}>
          <nav className={styles.nav}>
            {NAV_DATA.map((item, index) => {
              return (
                <Link href={item.link} key={index} className={styles.link}>
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <Socials />

          <div className={styles.textBlock}>
            <div className={styles.text}>
              &lt; PRIVACY POLICY &gt;
            </div>
            <div className={styles.text}>
              &lt; SECURITY POLICY &gt;
            </div>
            <div className={styles.text}>
              &lt; COOKIES POLICY &gt;
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
