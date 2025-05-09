'use client';
import React from 'react';
import styles from './FaqSection.module.scss';
import { CardFaq } from '@/components/CardFaq/CardFaq';
import { FaqSwiper } from '@/components/FaqSwiper/FaqSwiper';
import Image from 'next/image';

const DATA: IFaqModel[] = [
  {
    id: '<01>',
    question: 'What is the PALMA?',
    answer: 'A multi-blockchain CeDeFi platform with integrated security and efficiency features.',
  },
  {
    id: '<02>',
    question: 'What tools does PALMA offer?',
    answer: 'Various types of swap, such as TWAP swap, transfer, orders with SL and TP, and more AI-Powered tools',
  },
  {
    id: '<03>',
    question: 'Supported Blockchains?',
    answer: 'PALMA supports multiple blockchains, enabling diverse trading options.',
  },
  {
    id: '<04>',
    question: 'Exclusive AI Tools?',
    answer: 'AI analyzes and identifies potential risks, predicts prices, and instantly reacts to trends.',
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
