import type { NextPage } from 'next'
import RightContent from '../components/RightContent'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Index.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <main className={styles.rightContentContainer}>
        <RightContent />
      </main>
    </div>
  )
}

export default Home
