import React, { useEffect, useState } from 'react'

const SECURITY_CODE = "paradigma";

function UseState({name}) {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
  })
  // const [value, setValue] = useState("")
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if(!!state.loading){
      // setError(false);
      setTimeout(()=>{
        if(state.value !== SECURITY_CODE){
          console.log(state.value, "if")
          setState({
            ...state,
            error: true,
            loading: false,
          })

          // setError(true)
        }
        else{
          console.log(state.value, "else")
          setState({
            ...state,
            error: false,
            loading: false
          })
          // setError(false)
        }
        // setState({
        //   ...state,
        //   loading: false
        // })
        // setLoading(false)
      }, 3000)
    }
  }, [state.loading]);


  return (
    <div>
    <h2>Eliminar {name}</h2>
    <p>Por favor, escriba el código de seguridad.</p>
    {(state.error && !state.loading) && (
      <p>Código incorrecto. Por favor intente nuevamente.</p>
    )}
    {state.loading && (
      <p>Cargando...</p>
    )}
    <input 
      type='text' 
      placeholder='código de seguridad' 
      value={state.value}
      onChange={(event)=> {
        // setError(false)
        // setValue(event.target.value)
        setState({
          ...state,
          value: event.target.value
        })
      }}
    />
    <button
      onClick={()=> 
        setState({
          ...state,
          loading: true
        })
        // setLoading(true)
      } //setError(!error)
    >Comprobar</button>
  </div>
  )
}

export { UseState }
