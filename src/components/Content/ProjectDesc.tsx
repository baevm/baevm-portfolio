import React, { useState } from 'react'
import styles from './style.module.scss'
import { colors } from '../../consts'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, x: -1, y: 0 },
  animate: { opacity: 1, x: 0, y: -20 },
  exit: { opacity: 0, x: 1, y: 0 },
}

const ProjectDesc = ({ project, changeCursorAndParticles, changeCursorType, index }: any) => {
  const [activeProject, setActiveProject] = useState(false)

  return (
    <section className={`${styles.motion_container_left}`} key={project.id}>
      <AnimatePresence initial={false}>
        {!activeProject && (
          <motion.h1
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            className={styles.content__project__title}
            onClick={() => setActiveProject((state) => !state)}
            onMouseEnter={() => changeCursorAndParticles('hamburger', Object.values(colors)[index])}
            onMouseLeave={() => changeCursorType('default')}>
            {project.title}
          </motion.h1>
        )}

        {activeProject ? (
          <motion.div
            className={styles.content__project}
            variants={variants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}>
            <h1
              className={styles.content__project__title}
              onClick={() => setActiveProject((state) => !state)}
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
              <div className={styles.project__picture}>
                {project.gif ? <Image src={project.gif.url} layout='fill' quality={75} alt='project gif' /> : ''}
              </div>
              <div className={styles.project__desc}>
                <RichText content={project.description.raw} />
              </div>
            </div>
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectDesc
