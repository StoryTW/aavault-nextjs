// import React, { useEffect, useRef, useState } from 'react';
import React from 'react';
import styles from './NativeCurrencySection.module.scss';
import { CardCurrency } from '@/components/CardCurrency/CardCurrency';
import Image from 'next/image';
// import { useInView } from 'framer-motion';

const DATA = [
  {
    id: 'private',
    name: 'Private Round',
    percent: '(4%)',
    count: '400 Million',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    percent: '(5%)',
    count: '500 Million',
  },
  {
    id: 'dao',
    name: 'DAO',
    percent: '(6%)',
    count: '600 Million',
  },
  {
    id: 'liquidity',
    name: 'Liquidity',
    percent: '(12%)',
    count: '1.2 Billion',
  },
  {
    id: 'seria',
    name: 'Seria A',
    percent: '(12%)',
    count: '1.2 Billion',
  },
  {
    id: 'reserves',
    name: 'Reserves',
    percent: '(14%)',
    count: '1.4 Billion',
  },
  {
    id: 'airdrop',
    name: 'Airdrop',
    percent: '(15%)',
    count: '1.5 Billion',
  },
  {
    id: 'foundations',
    name: 'Foundations',
    percent: '(16%)',
    count: '1.6 Billion',
  },
  {
    id: 'team',
    name: 'Team & Advisers',
    percent: '(16%)',
    count: '1.6 Billion',
  },
];

export const NativeCurrencySection = () => {
  // const scrollRef = useRef<HTMLUListElement | null>(null);

  // const inView = useInView(scrollRef, {
  //   once: true,
  // });

  // useEffect(() => {
  //   let timeout: NodeJS.Timeout;

  //   if (inView && scrollRef.current) {
  //     timeout = setTimeout(() => {
  //       if (scrollRef.current) {
  //         scrollRef.current.scrollTo({
  //           top: scrollRef.current.scrollHeight,
  //           behavior: 'smooth',
  //         });
  //       }
  //     }, 500);
  //   }

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [inView]);

  // useEffect(() => {
  //   if (inView && scrollRef.current) {
  //     const handleScroll = () => {
  //       if (scrollRef.current) {
  //         scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  //       }
  //     };
  //     requestAnimationFrame(handleScroll);
  //   }
  // }, [inView]);

  return (
    <section id='tokenomics' className={styles.nativeCurrency}>
      <div className={styles.header}>
        <div className={styles.caption}>&lt; Token and tokenomics &gt;</div>
        <h2 className={styles.title}>
          $AAVA IS THE ICONIC <span>currency</span>
        </h2>
        <div className={styles.description}>
          Maximize your experience with the $AAVL token: enjoy exclusive access, reduced fees,
          staking rewards, and DAO governance.<br/> Join the whitelist for a chance to be part of our
          journey.
        </div>
      </div>
      <div className={styles.content}>
        <ul className={styles.list}>
          {DATA.map((card) => {
            return (
              <li key={card.name}>
                <CardCurrency
                  name={card.name}
                  id={card.id}
                  count={card.count}
                  percent={card.percent}
                />
              </li>
            );
          })}
        </ul>
        <div className={styles.image}>
          <Image
            src={'/images/circle.png'}
            width={629}
            height={629}
            alt='diagram'
            sizes='100vw'
            priority
            style={{
              height: 'auto',
              width: '100%',
            }}
          />
        </div>
      </div>
    </section>
  );
};
