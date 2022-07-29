import { AnimatePresence, motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import '../components/CustomCursor/style.scss' // styles for cursor because .module not working properly
import Layout from '../components/Layout/Layout'
import store from '../redux/store'
import '../styles/globals.scss'
import '../styles/locomotive-scroll.scss'

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
// page switch animation
// projects page gifs
// language switch
// particles animations
// 404 page
// FIXME:
// floating to top button moves to top but scrollbar somehow stays at the bottom and bugs whole locomotive scrolling (???)
// fix cursor first renders at x: 0 y: 0
// some optimizations
// change font-display from swap to smth else
// header renders again when switching between pages