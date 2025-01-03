'use client'
import React from 'react';
import styles from './ButtonTheme.module.scss';
import { useTheme } from 'next-themes';
import IconSun from '@/assets/images/theme/icon-sun.svg';
import IconMoon from '@/assets/images/theme/icon-moon.svg';
import { useHydrated } from '@/hooks/useHydrated';

export const ButtonTheme = () => {
  const { theme, setTheme } = useTheme();

  const hasHydrated = useHydrated();

  if (!hasHydrated) {
    return null;
  }


  const handleChangeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <button type='button' tabIndex={-1} className={styles.btn} onClick={handleChangeTheme}>
      {theme === 'dark' ? <IconSun /> : <IconMoon />}
    </button>
  );
};
