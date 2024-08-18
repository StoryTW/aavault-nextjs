'use client';
import React, { useRef, useState } from 'react';
import styles from './FooterInput.module.scss';
import IconArrow from '@/assets/images/arrow.svg';
import sendMessageToTelegram from '@/utils/sendMessageToTelegram';
import Image from 'next/image';
import Logo from '@/app/icon32.png';

export const FooterInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleFocus = async () => {
    setIsError(false);
    setIsSuccess(false);
    const isEmail = String(inputRef.current?.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );

    if (!inputRef.current?.value) {
      inputRef.current?.focus();
      setIsError(true);
      return;
    }
    if (!isEmail) {
      inputRef.current.value = '';
      setIsError(true);
      inputRef.current?.focus();
      return;
    }

    sendMessageToTelegram(inputRef.current?.value);
    setIsSuccess(true);
    inputRef.current.value = '';
  };

  return (
    <div className={styles.btnContainer}>
      <div className={styles.inputWrapper}>
        <input
          ref={inputRef}
          className={styles.input}
          onChange={() => {
            setIsSuccess(false);
            setIsError(false);
          }}
          type='email'
          placeholder='ENTER YOUR EMAIL'
          autoComplete='email'
        />
        <button onClick={handleFocus} className={styles.btn} type='button'>
          <IconArrow />
        </button>
      </div>
      {isError && <div className={styles.errorText}>Oops! Check your email!</div>}
      {isSuccess && <div className={styles.errorText}>Gotcha. Welcome aboard, fam!</div>}
    </div>
  );
};
