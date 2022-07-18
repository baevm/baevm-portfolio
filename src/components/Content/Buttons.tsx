import LangButtons from './LangButtons'
import styles from './style.module.scss'
import ThemeButton from './ThemeButton'

const Buttons = () => {
  return (
    <div className={styles.content__header}>
      <LangButtons />
      <ThemeButton />
    </div>
  )
}

export default Buttons
