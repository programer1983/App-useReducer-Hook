import {useState, useReducer} from "react"
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)

  const incremaent = () => {
    setCounter(counter + 1) 
  }

  const decremaent = () => {
    setCounter(counter - 1) 
  }


  return (
    <div className="App border">
      <h1>useReducer Hook</h1>
      <h2>{counter}</h2>
      <button onClick={incremaent}>Incremaent</button>
      <button onClick={decremaent}>Decremaent</button>
    </div>
  );
}

export default App;
