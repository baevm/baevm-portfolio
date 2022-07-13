// @ts-nocheck
import ReactFullPage from '@fullpage/react-fullpage'
import Link from 'next/link'
import styles from './style.module.scss'

const Content = () => {
  const anchors = ['', '', '']
  return (
    <div className={styles.content}>
      <ReactFullPage
        licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
        scrollingSpeed={500}
        navigation
        credits={{ enabled: false }}
        dragAndMove={'fingersonly'}
        navigationTooltips={anchors}
        render={() => (
          <ReactFullPage.Wrapper>
            <section className={`section ${styles.motion_container}`}>
              <h1 className={styles.content__title}>
                <Link href='/project/1'>
                  <a>projects</a>
                </Link>
              </h1>
            </section>

            <section className={`section ${styles.motion_container}`}>
              <h1 className={styles.content__title}>
                <Link href='/about'>
                  <a>about</a>
                </Link>
              </h1>
            </section>

            <section className={`section ${styles.motion_container}`}>
              <h1 className={styles.content__title}>
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
