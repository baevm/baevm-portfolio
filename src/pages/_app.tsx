import { AnimatePresence, motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Provider, useDispatch } from 'react-redux'
import Layout from '../components/Layout/Layout'
import store from '../redux/store'
import '../styles/globals.scss'
import '../styles/locomotive-scroll.scss'
import '../components/CustomCursor/style.scss' // styles for cursor because .module not working properly
import { hideLoading, showLoading } from '../redux/Reducer'

const variants = {
  hidden: { opacity: 0, x: -1, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 1, y: 0 },
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  

  return (
    <>
      <Head>
        <link rel='icon' type='image/png' href='/favicon.png' sizes='32x32' />
      </Head>
      <Provider store={store}>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              variants={variants}
              initial='hidden'
              animate='enter'
              exit='exit'
              transition={{ type: 'linear' }}
              key={router.asPath}
              id='layoutId'>
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp

// TODO:
// projects page gifs
// language switch
// particles animations
// FIXME:
// fix cursor first renders at x: 0 y: 0
// change font-display from swap to smth else

