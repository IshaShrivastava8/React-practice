import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  let [counter,setCounter] = useState(10);
  
  const addValue = () =>{
    // counter = counter+1
    if(counter>20){
      counter = 20;
      alert('Highest limit reached')
    }
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // All this will be batched together therefore will run only once
  }

  const removeValue = () =>{

    counter = counter-1

    if(counter<0){
      counter = 0;
      alert('Least limit reached')
    }
    setCounter(counter)
  }


  return (
   <>
   <h1>Chai aurr react</h1>
   <h2>Counter Value : {counter}</h2>
   <button onClick={addValue}>Add Value</button>
   <br />
   <button onClick ={removeValue}> Remove Value</button>
   </>
  )
}

export default App
