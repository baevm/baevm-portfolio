import type { NextPage } from 'next'
import Content from '../components/Content/Content'
import SEO from '../components/SEO'
import styles from '../styles/Index.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <SEO title='Mikhail Baev' siteName='Frontend Developer' />
      <div className={`${styles.wrapper}`}>
        <main className={styles.content_container}>
          <Content type='index' />
        </main>
      </div>
    </>
  )
}

export default Home
