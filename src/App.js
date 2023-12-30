import { UseState } from './UseState.js'
import { ClassState } from './ClassState.js'

import './App.css';
import { UseReducer } from './UseReducer.js';

function App() {
  return (
    <div className="App">
      <UseState name={"UseState"}/>
      <ClassState name={"ClassState"}/>
      <UseReducer name={"useReducer"}/>
    </div>
  );
}

export default App;
