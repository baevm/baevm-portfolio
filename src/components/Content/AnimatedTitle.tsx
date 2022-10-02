import { m, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import styles from './style.module.scss'

const variants = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, x: -100 },
}

const AnimatedTitle = ({ children }: any) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [isInView])

  return (
    <m.h1 className={styles.content__title} ref={ref} variants={variants} initial='hidden' animate={controls}>
      {children}
    </m.h1>
  )
}

export default AnimatedTitle
