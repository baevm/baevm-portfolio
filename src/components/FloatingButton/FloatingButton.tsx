import { useState } from 'react'
import { MdNorth, MdSouth } from 'react-icons/md'
import styles from './style.module.scss'

const FloatingButton = () => {
  const [pos, setPos] = useState(0)
  //const { scroll } = useLocomotiveScroll()

  // const handleScrollToId = (e: any) => {
  //   e.preventDefault()
  //   scroll && scroll.scrollTo('top', {
  //     offset: 0,
  //     duration: 600,
  //     easing: [0.25, 0.0, 0.35, 1.0],
  //     disableLerp: true,
  //   })
  // }

  return (
    <>
      <button className={styles.scroll_button}>
        {pos < 300 ? <MdSouth fontSize='2rem' /> : <MdNorth fontSize='2rem' />}
      </button>
    </>
  )
}

export default FloatingButton
