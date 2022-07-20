import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { SET_CURSOR, SET_LANGUAGE } from '../../redux/Reducer'
import styles from './style.module.scss'

const LangButtons = () => {
  const dispatch = useDispatch()
  const language = useSelector((state: any) => state.app.language)

  const handleChangeLanguage = (lang: string) => {
    return dispatch({ type: SET_LANGUAGE, payload: lang })
  }

  const handleChangeCursor = (type: string) => {
    return dispatch({ type: SET_CURSOR, payload: type })
  }

  return (
    <AnimatePresence>
      <motion.span
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
      </motion.span>
      <motion.span
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
      </motion.span>
    </AnimatePresence>
  )
}

export default LangButtons
