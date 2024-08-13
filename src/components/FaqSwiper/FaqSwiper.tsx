'use client';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import styles from './FaqSwiper.module.scss';
import { CardFaq } from '../CardFaq/CardFaq';

interface IFaqSwiper {
  data: IFaqModel[];
}

export const FaqSwiper: FC<IFaqSwiper> = ({ data }) => {
  return (
    // <div>
      <Swiper loop={true} modules={[Navigation]}>
        {data.map((card) => {
          return (
            <SwiperSlide key={card.id}>
              <CardFaq id={card.id} question={card.question} answer={card.answer} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    // </div>
  );
};
