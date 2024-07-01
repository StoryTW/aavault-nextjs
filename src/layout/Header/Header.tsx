import React from 'react';
import styles from './Header.module.scss';
import { Logo } from '@/components/Logo/Logo';
import { Socials } from '@/components/Socials/Socials';
import { ButtonLink } from '@/components/ui/ButtonLink/ButtonLink';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />

        <div className={styles.rightSide}>
          <Socials />

          <ButtonLink href={'/trade'}>
            TRADE
          </ButtonLink>

          <ButtonLink href={'/'} variant='white'>
              EARLY BIRD
          </ButtonLink>
        </div>
      </div>
    </header>
  );
};
