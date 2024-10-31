'use client';
import React from 'react';
import styles from './AdvantageSection.module.scss';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useHydrated } from '@/hooks/useHydrated';

const DATA = [
  {
    title: 'UNIQUE CUSTOMIZATIONS',
    description: (
      <>
        We offer unique trading settings that allow each user to experience complete freedom of
        choice and manage their transactions independently.
      </>
    ),
    imageName: 'uniq',
    area: 'uniq',
  },
  {
    title: 'Blockchain Integration',
    description: (
      <>
        Palma Network provides multi-blockchain integration, enabling traders to access
        cross-network liquidity and trade various assets seamlessly, all in one platform.
      </>
    ),
    imageName: 'multi-blockchain',
    area: 'multi',
  },
  {
    title: 'Speedy Transactions',
    description: (
      <>
        Rapid transaction processing is achieved through advanced smart contracts that automatically
        select the best routes for completing transactions in the shortest possible time.
      </>
    ),
    imageName: 'rapid',
    area: 'rapid',
  },
  {
    title: 'Distinctive tools',
    description: (
      <>
        Palma Network provides a robust suite of AI-based tools, including swap, limit, split, and
        twap orders, along with cross-chain capabilities, own rollups, real-time market analysis and
        much more.
      </>
    ),
    imageName: 'tools',
    area: 'tools',
  },
];

export const AdvantageSection = () => {
  const hasHydrated = useHydrated();

  const { theme } = useTheme();

  if (!hasHydrated) return null;

  return (
    <section id='benefits' className={styles.advantage}>
      <div className={styles.titleWrapper}>
        <div className={styles.caption}>&lt; Benefits &gt;</div>
        <h2 className={styles.title}>
          Discover the <span>advantages</span> of PALMA
        </h2>
      </div>
      <div className={styles.wrapper}>
        {DATA.map((card) => {
          return (
            <div
              key={card.title}
              className={styles.card}
              style={{
                gridArea: card.area,
              }}
            >
              <div className={styles.cardWrapper}>
                <div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <div className={styles.cardDescription}>{card.description}</div>
                </div>
                <div className={styles.imageDesktop}>
                  <Image
                    src={
                      theme === 'dark'
                        ? `/images/advantages/${card.imageName}.svg`
                        : `/images/advantages/${card.imageName}-white.svg`
                    }
                    alt='service_example'
                    style={{
                      objectFit: 'contain',
                    }}
                    sizes='100vw'
                    priority
                    fill
                  />
                </div>
                <div className={styles.imageTablet}>
                  <Image
                    src={
                      theme === 'dark'
                        ? `/images/advantages/${card.imageName}_mob.svg`
                        : `/images/advantages/${card.imageName}_mob-white.svg`
                    }
                    alt={card.imageName}
                    style={{
                      objectFit: 'contain',
                    }}
                    sizes='100vw'
                    priority
                    fill
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
