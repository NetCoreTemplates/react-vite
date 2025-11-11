import { useState } from 'react'
import { DarkModeToggle, PrimaryButton } from '@servicestack/react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-screen-xl mx-auto p-8 text-center min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="flex gap-4 mb-8">
        <a href="https://servicestack.net" target="_blank" rel="noreferrer">
          <svg className="h-28 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M96 216c81.7 10.2 273.7 102.3 304 232H8c99.5-8.1 184.5-137 88-232m32-152c32.3 35.6 47.7 83.9 46.4 133.6C257.3 231.3 381.7 321.3 408 448h96C463.3 231.9 230.8 79.5 128 64"/>
          </svg>
        </a>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="h-28 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="h-28 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] logo-react"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-8">Vite + React + Tailwind</h1>
      <DarkModeToggle />
      <div className="p-8">
        <PrimaryButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </PrimaryButton>
        <p className="mt-8 text-gray-700 dark:text-gray-300">
          Edit <code className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-2 py-1 rounded font-mono">src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
