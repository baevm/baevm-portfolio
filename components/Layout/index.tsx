import React, { useContext } from 'react'
import CustomCursor from '../CustomCursor'
import CustomCursorContext from '../CustomCursor/Context/CustomCursorContext'
import CustomCursorManager from '../CustomCursor/Context/manager'
import styles from './style.module.scss'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { setType } = useContext(CustomCursorContext)
  return (
    <CustomCursorManager>
      <CustomCursor />
      <div className={styles.background_noise} style={{ backgroundImage: "url('/noise-transparent.png')" }}></div>
      <div className={styles.children}>{children}</div>
    </CustomCursorManager>
  )
}

export default Layout
