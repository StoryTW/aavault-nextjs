'use client';
import React, { FC, useRef } from 'react';
import styles from './RoadmapBlock.module.scss';
import { Divider, DividerMotion } from '../ui/Divider/Divider';
import { motion, useInView } from 'framer-motion';

interface IRoadmapBlock {
  dataList: IRoadmapDataList[];
  offset: number;
  title: string;
  dividerHeight: number;
  delay: number;
}

export const RoadmapBlock: FC<IRoadmapBlock> = ({
  dataList,
  offset,
  title,
  dividerHeight,
  delay,
}) => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
  });

  return (
    <div className={styles.block}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>

        <Divider orientation='horizontal' />

        <span className={styles.circle} />
      </div>

      <DividerMotion
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.7, delay: delay }}
        orientation='vertical'
        className={styles.dividerHeight}
        style={{
          height: dividerHeight,
        }}
      />

      <motion.span
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.7, delay: delay }}
        className={styles.circle2}
        style={{
          top: dividerHeight + 52,
        }}
      />

      <DividerMotion
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.7, delay: delay }}
        orientation='horizontal'
        className={styles.dividerWidth}
        style={{
          top: dividerHeight + 60,
        }}
      />

      <div
        className={styles.containerBlock}
        style={{
          marginTop: offset,
        }}
      >
        <motion.div
          ref={ref}
          className={styles.contentBlock}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.7, delay: delay }}
        >
          <ul className={styles.list}>
            {dataList.map((list, index) => {
              return <li key={index}>{list.text}</li>;
            })}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
