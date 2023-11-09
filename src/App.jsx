import { useState } from 'react'
import './App.css'
import Pedidos from './Components/Pedidos'
import Pizza from './Components/Pizza'

function App() {
  const [toggle, setToggle] = useState(false)
  
  return (
      <>
        <Pedidos/>
        
      </>
  )
}

export default App
