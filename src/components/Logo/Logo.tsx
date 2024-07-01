import React from 'react'
import styles from './Logo.module.scss'
import Image from 'next/image'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image
        src={'/images/logo.svg'}
        alt='logo'
        width={213}
        height={50}
      />
    </div>
  )
}
