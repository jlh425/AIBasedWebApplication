import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import hero from './components/hero';
import Demo from './components/demo';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <div className='main'>
          <div className='gradient'></div>
        </div>
        <div className='app'>
          <Hero />
          <Demo />
        </div>
      </main>
    </>
  )
}

export default App
