import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme, SET_CURSOR, SET_LANGUAGE } from '../../context/Reducer'
import styles from './style.module.scss'

const Buttons = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state: any) => state.app.theme)
  const language = useSelector((state: any) => state.app.language)


  const handleChangeTheme = (theme: string) => {
    return dispatch(changeTheme(theme))
  }

  const handleChangeLanguage = (lang: string) => {
    return dispatch({ type: SET_LANGUAGE, payload: lang })
  }

  const handleChangeCursor = (type: string) => {
    return dispatch({ type: SET_CURSOR, payload: type })
  }

  console.log(theme)

  
  return (
    <div className={styles.content__header}>
      {/* <div>
        <span
          className={`${styles.content__header__chip}`}
          style={
            language === 'en' ? { backgroundColor: 'var(--primary-color)', color: 'var(--text-color)' } : { backgroundColor: '', color: '' }
          }
          onClick={() => handleChangeLanguage('en')}
          onMouseEnter={() => handleChangeCursor('hamburger')}
          onMouseLeave={() => handleChangeCursor('default')}>
          EN
        </span>{' '}
        <span
          className={styles.content__header__chip}
          style={
            language === 'ru' ? { backgroundColor: 'var(--primary-color)', color: 'var(--text-color)' } : { backgroundColor: '', color: '' }
          }
          onClick={() => handleChangeLanguage('ru')}
          onMouseEnter={() => handleChangeCursor('hamburger')}
          onMouseLeave={() => handleChangeCursor('default')}>
          RU
        </span>
      </div> */}
      <div>
        {theme === 'dark' ? (
          <MdOutlineDarkMode
            fontSize='2.5rem'
            onClick={() => handleChangeTheme('light')}
            onMouseEnter={() => handleChangeCursor('hamburger')}
            onMouseLeave={() => handleChangeCursor('default')}
          />
        ) : (
          <MdOutlineLightMode
            fontSize='2.5rem'
            onClick={() => handleChangeTheme('dark')}
            onMouseEnter={() => handleChangeCursor('hamburger')}
            onMouseLeave={() => handleChangeCursor('default')}
          />
        )}
      </div>
    </div>
  )
}

export default Buttons
