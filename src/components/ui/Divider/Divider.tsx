import { FC, HTMLAttributes } from 'react';
import styles from './Divider.module.scss';
import clsx from 'clsx';

interface IDivider extends HTMLAttributes<HTMLHRElement> {
  className?: string;
  orientation: 'vertical' | 'horizontal';
}

export const Divider: FC<IDivider> = ({ className, orientation, ...props }) => {
  return <hr className={clsx(styles.divider, styles[orientation], className)} {...props} />;
};
