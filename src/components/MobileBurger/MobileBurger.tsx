'use client';
import { Dispatch, FC, SetStateAction } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './MobileBurger.module.scss';
import { ButtonLink } from '../ui/ButtonLink/ButtonLink';
import { Socials } from '../Socials/Socials';
import { RemoveScroll } from 'react-remove-scroll';
import { NAV_DATA } from '@/layout/Footer/Footer';
import Link from 'next/link';

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
        <RemoveScroll>
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
                transition={{ duration: 0.2, bounce: false }}
              >
                <nav className={styles.nav}>
                  {NAV_DATA.map((item, index) => {
                    return (
                      <Link
                        href={item.link}
                        key={index}
                        className={styles.link}
                        onClick={handleClose}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
                <div>
                  <div className={styles.btn_wrapper}>
                    <ButtonLink href={'https://app.palma.network'} onClick={handleClose}>
                      TRADE
                    </ButtonLink>

                    <ButtonLink
                      href={'/#footer'}
                      variant='white'
                      className={styles.bird}
                      onClick={handleClose}
                    >
                      GET IN TOUCH
                    </ButtonLink>
                  </div>
                  <Socials />
                </div>
              </motion.div>
            </div>
          </div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
};
