'use client';
import React, { useState } from 'react';
import styles from './GreetingsMobileText.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { animateHelper } from '@/utils/helpers/animations.helper';
import IconArrow from '@/assets/images/arrow.svg';
import clsx from 'clsx';

export const GreetingsMobileText = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.mobile}>
      <div className={styles.text}>
        As a cutting-edge multi-blockchain platform for decentralized exchanges (DEX), Palma Network
        offers unparalleled tools like TWAP swaps, split orders, stop-loss/take-profit, real-time AI
        token audits and more AI-Powered tools.
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={animateHelper('animateHeightWithOpacity')}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{
              duration: 0.3,
            }}
          >
            <br />
            <p className={styles.showedText}>
              These innovations give users unmatched security, faster transactions, and ultimate
              ease of use.
            </p>
            <br />
            <p className={styles.showedText}>
              Through a deep understanding of the DEX trading world, I’ve honed my mission in the
              web 3.0 space: to transform DEX trading, empowering everyone to trade tokens securely,
              swiftly, and seamlessly.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.btnWrapper}>
        <button
          className={clsx(styles.btn, {
            [styles.open]: open,
          })}
          type='button'
          onClick={toggleOpen}
        >
          {open ? 'Hide' : 'More'} <IconArrow />
        </button>
      </div>
    </div>
  );
};
