import React, { FC } from 'react';
import styles from './RoadmapBlockMobile.module.scss';
import { Divider } from '../ui/Divider/Divider';

interface IRoadmapBlockMobile {
  dataList: IRoadmapDataList[];
  offset: number;
  title: string;
  circleHeight: number;
}

export const RoadmapBlockMobile: FC<IRoadmapBlockMobile> = ({
  dataList,
  circleHeight,
  offset,
  title,
}) => {
  return (
    <div className={styles.roadmapBlock}>
      <div
        className={styles.wrapper}
        style={{
          paddingLeft: offset,
        }}
      >
        <span className={styles.title}>{title}</span>
        <div className={styles.block}>
          <ul className={styles.list}>
            {dataList.map((list, index) => {
              return <li key={index}>{list.text}</li>;
            })}
          </ul>
        </div>
      </div>

      <Divider orientation='vertical' className={styles.dividerHeight} />

      <span
        className={styles.circle}
        style={{
          top: circleHeight,
        }}
      />

      <Divider
        orientation='horizontal'
        className={styles.dividerWidth}
        style={{
          top: circleHeight + 6,
          width: offset - 6,
        }}
      />
    </div>
  );
};
