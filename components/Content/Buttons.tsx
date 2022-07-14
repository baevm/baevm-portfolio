import { useContext, useState } from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import CustomCursorContext from '../CustomCursor/Context/CustomCursorContext'
import styles from './style.module.scss'

const Buttons = () => {
  const { setType } = useContext(CustomCursorContext)
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('en')
  return (
    <div className={styles.content__header}>
      <div>
        <span
          className={`${styles.content__header__chip}`}
          style={
            language === 'en' ? { backgroundColor: '#18214e', color: 'white' } : { backgroundColor: '', color: '' }
          }
          onClick={() => setLanguage('en')}
          onMouseEnter={() => setType('hamburger')}
          onMouseLeave={() => setType('default')}>
          EN
        </span>{' '}
        <span
          className={styles.content__header__chip}
          style={
            language === 'ru' ? { backgroundColor: '#18214e', color: 'white' } : { backgroundColor: '', color: '' }
          }
          onClick={() => setLanguage('ru')}
          onMouseEnter={() => setType('hamburger')}
          onMouseLeave={() => setType('default')}>
          RU
        </span>
      </div>
      <div>
        {theme === 'light' ? (
          <MdOutlineDarkMode
            fontSize='2.5rem'
            onClick={() => setTheme('dark')}
            onMouseEnter={() => setType('hamburger')}
            onMouseLeave={() => setType('default')}
          />
        ) : (
          <MdOutlineLightMode
            fontSize='2.5rem'
            onClick={() => setTheme('light')}
            onMouseEnter={() => setType('hamburger')}
            onMouseLeave={() => setType('default')}
          />
        )}
      </div>
    </div>
  )
}

export default Buttons
