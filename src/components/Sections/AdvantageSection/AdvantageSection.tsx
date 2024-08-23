import React from 'react';
import styles from './AdvantageSection.module.scss';
import Image from 'next/image';

const DATA = [
  {
    title: 'UNIQUE CUSTOMIZATIONS',
    description: (
      <>Enjoy complete freedom with unique trading settings, allowing full transaction control.</>
    ),
    imageName: 'uniq',
    area: 'uniq',
  },
  {
    title: 'Blockchain Integration',
    description: (
      <>AAVAULT enables liquidity access across multiple blockchains for seamless asset trading.</>
    ),
    imageName: 'multi-blockchain-2',
    area: 'multi',
  },
  {
    title: 'Speedy Transactions',
    description: (
      <>Advanced smart contracts provide the quickest routes for fast transaction completion.</>
    ),
    imageName: 'rapid',
    area: 'rapid',
  },
  {
    title: 'Distinctive tools',
    description: (
      <>
        Access to trading tools, including swaps, limit and TWAP orders, and unique other features.
      </>
    ),
    imageName: 'tools-2',
    area: 'tools',
  },
];

export const AdvantageSection = () => {
  return (
    <section id='benefits' className={styles.advantage}>
      <div className={styles.titleWrapper}>
        <div className={styles.caption}>&lt; Benefits &gt;</div>
        <h2 className={styles.title}>
          Discover the <span>advantages</span> of AAVAULT
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
                    src={`/images/advantages/${card.imageName}.svg`}
                    alt='service_example'
                    style={{
                      objectFit: 'cover',
                    }}
                    sizes='100vw'
                    priority
                    fill
                  />
                </div>
                <div className={styles.imageTablet}>
                  <Image
                    src={`/images/advantages/${card.imageName}_mob.svg`}
                    alt='service_example'
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
