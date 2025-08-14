import { useState, useEffect } from 'react'
import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  // Listen for theme changes from ToggleButton
  useEffect(() => {
    const handleThemeChange = (event) => {
      setIsDarkTheme(event.detail.isDark)
    }
    
    window.addEventListener('themeChange', handleThemeChange)
    return () => window.removeEventListener('themeChange', handleThemeChange)
  }, [])

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkTheme 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
        : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'
    }`}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8 animate-slide-in">
          <h1 className={`text-4xl font-bold gradient-text mb-2 ${
            isDarkTheme ? 'text-white' : ''
          }`}>
            Interactive Counter App
          </h1>
          <p className={`text-lg animate-float ${
            isDarkTheme ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Explore smooth animations and modern UI
          </p>
        </div>
        <div className="space-y-8">
          <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <ToggleButton isDarkTheme={isDarkTheme} />
          </div>
          <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <Counter isDarkTheme={isDarkTheme} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
