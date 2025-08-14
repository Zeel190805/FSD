import { useState } from 'react'

function ToggleButton({ isDarkTheme }) {
  const [isOn, setIsOn] = useState(false)

  const toggleLight = () => {
    const newState = !isOn
    setIsOn(newState)
    
    // Emit theme change event
    window.dispatchEvent(new CustomEvent('themeChange', {
      detail: { isDark: !newState } // When light is OFF, dark theme is ON
    }))
  }

  return (
    <div className={`glass rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 ${
      isDarkTheme ? 'dark-glass' : ''
    }`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-4 h-4 rounded-full transition-all duration-500 ease-out ${
          isOn 
            ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50 animate-pulse' 
            : 'bg-gray-400'
        }`}></div>
        <h2 className={`text-2xl font-semibold ${
          isDarkTheme ? 'text-gray-200' : 'text-gray-800'
        }`}>
          Light is <span className={isOn ? 'text-yellow-600' : 'text-gray-600'}>{isOn ? 'ON' : 'OFF'}</span>
        </h2>
      </div>
      
      <button 
        onClick={toggleLight}
        className={`relative px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 shadow-lg ${
          isOn 
            ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-yellow-400/30 hover:shadow-yellow-400/50' 
            : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-gray-600/30 hover:shadow-gray-600/50'
        }`}
      >
        <span className="relative z-10">{isOn ? 'Turn Off' : 'Turn On'}</span>
        <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isOn 
            ? 'bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 hover:opacity-100' 
            : 'bg-gradient-to-r from-gray-500 to-gray-600 opacity-0 hover:opacity-100'
        }`}></div>
      </button>
    </div>
  )
}

export default ToggleButton