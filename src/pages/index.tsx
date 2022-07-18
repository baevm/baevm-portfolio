import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import FloatingButton from '../components/FloatingButton/FloatingButton'
import Buttons from '../components/Content/Buttons'
import Content from '../components/Content/Content'
import SEO from '../components/SEO'
import styles from '../styles/Index.module.scss'

const Home: NextPage = () => {
  const { asPath } = useRouter()
  const containerRef = useRef(null)
  return (
    <>
      <SEO title='Mikhail Baev' siteName='Frontend Developer' />
      <div className={`${styles.wrapper}`}>
        <Buttons />
        <main className={styles.content_container}>
          <Content type='index' />
        </main>
      </div>
    </>
  )
}

export default Home
