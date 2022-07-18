import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import FloatingButton from '../components/FloatingButton/FloatingButton'
import Buttons from '../components/MainPage/Buttons'
import Content from '../components/MainPage/Content'
import SEO from '../components/SEO'
import styles from '../styles/Index.module.scss'

const Home: NextPage = () => {
  const containerRef = useRef(null)
  const { asPath } = useRouter()
  console.log(asPath)

  useEffect(() => {
    let scroll
    import('locomotive-scroll').then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
        lerp: 0.03,
        multiplier: 1.4,
      })
    })

    // `useEffect`'s cleanup phase
    return () => {
      if (scroll) scroll.destroy()
    }
  })

  return (
    <>
      <SEO title='Mikhail Baev' siteName='Frontend Developer' />
      <div className={`${styles.wrapper}`}>
        <Buttons />
          <main className={styles.content_container} ref={containerRef} data-scroll-section>
            <Content />
          </main>
          <FloatingButton />
      </div>
    </>
  )
}

export default Home
