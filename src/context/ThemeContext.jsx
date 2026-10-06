import { useEffect, useState } from 'react'
import ThemeContext from './themeContextDefinition'

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // 1. LocalStorage 확인
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    
    // 2. 기본값은 다크모드
    return true
  })

  useEffect(() => {
    const root = window.document.documentElement
    
    if (isDark) {
      root.classList.add('dark')
      root.style.colorScheme = 'dark'
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark((previousIsDark) => !previousIsDark)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
