import React from 'react';
import styles from './Navbar.module.scss';
import { NAV_DATA } from '@/layout/Footer/Footer';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        {NAV_DATA.map((item, index) => {
          return (
            <Link href={item.link} key={index} className={styles.link}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
