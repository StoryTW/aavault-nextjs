'use client';
import React, { useEffect } from 'react';
import styles from './RoadmapSection.module.scss';
import { RoadmapBlock } from '@/components/RoadmapBlock/RoadmapBlock';
import { RoadmapBlockMobile } from '@/components/RoadmapBlockMobile/RoadmapBlockMobile';
import { useInView } from 'framer-motion';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';

const DATA = [
  {
    id: 1,
    title: 'Q2 2024',
    offset: 74,
    dividerHeight: 141,
    leftOffset: 31,
    circleHeight: 91,
    delay: 0.5,
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
    delay: 1.5,
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
    delay: 2.5,
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
    delay: 3.5,
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
    delay: 2.1,
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
  const elRef = useHorizontalScroll();

  const inView = useInView(elRef, {
    once: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inView && elRef.current) {
        elRef.current.scrollTo({
          left: elRef.current.scrollWidth,
          behavior: 'smooth',
        });
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [inView, elRef.current]);

  return (
    <section id='roadmap' className={styles.section}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>ROADMAP</h2>
        <span className={styles.caption}>&lt; 2024-2025 &gt;</span>
      </div>
      <div className={styles.content} ref={elRef}>
        <div className={styles.wrapper}>
          {DATA.map((block) => {
            return (
              <RoadmapBlock
                key={block.id}
                title={block.title}
                dividerHeight={block.dividerHeight}
                dataList={block.data}
                offset={block.offset}
                delay={block.delay}
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
