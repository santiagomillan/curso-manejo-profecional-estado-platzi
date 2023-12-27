import React, { Component } from 'react'
import {Loading} from './Loading'

class ClassState extends Component {
  constructor(props) {
    super(props);

    this.state={
      error: false,
      loading: false,
    }
  }

  // componentDidMount(){
  //   console.log("componentDidMount")
  // }

  componentDidUpdate(){
    console.log("componentDidUpdate")

    if(!!this.state.loading){
      setTimeout(()=>{
        console.log("Haciendo val")
        this.setState({loading: false})
        console.log("fin val")
    }, 3000)
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor, escriba el código de seguridad.</p>
        {this.state.error && (
          <p>Código incorrecto. Por favor intente nuevamente.</p>
        )}
        {this.state.loading && (
          <Loading/>
        )}
        <input type='text' placeholder='código de seguridad'/>
        <button
          // onClick={() => this.setState(prevState => ({error : !prevState.error}))}
          onClick={()=> this.setState({loading: true})}
        >Comprobar</button>
      </div>
    )
  }
}

export {ClassState}
