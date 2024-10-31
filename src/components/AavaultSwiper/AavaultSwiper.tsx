'use client';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Mousewheel } from 'swiper/modules';
import styles from './AavaultSwiper.module.scss';
// import { useTheme } from 'next-themes';
// import { useHydrated } from '@/hooks/useHydrated';

interface IAavaultSwiper {
  data: IVideoData[];
}

export const AavaultSwiper: FC<IAavaultSwiper> = ({ data }) => {
  // const { theme } = useTheme();

  return (
    <Swiper
      effect={'creative'}
      direction='vertical'
      grabCursor={true}
      modules={[EffectCreative, Mousewheel]}
      className={styles.swiper}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -600],
        },
        next: {
          translate: [0, '100%', 0],
        },
      }}
      mousewheel={{
        forceToAxis: true,
        releaseOnEdges: true,
        // sensitivity: 1,
        // thresholdDelta: 5,
      }}
    >
      {/* {data.map((card, index) => {
        return (
          <SwiperSlide key={index}>
            <div className={styles.cardVideo}>
              {theme === 'dark' ? (
                <video
                  className={styles.video}
                  width={'100%'}
                  height={'100%'}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={`/video/advantages/${card.name}-dark.mp4`} type='video/mp4' />
                </video>
              ) : (
                <video
                  className={styles.video}
                  width={'100%'}
                  height={'100%'}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={`/video/advantages/${card.name}-white.mp4`} type='video/mp4' />
                </video>
              )}
            </div>
          </SwiperSlide>
        );
      })} */}

      <SwiperSlide>
        <div className={styles.cardVideo}>
          <video
            className={styles.video}
            width={'100%'}
            height={'100%'}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={`/video/advantages/coin-dark.mp4`} type='video/mp4' />
          </video>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
