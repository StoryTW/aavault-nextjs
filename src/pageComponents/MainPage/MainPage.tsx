import React from 'react';
import styles from './MainPage.module.scss';
import { InteractiveBtn } from '@/components/InteractiveBtn/InteractiveBtn';

export const MainPage = () => {
  return (
    <main className={styles.mainPage}>
      <div className={styles.wrapper}>
        {/* <div className={styles.titleWrp}>
          <h1 className={styles.title}>
            Discover DEX
            <br />
            Trading in a
          </h1>
          <div className={styles.aavault}>&lt;AAVAULT&gt;</div>
          <div className={styles.newWay}>NEW WAY</div>
        </div> */}

        <div className={styles.info}>
          <div className={styles.content}>
            AAVAULT is revolutionizing decentralized
            <br />
            exchanges (DEX) by incorporating the finest
            <br />
            trading tools available
          </div>

          {/* <InteractiveBtn /> */}
        </div>
      </div>
    </main>
  );
};
