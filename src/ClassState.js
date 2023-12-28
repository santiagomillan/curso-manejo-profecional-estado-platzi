import React, { Component } from 'react'
import {Loading} from './Loading'

const SECURITY_CODE = "paradigma";
class ClassState extends Component {
  constructor(props) {
    super(props);

    this.state={
      value: "", 
      error: false,
      loading: false,
    }
  }

  // componentDidMount(){
  //   console.log("componentDidMount")
  // }

  componentDidUpdate(){
    if(!!this.state.loading){
      setTimeout(()=>{
        console.log("Haciendo val")

        if(SECURITY_CODE === this.state.value){
          this.setState({error:false, loading: false});
        }else{
          this.setState({error: true, loading: false})
        }

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
        {(this.state.error && !this.state.loading) && (
          <p>Código incorrecto. Por favor intente nuevamente.</p>
        )}
        {this.state.loading && (
          <Loading/>
        )}
        <input 
          type='text' 
          placeholder='código de seguridad'
          value={this.state.value}  
          onChange={(event)=> {
            this.setState({value: event.target.value})
          }}
        />
        <button
          // onClick={() => this.setState(prevState => ({error : !prevState.error}))}
          onClick={()=> this.setState({loading: true})}
        >Comprobar</button>
      </div>
    )
  }
}

export {ClassState}
