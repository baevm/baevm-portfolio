import { AnimatePresence, motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import '../components/CustomCursor/style.scss' // styles for cursor cause .module not working properly
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
          <AnimatePresence>
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

// TODO: loading animation +
// page switch animation +
// dark theme + (particles not showing on dark theme. ?why?) (dark theme flickering if its saved in localStorage)
// SEO +
// adaptive for mobile +
// tech skills
// projects page
// language switch
// particles animations
// fix cursor first renders at x: 0 y: 0
// fix page jumping from the bottom when switching between pages
// some optimizations
// 
