import React, { memo } from 'react';
import styles from './Socials.module.scss';
import { ButtonLink } from '../ui/ButtonLink/ButtonLink';
import Image from 'next/image';

export const Socials = () => {
  return (
    <div className={styles.socials}>
      <div className={styles.wrapper}>
        <ButtonLink href={'https://twitter.com/AAVAULT_IO'} target='_blank'>
          <Image src={'/images/twitter.svg'} width={24} height={24} alt='twitter' />
        </ButtonLink>

        <ButtonLink href={'https://t.me/aavault'} target='_blank'>
          <Image src={'/images/telegram.svg'} width={24} height={24} alt='telegram' />
        </ButtonLink>

        <ButtonLink href={'https://discord.gg/JbXGfmdgWx'} target='_blank'>
          <Image src={'/images/discord.svg'} width={24} height={24} alt='discord' />
        </ButtonLink>
      </div>
    </div>
  );
};

export const SocialsMemo = memo(Socials);
