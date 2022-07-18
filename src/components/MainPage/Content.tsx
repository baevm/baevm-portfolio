import Link from 'next/link'
import { useDispatch } from 'react-redux'
import FloatingButton from '../FloatingButton/FloatingButton'
import Sidebar from '../Sidebar/Sidebar'
import styles from './style.module.scss'

const Content = () => {
  const dispatch = useDispatch()

  const changeCursorType = (value: string) => {
    return dispatch({ type: 'SET_CURSOR', payload: value })
  }

  return (
    <div className={styles.content} data-scroll-section>
      <div
        className={styles.sidebar_container}
        data-scroll
        data-scroll-sticky
        data-scroll-target='#scrollContainer' /*    */
      >
        <Sidebar />
      </div>
      <div className={styles.content_container} data-scroll-container id='scrollContainer'>
        <section className={`${styles.motion_container}`}>
          <h1
            className={styles.content__title}
            onMouseEnter={() => changeCursorType('hamburger')}
            onMouseLeave={() => changeCursorType('default')}
            onClick={() => changeCursorType('default')}>
            <Link href='/projects'>
              <a>projects</a>
            </Link>
          </h1>
        </section>

        <section className={`${styles.motion_container_left}`}>
          <h1
            className={styles.content__title}
            onMouseEnter={() => changeCursorType('hamburger')}
            onMouseLeave={() => changeCursorType('default')}>
            <a>about</a>
          </h1>
          <div className={styles.content__skills}>
            <h5>Hey, Im Mikhail, frontend developer</h5>
          </div>
        </section>

        <section className={`${styles.motion_container_left}`}>
          <h1
            className={styles.content__title}
            onMouseEnter={() => changeCursorType('hamburger')}
            onMouseLeave={() => changeCursorType('default')}>
            <a>skills</a>
          </h1>
          <div className={styles.content__skills}>
            <h5>html</h5>
            <h5>css</h5>
            <h5>javascript</h5>
            <h5>typescript</h5>
            <h5>react</h5>
            <h5>redux</h5>
            <h5>next.js</h5>
          </div>
        </section>

        <section className={`${styles.motion_container_left}`}>
          <div className={styles.content__skills}>
            <h5>scss</h5>
            <h5>styled-components</h5>
            <h5>prisma</h5>
            <h5>mongodb</h5>
            <h5>firebase</h5>
            <h5>graphql</h5>
            <h5>git</h5>
          </div>
        </section>

        <section className={`${styles.motion_container}`}>
          <h1
            className={styles.content__title}
            onMouseEnter={() => changeCursorType('hamburger')}
            onMouseLeave={() => changeCursorType('default')}>
            <a> message me:</a>
          </h1>
          <div className={styles.content__skills}>
            <h5>@telegram</h5>
            <h5>@linkedin</h5>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Content
