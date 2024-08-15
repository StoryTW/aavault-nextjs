'use client';
import React from 'react';
import styles from './FaqSection.module.scss';
import { CardFaq } from '@/components/CardFaq/CardFaq';
import { FaqSwiper } from '@/components/FaqSwiper/FaqSwiper';
import Image from 'next/image';

const DATA: IFaqModel[] = [
  {
    id: '<01>',
    question: 'What is AAVAULT?',
    answer:
      'AAVAULT is a multi-blockchain DeFi trading platform that ensures secure and efficient operations using smart contracts.',
  },
  {
    id: '<02>',
    question: 'Which blockchains does AAVAULT support?',
    answer:
      'AAVAULT supports all popular blockchains, offering ample opportunities for trading on various decentralized exchanges.',
  },
  {
    id: '<03>',
    question: 'What tools does AAVAULT offer?',
    answer:
      'AAVAULT provides advanced tools like limit with stop-loss, take-profit, twap swap and more, to optimize your trading strategies.',
  },
  {
    id: '<04>',
    question: 'What are the main use cases for $AAVA?',
    answer:
      '$AAVA can be used for trading, staking, reducing transaction fees, and earning rewards within the AAVAULT.',
  },
];

export const FaqSection = () => {
  return (
    <section className={styles.faq}>
      <div className={styles.header}>
        <div className={styles.caption}>&lt; FAQ &gt;</div>
        <h2 className={styles.title}>
          FREQUENTLY ASKED <span>QUESTIONS</span>
        </h2>
      </div>
      <div className={styles.wrapper}>
        {DATA.map((card) => {
          return (
            <CardFaq
              key={card.id}
              id={card.id}
              question={card.question}
              answer={card.answer}
              withHoverEffect
            />
          );
        })}
      </div>

      <div className={styles.swiperBlock}>
        <FaqSwiper data={DATA} />

        <div className={styles.iconSwipe}>
          <Image src={'/images/icon-swipe.svg'} width={24} height={24} alt='icon-swipe' />
        </div>
      </div>
    </section>
  );
};
