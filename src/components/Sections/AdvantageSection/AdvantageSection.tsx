import React from 'react';
import styles from './AdvantageSection.module.scss';
import Image from 'next/image';

const DATA = [
  {
    title: 'UNIQUE CUSTOMIZATIONS',
    description:
      'We offer unique trading settings that allow each user to experience complete freedom of choice and manage their transactions independently.',
    imageName: 'uniq',
    area: 'uniq',
  },
  {
    title: 'Multi-Blockchain Integration',
    description:
      'AVAULT supports multi-blockchain integration, giving traders access to liquidity across multiple platforms and the ability to trade various assets without switching to other platforms. ',
    imageName: 'multi-blockchain',
    area: 'multi',
  },
  {
    title: 'Rapid transaction processing',
    description:
      'Rapid transaction processing is achieved through advanced smart contracts that automatically select the best routes for completing transactions in the shortest possible time.',
    imageName: 'rapid',
    area: 'rapid',
  },
  {
    title: 'Distinctive tools',
    description:
      'The platform offers a broad spectrum of trading tools, classic swap and limit orders, TWAP orders and much more, as well as unique tools for arbitrage and automated trading.',
    imageName: 'tools',
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
                      objectFit: 'contain',
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
