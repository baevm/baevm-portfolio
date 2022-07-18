import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Buttons from '../components/MainPage/Buttons'
import Content from '../components/MainPage/Content'
import SEO from '../components/SEO'
import styles from '../styles/Index.module.scss'

const Projects = () => {
  const { asPath } = useRouter()
  const containerRef = useRef(null)


  return (
    <>
      <SEO title='Mikhail Baev' siteName='Projects' />
      <div className={`${styles.wrapper}`}>
        <Buttons />
        <main className={styles.content_container}>
          <Content type='projects'/>
        </main>
      </div>
    </>
  )
}

export const getStaticProps = async () =>{
 
}

export default Projects
