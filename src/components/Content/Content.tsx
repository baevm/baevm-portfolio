import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Sidebar from '../Sidebar/Sidebar'
import Footer from './Footer'
import MeDesc from './MeDesc'
import ProjectDesc from './Projects/ProjectDesc'
import styles from './style.module.scss'

type Props = {
  type: 'index' | 'projects'
  projects?: []
}

const Content = ({ type, projects }: Props) => {
  const containerRef = useRef(null)

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
            <MeDesc />
          ) : (
            <>
              {projects &&
                projects.map((project: any, index) => (
                  <ProjectDesc project={project} key={project.title} index={index} />
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
