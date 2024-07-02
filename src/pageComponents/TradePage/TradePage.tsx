import React from 'react';
import styles from './TradePage.module.scss';
import Image from 'next/image';

export const TradePage = () => {
  return (
    <main className={styles.tradePage}>
      <h1 className={styles.title}>
        Soon.
      </h1>

      <div className={styles.robot}/>


      {/* <Image
        src={'/images/robot.png'}
        alt='robot'
        height={882}
        width={1100}
        className={styles.robot}
      /> */}
    </main>
  );
};
