import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Buttons from '../components/Content/Buttons'
import Content from '../components/Content/Content'
import SEO from '../components/SEO'
import { getProjectsList } from '../services/graphcms'
import styles from '../styles/Index.module.scss'

const Projects = ({ data }: any) => {
  const { asPath } = useRouter()
  const containerRef = useRef(null)
  console.log(data)
  return (
    <>
      <SEO title='Mikhail Baev' siteName='Projects' />
      <div className={`${styles.wrapper}`}>
        <Buttons />
        <main className={styles.content_container}>
          <Content type='projects' projects={data}/>
        </main>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await getProjectsList()

  return {
    props: {
      data,
    },
  }
}

export default Projects
