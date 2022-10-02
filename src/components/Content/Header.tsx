import BackButton from './BackButton'
import LangButtons from './LangButtons'
import styles from './style.module.scss'
import ThemeButton from './ThemeButton'

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
