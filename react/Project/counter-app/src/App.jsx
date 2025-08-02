import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCounter] = useState(0);
const addValue = ()=>{
  counter = counter+1
setCounter(counter)
}
const decreaseValue = ()=>{
if(counter>0)
{
  setCounter(counter-1)
}
}
  return (
    <>
      <h1>Counter</h1>
      <h2>Couter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <br/>
      <button onClick={decreaseValue}> Decrease Value</button>
      </>
  )
}

export default App
