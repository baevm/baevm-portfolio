import { AnimatePresence, motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import '../components/CustomCursor/style.scss' // styles for cursor because .module not working properly
import Layout from '../components/Layout/Layout'
import store from '../context/store'
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
// loading animation +
// page switch animation +
// dark theme +
// SEO +
// adaptive for mobile +
// tech skills
// projects page
// footer
// language switch
// particles animations
// buttons animations +
// FIXME: 
// floating to top button moves to top but scrollbar somehow stays at the bottom and bugs whole locomotive scrolling (???)
// particles not showing on dark theme. ?why? (dark theme flickering if its saved in localStorage)
// fix cursor first renders at x: 0 y: 0
// some optimizations
//
