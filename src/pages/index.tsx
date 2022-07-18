import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import FloatingButton from '../components/FloatingButton/FloatingButton'
import Buttons from '../components/MainPage/Buttons'
import Content from '../components/MainPage/Content'
import SEO from '../components/SEO'
import styles from '../styles/Index.module.scss'

const Home: NextPage = () => {
  const { asPath } = useRouter()
  const containerRef = useRef(null)
  return (
    <>
      <SEO title='Mikhail Baev' siteName='Frontend Developer' />
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
        location={asPath}>
        <div className={`${styles.wrapper}`}>
          <Buttons />
          <main className={styles.content_container}>
            <Content />
          </main>
          {/* <FloatingButton /> */}
        </div>
      </LocomotiveScrollProvider>
    </>
  )
}

export default Home
