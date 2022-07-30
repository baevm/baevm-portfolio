import React, { useState } from 'react'
import styles from './style.module.scss'
import { colors } from '../../consts'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Image from 'next/image'

const ProjectDesc = ({ project, changeCursorAndParticles, changeCursorType, index }: any) => {
  const [activeProject, setActiveProject] = useState(false)

  return (
    <section className={`${styles.motion_container_left}`} key={project.id}>
      <h1
        className={styles.content__project__title}
        onClick={() => setActiveProject((state) => !state)}
        onMouseEnter={() => changeCursorAndParticles('hamburger', Object.values(colors)[index])}
        onMouseLeave={() => changeCursorType('default')}>
        {project.title}
      </h1>
      {activeProject ? (
        <div className={styles.content__project}>
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
        </div>
      ) : (
        ''
      )}
    </section>
  )
}

export default ProjectDesc
