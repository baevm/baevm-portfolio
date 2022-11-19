import { useRouter } from 'next/router'
import { MdKeyboardBackspace } from 'react-icons/md'
import useCursorType from '../../../hooks/useCursorType'
import styles from '../style.module.scss'

const BackButton = () => {
  const router = useRouter()
  const { changeCursorType } = useCursorType()

  const handleClick = () => {
    router.back()
    changeCursorType('default')
  }

  return (
    <div>
      {router.asPath != '/' ? (
        <div
          onClick={handleClick}
          onMouseEnter={() => changeCursorType('hamburger')}
          onMouseLeave={() => changeCursorType('default')}
          className={styles.content__header__back}>
          <MdKeyboardBackspace fontSize='2.5rem' /> <span>Back</span>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default BackButton
