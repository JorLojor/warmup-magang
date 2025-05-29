import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="top-0 px-5">
        <Navbar />  
      </div>
      <div>
        <Hero />
      </div>
    </div>
  )
}

export default App
