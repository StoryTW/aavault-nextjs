import React, { memo } from 'react';
import styles from './Socials.module.scss';
import { ButtonLink } from '../ui/ButtonLink/ButtonLink';
import IconTelegram from '@/assets/images/social/telegram.svg';
import IconDiscord from '@/assets/images/social/discord.svg';
import IconTwitter from '@/assets/images/social/twitter.svg';

export const Socials = () => {
  return (
    <div className={styles.socials}>
      <div className={styles.wrapper}>
        <ButtonLink href={' https://x.com/palma_network'} target='_blank'>
          <IconTwitter />
        </ButtonLink>

        <ButtonLink href={'https://t.me/palma_network'} target='_blank'>
          <IconTelegram />
        </ButtonLink>

        {/* <ButtonLink href={'https://discord.gg/JbXGfmdgWx'} target='_blank'>
          <IconDiscord />
        </ButtonLink> */}
      </div>
    </div>
  );
};

export const SocialsMemo = memo(Socials);
