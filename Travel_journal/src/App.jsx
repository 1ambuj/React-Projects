import { useState } from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Data from './data.js'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const render = Data.map((item)=>{
   return ( 
        <Main 
          {...item}  
        />
   )
  })
  

  return (
       <div className="container">
          <Navbar />
           {render}
       </div>
  )
}

export default App
