'use client'
import React, { useRef } from 'react';
import styles from './FooterInput.module.scss'
import IconArrow from '@/assets/images/arrow.svg';

export const FooterInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        ref={inputRef}
        className={styles.input}
        type='email'
        placeholder='ENTER YOUR EMAIL'
        autoComplete='email'
      />
      <button onClick={handleFocus} className={styles.btn} type='button'>
        <IconArrow />
      </button>
    </div>
  );
};
