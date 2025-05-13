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
    title: 'Q1 2025',
    offset: 74,
    dividerHeight: 141,
    leftOffset: 31,
    circleHeight: 91,
    delay: 0.5,
    data: [
      {
        text: '< Integrate BSC, Ethereum, Base, Apechain, Polygon and Arbitrum blockchains >',
      },
      {
        text: '< Develop and deploy limit orders >',
      },
      {
        text: '< Conduct beta testing >',
      },
    ],
  },
  {
    id: 2,
    title: 'Q2 2025',
    offset: 186,
    dividerHeight: 253,
    leftOffset: 61,
    circleHeight: 94,
    delay: 1.5,
    data: [
      {
        text: '< Develop and deploy TWAP-swap >',
      },
      {
        text: '< Build a Telegram bot >',
      },
      {
        text: '< Incorporate the company and close the Pre-Seed round >',
      },
    ],
  },
  {
    id: 3,
    title: 'Q3 2025',
    offset: 246,
    dividerHeight: 345,
    leftOffset: 104,
    circleHeight: 134,
    delay: 2.5,
    data: [
      {
        text: '< Deploy our own nodes >',
      },
      {
        text: '< Develop a swap on the Solana blockchain >',
      },
      {
        text: '< Implement on-chain analytics >',
      },
    ],
  },
  {
    id: 4,
    title: 'Q4 2025',
    offset: 213,
    dividerHeight: 261,
    leftOffset: 61,
    circleHeight: 90,
    delay: 3.5,
    data: [
      {
        text: '< Build cross-chain trading functionality >',
      },
      {
        text: '< Develop limit orders on the Solana blockchain >',
      },
      {
        text: '< Develop a swap on the Sui blockchain >',
      },
    ],
  },
  {
    id: 5,
    title: 'Q1 2026',
    offset: 93,
    dividerHeight: 154,
    leftOffset: 31,
    circleHeight: 90,
    delay: 0.5,
    data: [
      {
        text: '< Develop limit orders on the Sui blockchain >',
      },
      {
        text: '< Develop a TWAP-swap on Sui blockchain >',
      },
      {
        text: '< Develop a TWAP-swap on Solana blockchain >',
      },
    ],
  },
  {
    id: 6,
    title: 'Q2 2026',
    offset: 213,
    dividerHeight: 261,
    leftOffset: 61,
    circleHeight: 90,
    delay: 1.5,
    data: [
      {
        text: '< Raise the Seed round >',
      },
      {
        text: '< Develop Telegram Mini Apps >',
      },
      {
        text: '< Launch new AI-powered tools >',
      },
    ],
  },
  {
    id: 7,
    title: 'Q3 2026',
    offset: 246,
    dividerHeight: 345,
    leftOffset: 104,
    circleHeight: 134,
    delay: 2.5,
    data: [
      {
        text: '< Develop a Split-swap in EVM-compatible chains >',
      },
      {
        text: '< Design the project’s tokenomics >',
      },
    ],
  },
  {
    id: 8,
    title: 'Q4 2026',
    offset: 93,
    dividerHeight: 154,
    leftOffset: 31,
    circleHeight: 90,
    delay: 3.5,
    data: [
      {
        text: '< Develop a Slice-swap in EVM-compatible chains >',
      },
      {
        text: '< Issue the $PALMA token >',
      },
      {
        text: '< Develop the staking system >',
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
    }, 4000);

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
