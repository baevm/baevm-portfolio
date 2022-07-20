import { useState, useEffect } from 'react'
export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  const changeTheme = (t: string) => {
    if (t) {
      localStorage.setItem('theme', t)
      document.body.dataset.theme = t
      setTheme(t)
    }
  }

  return { theme, changeTheme }
}
