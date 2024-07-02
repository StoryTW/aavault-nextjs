'use client';
import { Dispatch, FC, SetStateAction } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './MobileBurger.module.scss';
import { ButtonLink } from '../ui/ButtonLink/ButtonLink';
import { Socials } from '../Socials/Socials';

interface IMobileNav {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export const MobileBurger: FC<IMobileNav> = ({ openMenu, setOpenMenu }) => {
  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <AnimatePresence mode='wait'>
      {openMenu && (
        <div className={styles.mobileNav}>
          <div className={styles.wrapper}>
            <motion.div
              className={styles.content}
              initial={{
                x: window.innerWidth,
              }}
              animate={{
                x: 0,
              }}
              exit={{ x: window.outerWidth, opacity: 0 }}
              transition={{ duration: 0.3, bounce: false }}
            >
              <div className={styles.btn_wrapper}>
                <ButtonLink href={'/trade'} onClick={handleClose}>TRADE</ButtonLink>

                <ButtonLink href={'/'} variant='white' className={styles.bird}>
                  EARLY BIRD
                </ButtonLink>
              </div>
              <Socials />
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
