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

  return (
    <div className={styles.content}>
      <ReactFullPage
        licenseKey='gplv3-license'
        scrollingSpeed={500}
        navigation
        credits={{ enabled: false }}
        dragAndMove={'fingersonly'}
        responsiveWidth={1024}
        render={() => (
          <ReactFullPage.Wrapper>
            <section className={`section ${styles.motion_container} fp-auto-height-responsive`}>
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

            <section className={`section ${styles.motion_container_left} fp-auto-height-responsive`}>
              <h1
                className={styles.content__title}
                onMouseEnter={() => changeCursorType('hamburger')}
                onMouseLeave={() => changeCursorType('default')}>
                Hey, i&apos;m Mikhail, frontend developer
              </h1>
            </section>

            <section className={`section ${styles.motion_container_left} fp-auto-height-responsive`}>
              <h1
                className={styles.content__title}
                onMouseEnter={() => changeCursorType('hamburger')}
                onMouseLeave={() => changeCursorType('default')}>
                skills:
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

            <section className={`section ${styles.motion_container_left} fp-auto-height-responsive`}>
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

            <section className={`section ${styles.motion_container} fp-auto-height-responsive`}>
            <h1
                className={styles.content__title}
                onMouseEnter={() => changeCursorType('hamburger')}
                onMouseLeave={() => changeCursorType('default')}>
                message me:
              </h1>
              <div className={styles.content__skills_right}>
                <h5>@telegram</h5>
                <h5>@linkedin</h5>
       
              </div>
            </section>
          </ReactFullPage.Wrapper>
        )}></ReactFullPage>
    </div>
  )
}

export default Content
