import React from 'react';
import styles from './NativeCurrencySection.module.scss';
import { CardCurrency } from '@/components/CardCurrency/CardCurrency';
import Image from 'next/image';

const DATA = [
  {
    id: 'preseed',
    name: 'Pre-seed Round',
    percent: '5% > TGE 5% > 12 month, Linear',
    count: '50 Million',
  },
  {
    id: 'private',
    name: 'Private Round',
    percent: '10% > TGE 5% > 12 month, Linear',
    count: '100 Million',
  },
  {
    id: 'liquidity',
    name: 'Liquidity',
    percent: '(25%)',
    count: '250 Million',
  },
  {
    id: 'eco',
    name: 'Ecosystem & Community',
    percent: '35%',
    count: '350 Million',
  },
  {
    id: 'airdrop',
    name: 'Airdrop',
    percent: '5%',
    count: '50 Million',
  },
  {
    id: 'advisers',
    name: 'Advisers',
    percent: '2% > Cliff 6 month > 12 Month, Linear',
    count: '20 Million',
  },
  {
    id: 'partners',
    name: 'Strategic Partners',
    percent: '3% > TGE 5% > 12 Month, Linear',
    count: '30 Million',
  },
  {
    id: 'team',
    name: 'Team & Advisers',
    percent: '15% > TGE 0% > Cliff 6 month > 24 Month, Linear',
    count: '150 Million',
  },
];

export const NativeCurrencySection = () => {
  return (
    <section id='tokenomics' className={styles.nativeCurrency}>
      <div className={styles.header}>
        <div className={styles.caption}>&lt; Token and tokenomics &gt;</div>
        <h2 className={styles.title}>
          $AAVA IS THE ICONIC <span>currency</span>
        </h2>
        <div className={styles.description}>
          Enhance your journey with the $AAVA token: indulge in exclusive access, reduced fees,
          staking rewards, and participate in DAO governance
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
            src={'/images/tokenomicsCircle.webp'}
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
