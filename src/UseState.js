import React, { Fragment, useEffect, useState } from 'react'

const SECURITY_CODE = "paradigma";

function UseState({name}) {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed:false,
  })

  useEffect(()=>{
    if(!!state.loading){
      setTimeout(()=>{
        // if(state.value !== SECURITY_CODE){
        //   console.log(state.value, "if")
        //   setState({
        //     ...state,
        //     error: true,
        //     loading: false,
        //   })
        // }
        // else{
        //   console.log(state.value, "else")
        //   setState({
        //     ...state,
        //     error: false,
        //     loading: false
        //   })
        // }
        if(state.value === SECURITY_CODE){
          console.log(state.value, "if")
          setState({
            ...state,
            error: false,
            loading: false,
            confirmed:true,
          })
        }
        else{
          console.log(state.value, "else")
          setState({
            ...state,
            error: true,
            loading: false
          })
        }
      }, 3000)
    }
  }, [state.loading]);


  if(!state.deleted && !state.confirmed){
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
        } 
      >Comprobar</button>
    </div>
    )
  }else if(state.confirmed && !state.deleted){
    return (
      <Fragment>
        <p>Pedimos confirmacion, estas seguro?</p>
        <button
          onClick={() => {
            setState({
              ...state,
              deleted: true
            })
          }}
        >
          Si, eliminar
        </button>
        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              value: "",
            })
          }}
        >
          No, cancelar
        </button>
      </Fragment>
    )
  }else{
    return (
      <Fragment>
        <h2>Eliminado con exito</h2>
        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              deleted: false,
              value: ""
            })
          }}
        >
          Reinicio
        </button>
      </Fragment>
    )
  }
}

export { UseState }
