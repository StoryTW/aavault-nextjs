import React from 'react'
import styles from './Logo.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={'/'} className={styles.logo}>
      <Image
        src={'/images/logo.svg'}
        alt='logo'
        width={213}
        height={50}
      />
    </Link>
  )
}
