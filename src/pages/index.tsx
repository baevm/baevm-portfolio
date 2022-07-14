import type { NextPage } from 'next'
import Content from '../components/Content/Content'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from '../styles/Index.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar_container}>
        <Sidebar />
      </div>
      <main className={styles.content_container}>
        <Content />
      </main>
    </div>
  )
}

export default Home
