import Image from 'next/image'
import React from 'react'
import styles from './style.module.scss'

const Loader = () => {
  return (
    <div className={styles.loader__container}>
      <Image src='/804.png' width={64} height={64} quality={75} />
    </div>
  )
}

export default Loader
