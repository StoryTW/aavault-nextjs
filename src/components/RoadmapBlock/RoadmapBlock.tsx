import React, { FC } from 'react';
import styles from './RoadmapBlock.module.scss';
import { Divider } from '../ui/Divider/Divider';

interface IRoadmapBlock {
  dataList: IRoadmapDataList[];
  offset: number;
  title: string;
  dividerHeight: number;
}

export const RoadmapBlock: FC<IRoadmapBlock> = ({ dataList, offset, title, dividerHeight }) => {
  return (
    <div className={styles.block}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>

        <Divider orientation='horizontal' />

        <span className={styles.circle} />
      </div>

      <Divider
        orientation='vertical'
        className={styles.dividerHeight}
        style={{
          height: dividerHeight,
        }}
      />

      <span
        className={styles.circle2}
        style={{
          top: dividerHeight + 52,
        }}
      />

      <Divider
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
        <div className={styles.contentBlock}>
          <ul className={styles.list}>
            {dataList.map((list, index) => {
              return <li key={index}>{list.text}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
