import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const colors = ['#e95353', '#e98553', '#e9b853', '#53b8e9', '#9353e9', '#53e993']

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    const savedColor = localStorage.getItem('themeColor') || colors[0]
    
    setTheme(savedTheme)
    document.body.classList.toggle('dark', savedTheme === 'dark')
    document.documentElement.style.setProperty('--accent-color', savedColor)
    
    const idx = colors.indexOf(savedColor)
    if (idx !== -1) setColorIndex(idx)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
    document.body.classList.toggle('dark', nextTheme === 'dark')
  }

  const cycleColor = () => {
    const nextIndex = (colorIndex + 1) % colors.length
    const nextColor = colors[nextIndex]
    setColorIndex(nextIndex)
    localStorage.setItem('themeColor', nextColor)
    document.documentElement.style.setProperty('--accent-color', nextColor)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, cycleColor, currentColor: colors[colorIndex] }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
