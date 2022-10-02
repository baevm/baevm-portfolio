import styles from './style.module.scss'

const Loader = () => {
  return (
    <div className={styles.loader__container}>
      <img width='64' height='64' src='/804.png' alt='loader' />
    </div>
  )
}

export default Loader
