import Content from '../components/Content/Content'
import SEO from '../components/SEO'
import { getProjectsList } from '../services/graphcms'
import styles from '../styles/Index.module.scss'

const Projects = ({ data }: any) => {
  
  return (
    <>
      <SEO title='Mikhail Baev' siteName='Projects' />
      <div className={`${styles.wrapper}`}>
        <main className={styles.content_container}>
          <Content type='projects' projects={data} />
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







