import { AnimatePresence, m } from 'framer-motion'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import useCursorType from '../../hooks/useCursorType'
import { useTheme } from '../../hooks/useTheme'

const ThemeButton = () => {
  const variants = {
    initial: { x: 0, y: -40, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: 0, y: 40, opacity: 0 },
  }
  const { theme, changeTheme } = useTheme()
  const { changeCursorType } = useCursorType()

  const handleThemeChange = (theme: string) =>{
    changeTheme(theme)
    changeCursorType('default')
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {theme === 'dark' ? (
        <m.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={variants}
          transition={{ duration: 0.5 }}
          key={theme}>
          <MdOutlineDarkMode
            fontSize='2.5rem'
            onClick={() => handleThemeChange('light')}
            onMouseEnter={() => changeCursorType('hamburger')}
            onMouseLeave={() => changeCursorType('default')}
          />
        </m.div>
      ) : (
        <m.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={variants}
          transition={{ duration: 0.5 }}
          key={theme}>
          <MdOutlineLightMode
            fontSize='2.5rem'
            onClick={() => handleThemeChange('dark')}
            onMouseEnter={() => changeCursorType('hamburger')}
            onMouseLeave={() => changeCursorType('default')}
          />
        </m.div>
      )}
    </AnimatePresence>
  )
}

export default ThemeButton
