import React from 'react';
import styles from './MainPage.module.scss';
import { MainSection } from '@/components/Sections/MainSection/MainSection';
import { FaqSection } from '@/components/Sections/FaqSection/FaqSection';
import { GreetingsSection } from '@/components/Sections/GreetingsSection/GreetingsSection';
import { AdvantageSection } from '@/components/Sections/AdvantageSection/AdvantageSection';
import { NativeCurrencySection } from '@/components/Sections/NativeCurrencySection/NativeCurrencySection';

export const MainPage = () => {
  return (
    <main className={styles.mainPage}>
      <MainSection />

      <GreetingsSection />

      <AdvantageSection />

      {/* <AavaultSection/>  */}

      <NativeCurrencySection />

      {/* <RoadmapSection /> */}

      <FaqSection />
    </main>
  );
};
