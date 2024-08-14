'use client';
import React from 'react';
import styles from './Footer.module.scss';
import { Logo } from '@/components/Logo/Logo';
import { FooterInput } from '@/components/FooterInput/FooterInput';
import Link from 'next/link';
import { Socials } from '@/components/Socials/Socials';
import IconArrow from '@/assets/images/icon-arrow-up.svg';
import { ButtonIcon } from '@/components/ui/ButtonIcon/ButtonIcon';

export const NAV_DATA = [
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

const TEXT_DATA = [
  '< PRIVACY POLICY >',
  '< SECURITY POLICY >',
  '< COOKIES POLICY >',
  '< WHITEPAPER >',
];

export const scrollToTop = () => {
  if (window !== undefined) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logoBlock}>
          <Logo className={styles.logo} />
          <div className={styles.policy}>
            {TEXT_DATA.map((item, index) => {
              return (
                <div key={index} className={styles.policyText}>
                  {item}
                </div>
              );
            })}
          </div>
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

          <div className={styles.socialWrapper}>
            <Socials />
            <ButtonIcon icon={<IconArrow />} onClick={scrollToTop}/>
          </div>

          <div className={styles.textBlock}>
            <div className={styles.text}>&lt; PRIVACY POLICY &gt;</div>
            <div className={styles.text}>&lt; SECURITY POLICY &gt;</div>
            <div className={styles.text}>&lt; COOKIES POLICY &gt;</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
