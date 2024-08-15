import { FC, HTMLAttributes, forwardRef } from 'react';
import styles from './Divider.module.scss';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface IDivider extends HTMLAttributes<HTMLHRElement> {
  className?: string;
  orientation: 'vertical' | 'horizontal';
}

export const Divider: FC<IDivider> = ({ className, orientation, ...props }) => {
  return <hr className={clsx(styles.divider, styles[orientation], className)} {...props} />;
};

export const DividerMotionComponent: FC<IDivider> = forwardRef(
  ({ className, orientation, ...props }, ref) => (
    <hr
      ref={ref as any}
      className={clsx(styles.divider, styles[orientation], className)}
      {...props}
    />
  ),
);

export const DividerMotion = motion(DividerMotionComponent)
