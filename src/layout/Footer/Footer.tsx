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

const POLICY_DATA = [
  {
    href: 'privacy_policy',
    text: '< PRIVACY POLICY >',
  },
  {
    href: 'security_policy',
    text: '< SECURITY POLICY >',
  },
  {
    href: 'cookies_policy',
    text: '< COOKIES POLICY >',
  },
  {
    href: 'https://whitepaper.aavault.io',
    text: '< WHITEPAPER >',
  },
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
            {POLICY_DATA.map((item, index) => {
              if (item.href.includes('https://')) {
                return (
                  <a
                    key={index}
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.policyText}
                  >
                    {item.text}
                  </a>
                );
              }

              return (
                <a
                  key={index}
                  href={`/files/${item.href}.pdf`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.policyText}
                >
                  {item.text}
                </a>
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
            <ButtonIcon icon={<IconArrow />} onClick={scrollToTop} />
          </div>

          <div className={styles.textBlock}>
            <a
              href='/files/privacy_policy.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.text}
            >
              &lt; PRIVACY POLICY &gt;
            </a>
            <a
              href='/files/security_policy.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.text}
            >
              &lt; SECURITY POLICY &gt;
            </a>
            <a
              href='/files/cookies_policy.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.text}
            >
              &lt; COOKIES POLICY &gt;
            </a>
            <a
              href='https://whitepaper.aavault.io'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.text}
            >
              &lt; WHITEPAPER &gt;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
