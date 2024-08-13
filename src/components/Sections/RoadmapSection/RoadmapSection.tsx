import React from 'react';
import styles from './RoadmapSection.module.scss';
import { RoadmapBlock } from '@/components/RoadmapBlock/RoadmapBlock';
import { RoadmapBlockMobile } from '@/components/RoadmapBlockMobile/RoadmapBlockMobile';

const DATA = [
  {
    id: 1,
    title: 'Q2 2024',
    offset: 74,
    dividerHeight: 141,
    leftOffset: 31,
    circleHeight: 91,
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
    leftOffset: 61,
    circleHeight: 94,
    data: [
      {
        text: '< Demo version >',
      },
      {
        text: '< Marketing >',
      },
      {
        text: '< Airdrop >',
      },
    ],
  },
  {
    id: 3,
    title: 'Q4 2024',
    offset: 246,
    dividerHeight: 345,
    leftOffset: 104,
    circleHeight: 134,
    data: [
      {
        text: '< New blockchain integration >',
      },
      {
        text: '< Full version >',
      },
      {
        text: '< Listings On CMC And CoinGecko >',
      },
      {
        text: '< Tournaments >',
      },
    ],
  },
  {
    id: 4,
    title: 'Q1 2025',
    offset: 213,
    dividerHeight: 261,
    leftOffset: 61,
    circleHeight: 90,
    data: [
      {
        text: '< DEX and CEX listings >',
      },
      {
        text: '< Staking >',
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
    leftOffset: 31,
    circleHeight: 90,
    data: [
      {
        text: '< Mobile version >',
      },
      {
        text: '< NFT marketplace >',
      },
      {
        text: '< Apps >',
      },
    ],
  },
];

export const RoadmapSection = () => {
  return (
    <section id='roadmap' className={styles.section}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>ROADMAP</h2>
        <span className={styles.caption}>&lt; 2024-2025 &gt;</span>
      </div>
      <div className={styles.content}>
        <div className={styles.wrapper}>
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

      <div className={styles.mobileContent}>
        {DATA.map((block) => {
          return (
            <RoadmapBlockMobile
              key={block.id}
              title={block.title}
              circleHeight={block.circleHeight}
              dataList={block.data}
              offset={block.leftOffset}
            />
          );
        })}
      </div>
    </section>
  );
};
