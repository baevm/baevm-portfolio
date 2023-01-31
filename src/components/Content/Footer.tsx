import useCursorType from '@hooks/useCursorType'
import styles from './style.module.scss'

const Footer = () => {
  const { changeCursorType } = useCursorType()
  return (
    <p
      onMouseEnter={() => changeCursorType('hamburger')}
      onMouseLeave={() => changeCursorType('default')}
      className={styles.content__footer}>
      Coded by{' '}
      <a href='https://github.com/dezzerlol' target='_blank' rel='noreferrer' style={{ textDecoration: 'underline' }}>
        myself
      </a>
    </p>
  )
}

export default Footer
