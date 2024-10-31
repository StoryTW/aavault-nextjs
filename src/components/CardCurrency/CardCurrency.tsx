import React, { FC } from 'react';
import styles from './CardCurrency.module.scss';
// import clsx from 'clsx';

interface ICardCurrency {
  id?: string;
  name: string;
  percent: string;
  count: string;
}

export const CardCurrency: FC<ICardCurrency> = ({ count, name, percent }) => {
  return (
    // <div className={clsx(styles.card, styles[id])}>
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.nameInfo}>
          <div className={styles.name}>{name}</div>
          {/* <div className={clsx(styles.percent, styles[id])}>{percent}</div> */}
          <div className={styles.percent}>{percent}</div>
        </div>
        <div className={styles.count}>{count}</div>
      </div>
    </div>
  );
};
