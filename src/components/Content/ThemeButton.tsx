import { AnimatePresence, motion } from 'framer-motion'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useTheme } from '../../hooks/useTheme'
import { setCursorType } from '../../redux/Reducer'

const ThemeButton = () => {
  const variants = {
    initial: { x: 0, y: -40, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: 0, y: 40, opacity: 0 },
  }
  const dispatch = useDispatch()
  const { theme, changeTheme } = useTheme()

  const handleChangeCursor = (type: string) => {
    return dispatch(setCursorType(type))
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {theme === 'dark' ? (
        <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={variants}
          transition={{ duration: 0.5 }}
          key={theme}>
          <MdOutlineDarkMode
            fontSize='2.5rem'
            onClick={() => changeTheme('light')}
            onMouseEnter={() => handleChangeCursor('hamburger')}
            onMouseLeave={() => handleChangeCursor('default')}
          />
        </motion.div>
      ) : (
        <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={variants}
          transition={{ duration: 0.5 }}
          key={theme}>
          <MdOutlineLightMode
            fontSize='2.5rem'
            onClick={() => changeTheme('dark')}
            onMouseEnter={() => handleChangeCursor('hamburger')}
            onMouseLeave={() => handleChangeCursor('default')}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ThemeButton
