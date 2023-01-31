import { RichText } from '@graphcms/rich-text-react-renderer'
import { AnimatePresence, m } from 'framer-motion'
import { useState } from 'react'
import { colors } from '../../../consts'
import useCursorType from '../../../hooks/useCursorType'
import useParticlesColor from '../../../hooks/useParticlesColor'
import styles from './style.module.scss'
import Images from './Images/Images'

const variants = {
  initial: { opacity: 0, x: -1, y: 0 },
  animate: { opacity: 1, x: 0, y: -20 },
  exit: { opacity: 0, x: 1, y: 0 },
}

const ProjectDesc = ({ project, index }: any) => {
  const [activeProject, setActiveProject] = useState(false)
  const [isImageLoading, setIsImageLoading] = useState(true)

  const { changeCursorType } = useCursorType()
  const { changeParticlesColor } = useParticlesColor()
 
  const changeCursorAndParticles = (cursorType: string, particlesColor: string) => {
    changeParticlesColor(particlesColor)
    changeCursorType(cursorType)
  }

  const handleClick = () => {
    setActiveProject((state) => !state)
    changeCursorType('default')
  }

  return (
    <section className={`${styles.motion_container_left}`} key={project.id}>
      <AnimatePresence initial={false}>
        {!activeProject && (
          <m.h1
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            className={styles.content__project__title}
            onClick={handleClick}
            onMouseEnter={() => changeCursorAndParticles('hamburger', Object.values(colors)[index])}
            onMouseLeave={() => changeCursorType('default')}>
            {project.title}
          </m.h1>
        )}

        {activeProject ? (
          <m.div
            className={styles.content__project}
            variants={variants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}>
            <h1
              className={styles.content__project__title}
              onClick={handleClick}
              onMouseEnter={() => changeCursorAndParticles('hamburger', Object.values(colors)[index])}
              onMouseLeave={() => changeCursorType('default')}>
              {project.title}
            </h1>
            <div className={styles.content__project__tech}>
              {project.tech.map((t: string) => (
                <div key={t} className={styles.project__tech__item}>
                  {t}
                </div>
              ))}
            </div>

            <div className={styles.project__main}>
             <Images images={project.images} />
              <div className={styles.project__desc}>
                <RichText content={project.description.raw} />
              </div>
            </div>
          </m.div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectDesc
