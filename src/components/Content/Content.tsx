import ReactFullPage from '@fullpage/react-fullpage'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import Buttons from './Buttons'
import styles from './style.module.scss'

const Content = () => {
  const dispatch = useDispatch()

  const changeCursorType = (value: string) => {
    return dispatch({ type: 'SET_CURSOR', payload: value })
  }

  const anchors = ['', '', '']
  return (
    <div className={styles.content}>
      <ReactFullPage
        licenseKey='gplv3-license'
        scrollingSpeed={500}
        navigation
        credits={{ enabled: false }}
        dragAndMove={'fingersonly'}
        navigationTooltips={anchors}
        render={() => (
          <ReactFullPage.Wrapper>
            <Buttons />
            <section className={`section ${styles.motion_container}`}>
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

            <section className={`section ${styles.motion_container}`}>
              <h1
                className={styles.content__title}
                onMouseEnter={() => changeCursorType('hamburger')}
                onMouseLeave={() => changeCursorType('default')}
                onClick={() => changeCursorType('default')}>
                <Link href='/about'>
                  <a>about</a>
                </Link>
              </h1>
            </section>

            <section className={`section ${styles.motion_container}`}>
              <h1
                className={styles.content__title}
                onMouseEnter={() => changeCursorType('hamburger')}
                onMouseLeave={() => changeCursorType('default')}
                onClick={() => changeCursorType('default')}>
                <Link href='/contact'>
                  <a>contact</a>
                </Link>
              </h1>
            </section>
          </ReactFullPage.Wrapper>
        )}></ReactFullPage>
    </div>
  )
}

export default Content
