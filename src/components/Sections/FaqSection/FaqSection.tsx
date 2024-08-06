import React from 'react';
import styles from './FaqSection.module.scss';
import { CardFaq } from '@/components/CardFaq/CardFaq';

const DATA = [
  {
    id: '<01>',
    question: 'Is your platform secure?',
    answer:
      'Yes, Our Platform Is Designed With Top-Tier Security Measures To Ensure Your Data And Transactions Remain Safe And Confidential.',
  },
  {
    id: '<02>',
    question: 'How safe is my data?',
    answer:
      'The Security Of Your Data Is Our Top Priority. We Use Strict Security Measures To Protect Your Information. In Addition, We Do Not Collect Or Store Any Personal Data Beyond What Is Necessary For The Operation Of Our Platform',
  },
  {
    id: '<03>',
    question: 'Will you have a token?',
    answer:
      'Yes, Our Platform Is Designed With Top-Tier Security Measures To Ensure Your Data And Transactions Remain Safe And Confidential.',
  },
  {
    id: '<04>',
    question: 'What blockchains does your platform support?',
    answer:
      'The Security Of Your Data Is Our Top Priority. We Use Strict Security Measures To Protect Your Information. In Addition, We Do Not Collect Or Store Any Personal Data Beyond What Is Necessary For The Operation Of Our Platform',
  },
];

export const FaqSection = () => {
  return (
    <section className={styles.faq}>
      <h2 className={styles.title}>
        FREQUENTLY ASKED <span>QUESTIONS</span>
      </h2>
      <div className={styles.wrapper}>
        {DATA.map((card) => {
          return (
            <CardFaq key={card.id} id={card.id} question={card.question} answer={card.answer} />
          );
        })}
      </div>
    </section>
  );
};
