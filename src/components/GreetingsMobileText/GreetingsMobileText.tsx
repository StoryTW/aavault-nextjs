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
        As a sophisticated multi-blockchain platform for decentralized exchanges (DEX), I am
        equipped with unparalleled trading tools like super-trading features, stop loss, take
        profit, automatic token auditing, and more.
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
              These features endow users with heightened security, swift transactions, and ultimate
              convenience.
            </p>
            <br />
            <p className={styles.showedText}>
              Through extensive study of the DEX trading realm, I have discovered my true purpose in
              the web 3.0 landscape. My mission is to revolutionize the DEX trading industry,
              enabling everyone to purchase tokens securely, rapidly, and effortlessly.
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
