import { AnimatePresence, m } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { setCursorType, setLanguage } from '../../../redux/Reducer'
import styles from './style.module.scss'

const LangButtons = () => {
  const dispatch = useDispatch()
  const language = useSelector((state: any) => state.app.language)

  const handleChangeLanguage = (lang: string) => {
    return dispatch(setLanguage(lang))
  }

  const handleChangeCursor = (type: string) => {
    return dispatch(setCursorType(type))
  }

  return (
    <AnimatePresence>
      <m.span
        initial={{ x: 0, y: -40, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`${styles.content__header__chip}`}
        key='en'
        style={
          language === 'en'
            ? { backgroundColor: 'var(--primary-color)', color: 'var(--text-color)' }
            : { backgroundColor: '', color: '' }
        }
        onClick={() => handleChangeLanguage('en')}
        onMouseEnter={() => handleChangeCursor('hamburger')}
        onMouseLeave={() => handleChangeCursor('default')}>
        EN
      </m.span>
      <m.span
        initial={{ x: 0, y: -40, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.content__header__chip}
        key='ru'
        style={
          language === 'ru'
            ? { backgroundColor: 'var(--primary-color)', color: 'var(--text-color)' }
            : { backgroundColor: '', color: '' }
        }
        onClick={() => handleChangeLanguage('ru')}
        onMouseEnter={() => handleChangeCursor('hamburger')}
        onMouseLeave={() => handleChangeCursor('default')}>
        RU
      </m.span>
    </AnimatePresence>
  )
}

export default LangButtons
