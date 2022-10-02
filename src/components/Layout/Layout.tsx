import { AnimatePresence, m } from 'framer-motion'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading } from '../../redux/Reducer'
import Header from '../Content/Header'
import CustomCursor from '../CustomCursor'
import Loader from '../Loader/Loader'
import styles from './style.module.scss'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: any) => state.app.isLoading)

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideLoading())
    }, 1000)
  })
  
  
  
  return (
    <div>
      <div className={styles.background_noise} style={{ backgroundImage: "url('/noise-transparent.png')" }}></div>
      
      <AnimatePresence exitBeforeEnter>
        {isLoading ? (
          <m.div
            key='loader'
            initial={{ opacity: 0, clipPath: 'circle(119.7% at 15% 15%)' }}
            animate={{ opacity: 1,  clipPath: 'circle(119.7% at 15% 15%)' }}
            exit={{ opacity: 0,  clipPath: 'circle(14.8% at 14% 15%)' }}
            transition={{ type: 'linear' }}>
            <Loader />
          </m.div>
        ) : (
          <>
            <Header />
            <CustomCursor />
            <div className={styles.children}>{children}</div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Layout
