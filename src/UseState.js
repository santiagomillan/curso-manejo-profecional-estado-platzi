import React, { useEffect, useState } from 'react'

const SECURITY_CODE = "paradigma";

function UseState({name}) {
  const [value, setValue] = useState("")
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(value)
  useEffect(()=>{
    
    console.log("first efecto")

    if(!!loading){
      // setError(false);
      setTimeout(()=>{
        if(value !== SECURITY_CODE){
          setError(true)
        }
        else{
          setError(false)
        }
        console.log("valor correcto", value)
        setLoading(false)
      }, 3000)
    }
  }, [loading]);


  return (
    <div>
    <h2>Eliminar {name}</h2>
    <p>Por favor, escriba el código de seguridad.</p>
    {(error && !loading) && (
      <p>Código incorrecto. Por favor intente nuevamente.</p>
    )}
    {loading && (
      <p>Cargando...</p>
    )}
    <input 
      type='text' 
      placeholder='código de seguridad' 
      value={value}
      onChange={(event)=> {
        // setError(false)
        setValue(event.target.value)
      }}
    />
    <button
      onClick={()=> setLoading(true)} //setError(!error)
    >Comprobar</button>
  </div>
  )
}

export { UseState }