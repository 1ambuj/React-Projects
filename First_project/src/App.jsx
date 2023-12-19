import { useState } from 'react'
import reactlogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import babbu from './assets/babbu.jpeg'
import Header from './Components/Header'
import Maincontent from './Components/Main'
import Footer from './Components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className="container-body">
        <Header />
        <Maincontent />
        <Footer />
      </div>
    </div>
  )
}

export default App
