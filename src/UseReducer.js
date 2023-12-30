import React, { Fragment, useEffect, useReducer, useState } from "react";

const SECURITY_CODE = "paradigma";

function UseReducer({ name }) {
    const [state, dispatch] = useReducer(reducer, initialState );



    // const onWrite = (newValue) => {
    // setState({
    //     ...state,
    //     value: newValue,
    // });
    // };


    useEffect(() => {
        if (!!state.loading) {
        setTimeout(() => {
            if (state.value === SECURITY_CODE) {
            dispatch({
                type: "CONFIRM"
            });
            } else {
            dispatch({
                type: "ERROR"
            })
            }
        }, 3000);
        }
    }, [state.loading]);

    if (!state.deleted && !state.confirmed) {
        return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escriba el código de seguridad.</p>
            {state.error && !state.loading && (
            <p>Código incorrecto. Por favor intente nuevamente.</p>
            )}
            {state.loading && <p>Cargando...</p>}
            <input
            type="text"
            placeholder="código de seguridad"
            value={state.value}
            onChange={(event) => {
                dispatch({
                    type: "WRITE",
                    payload: event.target.value,
                })
                // onWrite(event.target.value);
            }}
            />
            <button onClick={() => 
                // onCheck()
                dispatch({
                    type: "CHECK",
                })
            }
            >Comprobar</button>
        </div>
        );
    } else if (state.confirmed && !state.deleted) {
        return (
        <Fragment>
            <p>Pedimos confirmacion, estas seguro?</p>
            <button
            onClick={() => {
                // onDelete();
                dispatch({
                    type: "DELETE",
                })
            }}
            >
            Si, eliminar
            </button>
            <button
            onClick={() => {
                // onReset();
                dispatch({
                    type: "RESET",
                })
            }}
            >
            No, cancelar
            </button>
        </Fragment>
        );
    } else {
        return (
        <Fragment>
            <h2>Eliminado con exito</h2>
            <button
            onClick={() => {
                // setState({
                // ...state,
                // confirmed: false,
                // deleted: false,
                // value: "",
                // });
                dispatch({
                    type: "RESET",
                })
            }}
            >
            Reinicio
            </button>
        </Fragment>
        );
    }
}

const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const reducerObject = (state, payload) => ({
  'ERROR': {
    ...state,
    error: true,
    loading: false,
  },
  'CHECK': {
    ...state,
    loading: true,
  },
  'CONFIRM':{
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  'DELETE': {
    ...state,
    deleted: true,
  },
  'RESET':{
    ...state,
    confirmed: false,
    deleted: false,
    value: "",
  },
  'WRITE':{
    ...state,
    value: payload
  },

});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload )[action.type];
  } else {
    return state;
  }
};

export { UseReducer };
