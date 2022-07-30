import React from 'react'
import styles from './style.module.scss'

const Footer = ({ changeCursorType }: any) => {
  return (
    <p
      onMouseEnter={() => changeCursorType('hamburger')}
      onMouseLeave={() => changeCursorType('default')}
      className={styles.content__footer}>
      Coded by{' '}
      <a href='https://github.com/dezzerlol' style={{ textDecoration: 'underline' }}>
        myself
      </a>
    </p>
  )
}

export default Footer
