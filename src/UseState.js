import React, { useEffect, useState } from 'react'

function UseState({name}) {

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    console.log("first efecto")

    if(!!loading){
      setTimeout(()=>{
        console.log("Haciendo val")
        setLoading(!loading)
        console.log("fin val")
    }, 3000)
    }

    console.log("termina efecto")
  }, [loading]);


  return (
    <div>
    <h2>Eliminar {name}</h2>
    <p>Por favor, escriba el código de seguridad.</p>
    {error && (
      <p>Código incorrecto. Por favor intente nuevamente.</p>
    )}
    {loading && (
      <p>Cargando...</p>
    )}
    <input type='text' placeholder='código de seguridad'/>
    <button
      onClick={()=> setLoading(true)} //setError(!error)
    >Comprobar</button>
  </div>
  )
}

export { UseState }