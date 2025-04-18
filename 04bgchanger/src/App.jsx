import { useState } from "react"

function App() {

  const [color,setColor] = useState ('olive');

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    ></div>
    <div className="fixed flex flex-wrap justify-center bottom-12 left-0 right-0 px-2">
    <div className="flex flex-wrap  justify-center gap-3 shadow-xl bg-white
    px-3 py-2 rounded-2xl">
      <button
      onClick={()=>setColor('red')}
       className=" outline-none px-4 rounded-full shadow-lg"
      style={{ backgroundColor: "red" }}>Red</button>
      <button
      onClick={()=>setColor('blue')}
       className=" outline-none px-4 rounded-full shadow-lg"
      style={{ backgroundColor: "blue" }}>Blue</button>
      <button
      onClick={()=>setColor('green')}
       className=" outline-none px-4 rounded-full shadow-lg"
      style={{ backgroundColor: "green" }}>Green</button>
      <button 
      onClick={()=>setColor('yellow')}
      className=" outline-none px-4 rounded-full shadow-lg"
      style={{ backgroundColor: "yellow" }}>Yellow</button>
      <button 
      onClick={()=>setColor('pink')}
      className=" outline-none px-4 rounded-full shadow-lg"
      style={{ backgroundColor: "pink" }}>Pink</button>
      <button 
      onClick={()=>setColor('wheat')}
      className=" outline-none px-4 rounded-full shadow-lg"
      style={{ backgroundColor: "wheat" }}>Beige</button>
    </div>
    </div>
    </>
  )
}

export default App
