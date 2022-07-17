import type { NextPage } from 'next'
import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useSelector } from 'react-redux'
import FloatingButton from '../components/FloatingButton/FloatingButton'
import Buttons from '../components/MainPage/Buttons'
import Content from '../components/MainPage/Content'
import SEO from '../components/SEO'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from '../styles/Index.module.scss'

const Home: NextPage = () => {
  const containerRef = useRef(null)
  return (
    <>
      <SEO title='Mikhail Baev' siteName='Frontend Developer' />

      <div className={`${styles.wrapper}`}>
        <Buttons />
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: { smooth: true },
            tablet: { smooth: true },
            lerp: 0.03,
            multiplier: 1.4,
          }}
          containerRef={containerRef}>
          <main className={styles.content_container} ref={containerRef} data-scroll-section>
            <Content />
          </main>
        </LocomotiveScrollProvider>
        <FloatingButton />
      </div>
    </>
  )
}

export default Home
