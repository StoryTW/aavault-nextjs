'use client';
import React from 'react';
import styles from './PartnersSection.module.scss';
import Image from 'next/image';
import { useHydrated } from '@/hooks/useHydrated';
import { useTheme } from 'next-themes';

const DATA = [
  {
    source: 'bnb',
  },
  {
    source: 'solana',
  },
  {
    source: 'polygon',
  },
  {
    source: 'arbitrum',
  },
  {
    source: 'ethereum',
  },
  {
    source: 'uniswap',
  },
  {
    source: 'cardano',
  },
  {
    source: 'pancake-swap',
  },
];

export const PartnersSection = () => {
  const hasHydrated = useHydrated();

  const { theme } = useTheme();

  if (!hasHydrated) return null;

  return (
    <section className={styles.partners}>
      <div className={styles.header}>
        <div className={styles.caption}>&lt; PARTNERS &gt;</div>
        <h2 className={styles.title}>
          OUR <span>FRIENDS</span>
        </h2>
      </div>
      <div className={styles.wrapper}>
        {DATA.map((card, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={
                    theme === 'dark'
                      ? `/images/partners/${card.source}.svg`
                      : `/images/partners/${card.source}-black.svg`
                  }
                  alt={card.source}
                  fill
                  style={{
                    objectFit: 'contain',
                    maxWidth: 305,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
