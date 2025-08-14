import { useState } from 'react'

function Counter({ isDarkTheme }) {
  const [count, setCount] = useState(0)
  const [lastAction, setLastAction] = useState('')

  const increment = (value) => {
    setCount(count + value)
    setLastAction(`+${value}`)
    setTimeout(() => setLastAction(''), 1000)
  }

  const double = () => {
    setCount(count * 2)
    setLastAction('×2')
    setTimeout(() => setLastAction(''), 1000)
  }

  const half = () => {
    setCount(Math.floor(count / 2))
    setLastAction('÷2')
    setTimeout(() => setLastAction(''), 1000)
  }

  const reset = () => {
    setCount(0)
    setLastAction('Reset')
    setTimeout(() => setLastAction(''), 1000)
  }

  return (
    <div className={`glass rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 animate-glow ${
      isDarkTheme ? 'dark-glass' : ''
    }`}>
      <h1 className={`text-3xl font-bold text-center mb-8 gradient-text ${
        isDarkTheme ? 'text-white' : ''
      }`}>
        Counter App
      </h1>
      
      {/* Counter Display */}
      <div className="relative mb-8">
        <div className={`text-7xl font-bold text-center p-8 rounded-2xl border shadow-inner min-w-[200px] transition-all duration-300 hover:shadow-lg animate-float ${
          isDarkTheme 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-600' 
            : 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100'
        }`}>
          <span className="gradient-text">
            {count}
          </span>
        </div>
        
        {/* Action Indicator */}
        {lastAction && (
          <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
            {lastAction}
          </div>
        )}
      </div>

      {/* Button Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <button 
          className="group relative px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/30"
          onClick={() => increment(1)}
        >
          <span className="relative z-10">+1</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        
        <button 
          className="group relative px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/30"
          onClick={() => increment(5)}
        >
          <span className="relative z-10">+5</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        
        <button 
          className="group relative px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/30"
          onClick={() => increment(10)}
        >
          <span className="relative z-10">+10</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        
        <button 
          className="group relative px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:scale-105 active:scale-95 shadow-lg hover:shadow-green-500/30"
          onClick={double}
        >
          <span className="relative z-10">×2</span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        
        <button 
          className="group relative px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:scale-105 active:scale-95 shadow-lg hover:shadow-orange-500/30"
          onClick={half}
        >
          <span className="relative z-10">÷2</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        
        <button 
          className="group relative px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:scale-105 active:scale-95 shadow-lg hover:shadow-red-500/30 col-span-2 md:col-span-1"
          onClick={reset}
        >
          <span className="relative z-10">Reset</span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  )
}

export default Counter