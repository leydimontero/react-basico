import { useState } from 'react'
import './App.css'
import Lista from './Components/Lista'

function App() {
  const [search, setSearch] = useState('')
  const [docsFound, setDocsFound] = useState ([])
  const [show, setShow] = useState (false)
  const [error, setError] = useState (false)
  let doctores = [
    { id: 1, nombre: 'Rick Sanchez', especialidad: 'Gastroenterologo'},
    { id: 2, nombre: 'Julius Hibbert' , especialidad: 'Dermatologo'},
    { id: 3, nombre: 'Nick Riviera' , especialidad: 'Otrorrinonaringologo'},
    { id: 4, nombre: 'John Zoidberg ' , especialidad: 'Cirujano'}
  ]
  const handleChange = (event) => setSearch(event.target.value.trim())
  const handleSearch = () => {
    const filteredDocs = doctores.filter(doctor => doctor.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    setDocsFound(filteredDocs)
    if(filteredDocs.length > 0){
      setShow(true)
      setError(false)
    }else {
      setError(true)
      setShow(false)
    }
  }
  return (
    <>
      <input type="text" placeholder='Busqueda' onChange={handleChange} />
      <button onClick={handleSearch}>🔍</button>
      {!show && <Lista  doctores={doctores}/>}
      {search}
      {show && 
      <>
        <h3>Doctores encontrados</h3>
        <Lista doctores = {docsFound}/>
      </>
      }
      {error && <h3>No se encontraron doctores.</h3>}
    </>
  )
}

export default App
