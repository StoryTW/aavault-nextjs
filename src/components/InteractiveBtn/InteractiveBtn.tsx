'use client';
import React, { useRef } from 'react';
import styles from './InteractiveBtn.module.scss';
import IconArrow from '@/assets/images/arrow.svg';

export const InteractiveBtn = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = async () => {
    if (inputRef.current) {
      const email = inputRef.current.value;
      console.log('Sending email:', email);

      const response = await fetch('https://aavault.io/api/db', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Email successfully saved');
      } else {
        console.error('Failed to save email:', response.statusText);
      }

      if (inputRef.current) {
        inputRef.current.focus();
      }
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
