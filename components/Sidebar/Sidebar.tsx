import { useContext, useState } from 'react'
import { TbBrandGithub, TbBrandLinkedin, TbBrandTelegram } from 'react-icons/tb'
import CustomCursorContext from '../CustomCursor/Context/CustomCursorContext'
import styles from './style.module.scss'

const Sidebar = () => {
  const [theme, setTheme] = useState('light')
  const { setType } = useContext(CustomCursorContext)
  return (
    <div className={styles.sidebar}>
      <div></div>
      <div className={styles.sidebar__main}>
        <h3 className={styles.sidebar__title}>Mikhail Baev</h3>
        <p className={styles.sidebar__text}>Frontend Developer</p>
      </div>
      <div className={styles.sidebar__links}>
        <a
          href='https://github.com/dezzerlol'
          rel='noreferrer'
          target='_blank'
          onMouseEnter={() => setType('hamburger')}
          onMouseLeave={() => setType('default')}>
          <TbBrandGithub fontSize='2.441rem' />
        </a>
        <a
          href='https://t.me/dezzerlol'
          rel='noreferrer'
          target='_blank'
          onMouseEnter={() => setType('hamburger')}
          onMouseLeave={() => setType('default')}>
          <TbBrandTelegram fontSize='2.441rem' />
        </a>
        <a
          href='https://www.linkedin.com/in/mikhail-baev1/'
          rel='noreferrer'
          target='_blank'
          onMouseEnter={() => setType('hamburger')}
          onMouseLeave={() => setType('default')}>
          <TbBrandLinkedin fontSize='2.441rem' />
        </a>
      </div>
    </div>
  )
}

export default Sidebar
