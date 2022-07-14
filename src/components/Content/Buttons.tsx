import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useAppContext } from '../../context/AppContext'
import { CHANGE_THEME, SET_CURSOR, SET_LANGUAGE } from '../../context/Reducer'
import styles from './style.module.scss'

const Buttons = () => {
  const { state, dispatch } = useAppContext()
  const language = state.language
  const isDarkTheme = state.isDarkTheme

  const handleChangeTheme = () => {
    return dispatch({ type: CHANGE_THEME })
  }

  const handleChangeLanguage = (lang: string) => {
    return dispatch({ type: SET_LANGUAGE, payload: lang })
  }

  const handleChangeCursor = (type: string) => {
    return dispatch({ type: SET_CURSOR, payload: type })
  }

  return (
    <div className={styles.content__header}>
      <div>
        <span
          className={`${styles.content__header__chip}`}
          style={
            language === 'en' ? { backgroundColor: '#18214e', color: 'white' } : { backgroundColor: '', color: '' }
          }
          onClick={() => handleChangeLanguage('en')}
          onMouseEnter={() => handleChangeCursor('hamburger')}
          onMouseLeave={() => handleChangeCursor('default')}>
          EN
        </span>{' '}
        <span
          className={styles.content__header__chip}
          style={
            language === 'ru' ? { backgroundColor: '#18214e', color: 'white' } : { backgroundColor: '', color: '' }
          }
          onClick={() => handleChangeLanguage('ru')}
          onMouseEnter={() => handleChangeCursor('hamburger')}
          onMouseLeave={() => handleChangeCursor('default')}>
          RU
        </span>
      </div>
      <div>
        {isDarkTheme ? (
          <MdOutlineDarkMode
            fontSize='2.5rem'
            onClick={() => handleChangeTheme()}
            onMouseEnter={() => handleChangeCursor('hamburger')}
            onMouseLeave={() => handleChangeCursor('default')}
          />
        ) : (
          <MdOutlineLightMode
            fontSize='2.5rem'
            onClick={() => handleChangeTheme()}
            onMouseEnter={() => handleChangeCursor('hamburger')}
            onMouseLeave={() => handleChangeCursor('default')}
          />
        )}
      </div>
    </div>
  )
}

export default Buttons
