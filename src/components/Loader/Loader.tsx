import Image from 'next/image'
import styles from './style.module.scss'

const Loader = () => {
  return (
    <div className={styles.loader__container}>
      <Image width='64' height='64' src='/804.png' alt='loader' quality={75} />
    </div>
  )
}

export default Loader
