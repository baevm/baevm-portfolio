import { useRouter } from 'next/router'
import LangButtons from './LangButtons'
import styles from './style.module.scss'
import ThemeButton from './ThemeButton'
import { MdKeyboardBackspace } from 'react-icons/md'
import BackButton from './BackButton'

const Buttons = () => {
  return (
    <div className={styles.content__header}>
      <BackButton />
      <div className={styles.content__buttons}>
        <LangButtons />
        <ThemeButton />
      </div>
    </div>
  )
}

export default Buttons
