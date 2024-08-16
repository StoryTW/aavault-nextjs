'use client';
import React, { useRef } from 'react';
import styles from './FooterInput.module.scss';
import IconArrow from '@/assets/images/arrow.svg';
import sendMessageToTelegram from '@/utils/sendMessageToTelegram';

export const FooterInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = async () => {
    const isEmail = String(inputRef.current?.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );

    if (!inputRef.current?.value) {
      inputRef.current?.focus();
      return;
    }
    if (!isEmail) {
      inputRef.current.value = '';
      inputRef.current?.focus();
    }

    sendMessageToTelegram(inputRef.current?.value);
    inputRef.current.value = '';
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
