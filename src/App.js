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
    case "add":
      return [...state, action.payload]
    case "delete":
      return state - 1
    default: 
       throw new Error()
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  console.log(state)

  const addContact = (e) => {
    e.preventDefault()
    const contact = {
      id: Date.now(),
      name,
      email
    }
    setName("")
    setEmail("")
    dispatch({type: "add", payload: contact})
  }

  return (
    <div className="App border">
      <h1>useReducer Hook</h1>
      <form onSubmit={addContact}>
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
        <div>
          <button>Add Contact</button>
        </div>
      </form>
      <div>
        <ul>
          {state.map((contact) => {
            return (
              <li key={contact.id}>
                {contact.name}
                {contact.email}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
