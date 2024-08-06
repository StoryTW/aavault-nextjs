import React from 'react';
import styles from './Footer.module.scss';
import { Logo } from '@/components/Logo/Logo';
import { FooterInput } from '@/components/FooterInput/FooterInput';
import Link from 'next/link';

const NAV_DATA = [
  {
    link: '/',
    name: 'About Us',
  },
  {
    link: '/',
    name: 'Tokenomics',
  },
  {
    link: '/',
    name: 'Benefits',
  },
  {
    link: '/',
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
                <Link href={item.link} key={index}>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};
