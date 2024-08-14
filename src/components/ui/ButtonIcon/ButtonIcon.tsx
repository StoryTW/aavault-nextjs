import React, { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './ButtonIcon.module.scss';
import clsx from 'clsx'

type TButtonIcon = TButton & HTMLAttributes<HTMLButtonElement>;

type TButton = {
  icon: ReactNode;
}

export const ButtonIcon: FC<TButtonIcon> = ({ icon, className, ...props }) => {
  return (
    <button className={clsx(styles.btn, className)} type='button' {...props}>
      {icon}
    </button>
  );
};