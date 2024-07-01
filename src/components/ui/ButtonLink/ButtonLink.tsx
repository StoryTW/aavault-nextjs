import React, { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './ButtonLink.module.scss';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx'

type TButtonLink = TButton & AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & PropsWithChildren;

type TButton = {
  variant?: 'black' | 'white'
}

export const ButtonLink: FC<TButtonLink> = ({ variant = 'black', href, children, ...props }) => {
  return (
    <Link className={clsx(styles.btnLink, styles[variant])} href={href} {...props}>
      {children}
    </Link>
  );
};
