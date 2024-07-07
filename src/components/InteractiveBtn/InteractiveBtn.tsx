'use client';
import React, { useRef } from 'react';
import styles from './InteractiveBtn.module.scss';
import IconArrow from '@/assets/images/arrow.svg';

export const InteractiveBtn = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = async () => {
    await fetch('http://localhost:4000/api/db', {
      method: 'POST',
      body: JSON.stringify({
        email: inputRef.current?.value,
      }),
    });
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.interactiveBtn}>
      <input
        ref={inputRef}
        className={styles.input}
        type='email'
        placeholder='GET EN EARLY BIRD'
        autoComplete='email'
      />
      <button onClick={handleFocus} className={styles.btn}>
        <IconArrow />
      </button>
    </div>
  );
};
