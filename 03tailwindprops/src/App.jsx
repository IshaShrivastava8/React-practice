import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let myObj = {
    userName :'Isha',
    age:23
  }
  return (
    <>
      <h1 className='bg-green-200 p-5 rounded-2xl mb-5'>Tailwind test</h1>
  
     <Card userName ="Isha" btnText ="Click Me"/>
     <Card userName ="Isha" />
    </>
  )
}

export default App
