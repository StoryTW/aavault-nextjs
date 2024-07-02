'use client';
import React, { useState } from 'react';
import styles from './InteractiveBtn.module.scss';
import { motion } from 'framer-motion';
import IconArrow from '@/assets/images/arrow.svg'

export const InteractiveBtn = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    if (isToggled) {
      return;
    }
    setIsToggled(true);
  };

  return (
    <div className={styles.interactiveBtn}>
      <motion.div
        animate={{
          backgroundColor: isToggled ? '#19F9C3' : 'var(--background-main)',
          color: isToggled ? 'var(--background-main)' : 'var(--white)'
        }}
        className={styles.block}
        transition={{ duration: 1 }}
      >
        GET EN EARLY BIRD
      </motion.div>
      <button onClick={handleClick} className={styles.btn}>
        <IconArrow />
      </button>
    </div>
  );
};
