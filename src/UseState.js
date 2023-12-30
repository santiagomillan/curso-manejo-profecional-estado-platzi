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

  const onConfirm = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed:true,
    })
  }

  const onError = () =>{
    setState({
      ...state,
      error: true,
      loading: false
    })
  }

  const onWrite = (newValue) => {
    setState({
      ...state,
      value: newValue
    })
  }

  const onCheck = () =>{
    setState({
      ...state,
      loading: true
    })
  }

  const onDelete = () => {
    setState({
      ...state,
      deleted: true
    })
  }

  const onReset=()=>{
    setState({
      ...state,
      confirmed: false,
      deleted: false,
      value: "",
    })
  }

  useEffect(()=>{
    if(!!state.loading){
      setTimeout(()=>{
        if(state.value === SECURITY_CODE){
          onConfirm()
        }
        else{
          onError()
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
          onWrite(event.target.value)
        }}
      />
      <button
        onClick={()=> 
          onCheck()
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
            onDelete()
          }}
        >
          Si, eliminar
        </button>
        <button
          onClick={() => {
            onReset()
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
