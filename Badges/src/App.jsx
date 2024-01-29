import { useState } from 'react'
import { useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Badges from "./Componenets/Badge.jsx"
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <h1 className='title'>BADGES</h1>
      <div className="badges-component">
      <div className='content'>
        <h3>SQUARE</h3>
        <h3>PILL</h3>
      </div>
        <Badges className="green" >Badges</Badges>
        <Badges className="yellow" >Badges</Badges>
        <Badges className="pink" >Badges</Badges>
        <Badges className="indigo">Badges</Badges>
        <Badges className="blue" >Badges</Badges>
        <Badges className="purpule">Badges</Badges>
        <Badges className="gray">Badges</Badges>
      </div>
    </div>
  )
}


export default App
