import '../styles/globals.scss'
import '../components/CustomCursor/style.scss' // styles for cursor cause .module not working properly
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp

// TODO: loading animation
// dark theme
// tech skills
// adaptive for mobile
// projects page
// about page
// contact page
// language switch
// particles animations
//
// some optimizations

