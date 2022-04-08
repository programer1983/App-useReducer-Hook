import {useState, useReducer} from "react"
import './App.css';

const initialState = [
  {
    id: Date.now(), 
    name: "Dimon", 
    email: "dimon@gmail.com"
  }
]

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
  const [state, dispatch] = useReducer(reducer, initialState)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <div className="App border">
      <h1>useReducer Hook</h1>
      <form>
        <input 
           type="text" 
           placeholder="name" 
           value={name}
           onChange={(e) => setName(e.target.value)}
        />
         <input 
           type="text" 
           placeholder="email" 
           value={email}
           onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <button onClick={() => dispatch({type: "increment"})}>Incremaent</button>
      <button onClick={() => dispatch({type: "decrement"})}>Decremaent</button>
    </div>
  );
}

export default App;
