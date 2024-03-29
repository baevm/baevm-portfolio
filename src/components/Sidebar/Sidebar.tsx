import { TbBrandGithub, TbBrandLinkedin, TbBrandTelegram } from 'react-icons/tb'
import useCursorType from '../../hooks/useCursorType'
import FloatingButton from '../FloatingButton/FloatingButton'
import styles from './style.module.scss'

const Sidebar = () => {
  const { changeCursorType } = useCursorType()

  return (
    <div className={styles.sidebar}>
      <div></div>
      <div className={styles.sidebar__main}>
        <h3
          className={styles.sidebar__title}
          onMouseEnter={() => changeCursorType('hamburger')}
          onMouseLeave={() => changeCursorType('default')}>
          Mikhail Baev
        </h3>
        <p
          className={styles.sidebar__text}
          onMouseEnter={() => changeCursorType('hamburger')}
          onMouseLeave={() => changeCursorType('default')}>
          Frontend Developer
        </p>
      </div>
      <div className={styles.sidebar__links}>
        <a
          href='https://github.com/dezzerlol'
          rel='noreferrer'
          target='_blank'
          aria-label='Github'
          onMouseEnter={() => changeCursorType('hamburger')}
          onMouseLeave={() => changeCursorType('default')}>
          <TbBrandGithub fontSize='2.441rem' />
        </a>
        <a
          href='https://t.me/dezzerlol'
          rel='noreferrer'
          target='_blank'
          aria-label='Telegram'
          onMouseEnter={() => changeCursorType('hamburger')}
          onMouseLeave={() => changeCursorType('default')}>
          <TbBrandTelegram fontSize='2.441rem' />
        </a>
        <a
          href='https://www.linkedin.com/in/mikhail-baev1/'
          rel='noreferrer'
          target='_blank'
          aria-label='Linkedin'
          onMouseEnter={() => changeCursorType('hamburger')}
          onMouseLeave={() => changeCursorType('default')}>
          <TbBrandLinkedin fontSize='2.441rem' />
        </a>
      </div>
      <FloatingButton />
    </div>
  )
}

export default Sidebar
