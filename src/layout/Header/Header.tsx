'use client';
import React, { useCallback, useState } from 'react';
import styles from './Header.module.scss';
import { LogoMemo } from '@/components/Logo/Logo';
import { SocialsMemo } from '@/components/Socials/Socials';
import { ButtonLink } from '@/components/ui/ButtonLink/ButtonLink';
import { Burger } from '@/components/ui/Burger/Burger';
import { MobileBurger } from '@/components/MobileBurger/MobileBurger';
import { NavbarMemo } from './Navbar/Navbar';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleOpenMenu = useCallback(() => {
    setOpenMenu((prev) => !prev);
  }, [openMenu]);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <LogoMemo />

          <NavbarMemo />
        </div>

        <div className={styles.rightSide}>
          <SocialsMemo />

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
