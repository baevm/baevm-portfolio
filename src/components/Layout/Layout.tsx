import React from 'react'
import { AppWrapper } from '../../context/AppContext'
import CustomCursor from '../CustomCursor'
import styles from './style.module.scss'

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <AppWrapper>
      <CustomCursor />
      <div className={styles.background_noise} style={{ backgroundImage: "url('/noise-transparent.png')" }}></div>
      <div className={styles.children}>{children}</div>
    </AppWrapper>
  )
}

export default Layout
