import React, { useState } from 'react'

function UseState({name}) {

  const [error, setError] = useState(false);


  return (
    <div>
    <h2>Eliminar {name}</h2>
    <p>Por favor, escriba el código de seguridad.</p>
    {error && (
      <p>Código incorrecto. Por favor intente nuevamente.</p>
    )}
    <input type='text' placeholder='código de seguridad'/>
    <button
      onClick={()=> setError(!error)}
    >Comprobar</button>
  </div>
  )
}

export { UseState }