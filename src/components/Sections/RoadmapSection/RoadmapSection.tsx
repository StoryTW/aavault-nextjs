import React from 'react';
import styles from './RoadmapSection.module.scss';
import { RoadmapBlock } from '@/components/RoadmapBlock/RoadmapBlock';

const DATA = [
  {
    id: 1,
    title: 'Q2 2024',
    offset: 74,
    dividerHeight: 141,
    data: [
      {
        text: '< Alpha version >',
      },
      {
        text: '< Blockchain integration >',
      },
      {
        text: '< Waitlists >',
      },
    ],
  },
  {
    id: 2,
    title: 'Q3 2024',
    offset: 186,
    dividerHeight: 253,
    data: [
      {
        text: '< Full version launch >',
      },
      {
        text: '< Marketing >',
      },
      {
        text: '< Private round >',
      },
    ],
  },
  {
    id: 3,
    title: 'Q4 2024',
    offset: 246,
    dividerHeight: 345,
    data: [
      {
        text: '< New blockchain integration >',
      },
      {
        text: '< Mobile Version >',
      },
      {
        text: '< Listings On CMC And CoinGecko >',
      },
      {
        text: '< Round A >',
      },
    ],
  },
  {
    id: 4,
    title: 'Q1 2025',
    offset: 213,
    dividerHeight: 261,
    data: [
      {
        text: '< DEX and CEX listings >',
      },
      {
        text: '< New blockchain integration >',
      },
    ],
  },
  {
    id: 5,
    title: 'Q2 2025',
    offset: 93,
    dividerHeight: 154,
    data: [
      {
        text: '< Further blockchain integration >',
      },
      {
        text: '< Staking >',
      },
    ],
  },
];

export const RoadmapSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>ROADMAP</h2>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.blocks}>
            {DATA.map((block) => {
              return (
                <RoadmapBlock
                  key={block.id}
                  title={block.title}
                  dividerHeight={block.dividerHeight}
                  dataList={block.data}
                  offset={block.offset}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
