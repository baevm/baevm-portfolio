import React from 'react'
import styles from './style.module.scss'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className={styles.loader__container}>
      <img src='./804.png' />
    </div>
  )
}

export default Loader
