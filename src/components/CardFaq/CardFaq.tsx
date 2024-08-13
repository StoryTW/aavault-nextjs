'use client';
import React, { FC, useRef } from 'react';
import styles from './CardFaq.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { animateHelper } from '@/utils/helpers/animations.helper';
import { useHover } from '@/hooks/useHover';

interface ICardFaq {
  id: string;
  question: string;
  answer: string;
  withHoverEffect?: boolean;
}

export const CardFaq: FC<ICardFaq> = ({ id, question, answer, withHoverEffect = false }) => {
  const ref = useRef<HTMLDivElement>(null);

  const isHover = useHover(ref);

  if (withHoverEffect) {
    return (
      <div className={styles.card} ref={ref}>
        <div className={styles.wrapper}>
          <div className={styles.id}>{id}</div>
          <div className={styles.content}>
            <div className={styles.question}>{question}</div>
            <AnimatePresence mode='wait'>
              {isHover && (
                <motion.div
                  key={id}
                  variants={animateHelper('animateHeightWithOpacity')}
                  initial='hide'
                  animate='show'
                  exit='hide'
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <div className={styles.answer}>{answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.id}>{id}</div>
        <div className={styles.content}>
          <div className={styles.question}>{question}</div>
          <div className={styles.answer}>{answer}</div>
        </div>
      </div>
    </div>
  );
};
