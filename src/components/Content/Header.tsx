import BackButton from './Buttons/BackButton'
import LangButtons from './Buttons/LangButtons'
import styles from './style.module.scss'
import ThemeButton from './Buttons/ThemeButton'

const Header = () => {
  return (
    <div className={styles.content__header}>
      <BackButton />
      <div className={styles.content__buttons}>
        {/* <LangButtons /> */}
        <ThemeButton />
      </div>
    </div>
  )
}

export default Header
