import { useRouter } from 'next/router'
import React from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setCursorType } from '../../redux/Reducer'
import styles from './style.module.scss'

const BackButton = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const handleChangeCursor = (type: string) => {
    return dispatch(setCursorType(type))
  }
  return (
    <div>
      {router.asPath != '/' ? (
        <div
          onClick={() => router.back()}
          onMouseEnter={() => handleChangeCursor('hamburger')}
          onMouseLeave={() => handleChangeCursor('default')}
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
