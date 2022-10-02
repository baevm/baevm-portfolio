import Link from 'next/link'
import { colors } from '../../consts'
import useCursorType from '../../hooks/useCursorType'
import useParticlesColor from '../../hooks/useParticlesColor'
import AnimatedTitle from './AnimatedTitle'
import styles from './style.module.scss'

const MeDesc = () => {
  const { changeCursorType } = useCursorType()
  const { changeParticlesColor } = useParticlesColor()

  const changeCursorAndParticles = (cursorType: string, particlesColor: string) => {
    changeParticlesColor(particlesColor)
    changeCursorType(cursorType)
  }

  return (
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
        <AnimatedTitle>about</AnimatedTitle>
        <div className={styles.content__text}>
          <h5>Hey, Im Mikhail, 21 years old frontend developer from Russia</h5>
        </div>
      </section>
      <section className={`${styles.motion_container_left}`}>
        <AnimatedTitle>skills</AnimatedTitle>
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
        <AnimatedTitle>message me:</AnimatedTitle>
        <div className={styles.content__links}>
          <h5 onMouseEnter={() => changeCursorType('hamburger')} onMouseLeave={() => changeCursorType('default')}>
            <a href='mailto:dezzerlul@gmail.com'>dezzerlul@gmail.com</a>
          </h5>
          <h5 onMouseEnter={() => changeCursorType('hamburger')} onMouseLeave={() => changeCursorType('default')}>
            <a href='https://t.me/dezzerlol'>@dezzerlol</a>
          </h5>
        </div>
      </section>
    </>
  )
}

export default MeDesc
