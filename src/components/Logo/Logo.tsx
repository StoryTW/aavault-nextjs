import React, { FC } from 'react';
import styles from './Logo.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export const Logo: FC<{ className?: string }> = ({ className }) => {
  return (
    <Link href={'/'} className={clsx(styles.logo, className)}>
      <Image src={'/images/logo.svg'} alt='logo' width={213} height={50} />
    </Link>
  );
};
