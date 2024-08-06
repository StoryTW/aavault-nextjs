import React from 'react';
import styles from './AdvantageSection.module.scss';

const DATA = [
  {
    title: 'TOOLS',
    description:
      'Users can set stop losses and take profits, protecting against losses and maximizing profits like on CEX',
    image: <></>,
    area: 'tools',
  },
  {
    title: 'Convenience',
    description:
      'Trade effortlessly with our auto audit feature, guarding you from scams and ensuring security',
    image: <></>,
    area: 'conv',
  },
  {
    title: 'SPEED',
    description:
      'Get tokens instantly, dont miss any market movement and act on opportunities. I am speed',
    image: <></>,
    area: 'speed',
  },
  {
    title: 'SAFETY',
    description:
      'We guarantee full data protection and confidentiality. Your information is a cosmic secret with us',
    image: <></>,
    area: 'safety',
  },
];

export const AdvantageSection = () => {
  return (
    <section className={styles.advantage}>
      <h2 className={styles.title}>
        Discover the <span>advantages</span> of AAVAULT
      </h2>
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
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <div className={styles.cardDescription}>{card.description}</div>
                <div className={styles.cardImage}>{card.image}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
