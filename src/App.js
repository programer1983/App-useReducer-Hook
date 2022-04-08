import {useState, useReducer} from "react"
import './App.css';

const initialState = 0

function reducer(state, action) {
  switch(action.type){
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    default: 
       throw new Error()
  }
}


function App() {
  // const [counter, setCounter] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)

  // const incremaent = () => {
  //   setCounter(counter + 1) 
  // }

  // const decremaent = () => {
  //   setCounter(counter - 1) 
  // }


  return (
    <div className="App border">
      <h1>useReducer Hook</h1>
      <h2>{state}</h2>
      <button onClick={() => dispatch({type: "increment"})}>Incremaent</button>
      <button onClick={() => dispatch({type: "decrement"})}>Decremaent</button>
    </div>
  );
}

export default App;
