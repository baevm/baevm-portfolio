import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import '../components/CustomCursor/style.scss' // styles for cursor cause .module not working properly
import Layout from '../components/Layout/Layout'
import store from '../context/store'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no' />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp

// TODO: loading animation +
// page switch animation
// dark theme
// tech skills
// adaptive for mobile
// projects page
// about page
// contact page
// language switch
// particles animations
// SEO
// fix cursor first renders at x: 0 y: 0
// some optimizations
