import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Incrementing=()=>{
    setCount(count+1);
  }
  const Decrementing=()=>{
    setCount(count-1);
  }
  return (
    <>
      <h1>Counter 🙂</h1>
      <h3>Current value is {count}</h3>
      <button 
      onClick={Incrementing}>Increment</button> <button
      onClick={Decrementing}>Decrement</button>
      <p>Thanks For Using It Dude 🤠</p>
    </>
  )
}

export default App
