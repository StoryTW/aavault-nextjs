import React from 'react';
import styles from './Footer.module.scss';
import { Logo } from '@/components/Logo/Logo';
import { FooterInput } from '@/components/FooterInput/FooterInput';
import Link from 'next/link';
import { ButtonLink } from '@/components/ui/ButtonLink/ButtonLink';

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
                <Link href={item.link} key={index} className={styles.link}>
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className={styles.socials}>
            <ButtonLink href={'/'}>
              Tw
            </ButtonLink>
            <ButtonLink href={'/'}>
              Tlg
            </ButtonLink>
            <ButtonLink href={'/'}>
              Dis
            </ButtonLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
