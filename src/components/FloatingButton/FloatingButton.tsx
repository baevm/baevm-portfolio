import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { MdNorth, MdSouth } from 'react-icons/md'

const FloatingButton = () => {
  const [pos, setPos] = useState(0)
  const scrollToTop = () => {
    if (pos < 300) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }
  useEffect(() => {
    const onScroll = () => {
      window.addEventListener('scroll', () => {
        setPos(window.scrollY)
      })
    }
    onScroll()
  }, [])

  return (
    <>
      <button className={styles.scroll_button} onClick={scrollToTop}>
        {pos < 300 ? <MdSouth fontSize='2rem' /> : <MdNorth fontSize='2rem' />}
      </button>
    </>
  )
}

export default FloatingButton
