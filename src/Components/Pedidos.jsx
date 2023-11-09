import React from 'react'
import Pizza from './Pizza'
import { useEffect } from 'react'
import { useState } from 'react'


const Pedidos = () => {
    const [show, setShow] = useState(false)
    
   
    
    useEffect(() => {
        
        setTimeout(() => {
            console.log("El componente fue actualizado");
            setShow(true);
          }, 2000);
        
    }, [] )
   

    
    const cancelarPedido = () => {
        console.log('se Desmonta el componente')
        if (show){
            setShow(false)
        }
    }
    

  return (
    <div>
        <h1>Pedido de Pizza</h1>
        {show ? <Pizza/> : null}
        
        <button onClick={cancelarPedido}>Cancelar Pedido</button>
       
    </div>
  )
}

export default Pedidos
