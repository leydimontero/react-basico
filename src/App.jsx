import { useState } from 'react'
import './App.css'
import RickApi from './Components/Actividad.Api/RickApi.jsx'

function App() {
  const [toggle, setToggle] = useState(false)
  
  return (
      <>
        
        <RickApi/>
        
      </>
  )
}

export default App
