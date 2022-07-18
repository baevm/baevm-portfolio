import React, { useState } from 'react'
import styles from './style.module.scss'
import { MdNorth, MdSouth } from 'react-icons/md'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const FloatingButton = () => {
  const [pos, setPos] = useState(0)
  const { scroll } = useLocomotiveScroll()



  const handleScrollToId = (id: any) => {
    // scroll.scrollTo('top', {
    //   offset: 0,
    //   duration: 600,
    //   easing: [0.25, 0.0, 0.35, 1.0],
    //   disableLerp: true,
    // })
  }

  return (
    <>
      <button className={styles.scroll_button} onClick={() => handleScrollToId('projectsContainer')}>
        {pos < 300 ? <MdSouth fontSize='2rem' /> : <MdNorth fontSize='2rem' />}
      </button>
    </>
  )
}

export default FloatingButton
