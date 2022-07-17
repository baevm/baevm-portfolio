import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import FloatingButton from '../components/FloatingButton/FloatingButton'
import Buttons from '../components/MainPage/Buttons'
import Content from '../components/MainPage/Content'
import SEO from '../components/SEO'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from '../styles/Index.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <SEO title='Mikhail Baev' siteName='Frontend Developer' />
      <div className={`${styles.wrapper}`}>
        <Buttons />
        <div className={styles.sidebar_container}>
          <Sidebar />
        </div>
        <main className={styles.content_container}>
          <Content />
        </main>
        <FloatingButton />
      </div>
    </>
  )
}

export default Home
