'use client';
import React, { useRef, useState } from 'react';
import styles from './InteractiveBtn.module.scss';
import IconArrow from '@/assets/images/arrow.svg';
import sendMessageToTelegram from '@/utils/sendMessageToTelegram';
import Logo from '@/app/icon32.png';
import Image from 'next/image';

export const InteractiveBtn = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const handleFocus = async () => {
    setIsError(false);
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
    }

    sendMessageToTelegram(inputRef.current?.value);
    inputRef.current.value = '';
  };

  return (
    <div className={styles.btnContainer}>
      <div className={styles.interactiveBtn}>
        <input
          ref={inputRef}
          className={styles.input}
          onChange={() => setIsError(false)}
          type='email'
          placeholder='GET EN EARLY BIRD'
          autoComplete='email'
          id='email'
        />
        <button onClick={handleFocus} className={styles.btn}>
          <IconArrow />
        </button>
      </div>
      {isError && (
        <div className={styles.errorText}>
          <Image src={Logo} alt='' width={32} height={32} /> Oops! Check your email!
        </div>
      )}
    </div>
  );
};
