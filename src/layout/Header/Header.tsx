'use client';
import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Logo } from '@/components/Logo/Logo';
import { Socials } from '@/components/Socials/Socials';
import { ButtonLink } from '@/components/ui/ButtonLink/ButtonLink';
import { Burger } from '@/components/ui/Burger/Burger';
import { MobileBurger } from '@/components/MobileBurger/MobileBurger';
import { Navbar } from './Navbar/Navbar';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <Logo />

          <Navbar />
        </div>

        <div className={styles.rightSide}>
          <Socials />

          <ButtonLink href={'/trade'}>TRADE</ButtonLink>

          <ButtonLink href={'/'} variant='white'>
            EARLY BIRD
          </ButtonLink>
        </div>

        <Burger openMenu={openMenu} toggleOpenMenu={toggleOpenMenu} />
      </div>
      <MobileBurger openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
};
