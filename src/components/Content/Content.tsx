import Link from 'next/link'
import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useDispatch } from 'react-redux'
import { colors } from '../../consts'
import { setCursorType, setParticlesColor } from '../../redux/Reducer'
import Sidebar from '../Sidebar/Sidebar'
import Footer from './Footer'
import ProjectDesc from './ProjectDesc'
import styles from './style.module.scss'

type Props = {
  type: 'index' | 'projects'
  projects?: []
}

const Content = ({ type, projects }: Props) => {
  const dispatch = useDispatch()
  const containerRef = useRef(null)

  const changeParticlesColor = (particlesColor: string) => {
    return dispatch(setParticlesColor(particlesColor))
  }

  const changeCursorType = (value: string) => {
    return dispatch(setCursorType(value))
  }

  const changeCursorAndParticles = (cursorType: string, particlesColor: string) => {
    changeParticlesColor(particlesColor)
    changeCursorType(cursorType)
  }

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.05,
        touchMultiplier: 4,
        tablet: { smooth: true },
        smartphone: { smooth: true },
      }}
      containerRef={containerRef}
      watch={[]}>
      <div className={styles.content} data-scroll-container ref={containerRef}>
        <div className={styles.sidebar_container} data-scroll data-scroll-sticky data-scroll-target='#scrollContainer'>
          <Sidebar />
        </div>
        <div className={styles.content_container} id='scrollContainer'>
          {type === 'index' ? (
            <>
              <section className={`${styles.motion_container}`}>
                <h1
                  className={styles.content__title}
                  onMouseEnter={() => changeCursorAndParticles('hamburger', colors.red)}
                  onMouseLeave={() => changeCursorType('default')}
                  onClick={() => changeCursorType('default')}>
                  <Link href='/projects'>
                    <a>projects</a>
                  </Link>
                </h1>
              </section>
              <section className={`${styles.motion_container_left}`}>
                <h1 className={styles.content__title}>about</h1>
                <div className={styles.content__text}>
                  <h5>Hey, Im Mikhail, 21 years old frontend developer from Russia</h5>
                </div>
              </section>
              <section className={`${styles.motion_container_left}`}>
                <h1 className={styles.content__title}>skills</h1>
                <div className={styles.content__text}>
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
                <div className={styles.content__text}>
                  <h5>scss</h5>
                  <h5>prisma</h5>
                  <h5>node.js</h5>
                  <h5>trpc</h5>
                  <h5>graphql</h5>
                  <h5>git</h5>
                  <h5>docker</h5>
                </div>
              </section>
              <section className={`${styles.motion_container}`}>
                <h1 className={styles.content__title}>message me:</h1>
                <div className={styles.content__links}>
                  <h5
                    onMouseEnter={() => changeCursorType('hamburger')}
                    onMouseLeave={() => changeCursorType('default')}>
                    <a href='mailto:dezzerlul@gmail.com'>dezzerlul@gmail.com</a>
                  </h5>
                  <h5
                    onMouseEnter={() => changeCursorType('hamburger')}
                    onMouseLeave={() => changeCursorType('default')}>
                    <a href='https://t.me/dezzerlol'>@dezzerlol</a>
                  </h5>
                </div>
              </section>
            </>
          ) : (
            <>
              {projects &&
                projects.map((project: any, index) => (
                  <ProjectDesc
                    project={project}
                    key={project.title}
                    changeCursorAndParticles={changeCursorAndParticles}
                    changeCursorType={changeCursorType}
                    index={index}
                  />
                ))}
            </>
          )}
          <Footer />
        </div>
      </div>
    </LocomotiveScrollProvider>
  )
}

export default Content
