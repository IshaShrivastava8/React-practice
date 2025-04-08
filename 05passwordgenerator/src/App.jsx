import { useState ,useCallback, useEffect, useRef} from "react"



// 1. use Callback: used for optimization it calls the function inside it when the dependencies are changed and returns a memoized function saves func in cache
// 2.useeffect: runs the function inside it whenever the page renders first-time or dependencies are changed
// 3.use ref : used to give reference of selected components in our page so that functions can be performed on referenced values

function App() {
 
  const [length,setLength] = useState(8);
  const [number,setNumber] = useState(false);
  const [character,setCharacter]=useState(false);
  const [password,setPassword]=useState("");

  // useCallback uses memoization for optimization

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number){
      str+='0123456789'
    }
    if(character){
      str+="!@#$%^&*()/-"
    }

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,number,character,setPassword])


  useEffect(()=>{
    passwordGenerator()
  },[length,number,character,passwordGenerator])


  //useRef hook
  const passwordRef = useRef(null)

  const copyPasswordtoClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,101)
  window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-4 my-12 bg-gray-700 text-orange-300 text-center">
  <h2 className="text-xl font-semibold mb-4">Password Generator</h2>

  <div className="flex items-center gap-2">
    <input
      type="text"
      value={password}
      readOnly
      placeholder="Password"
      className="flex-1 py-2 px-4 rounded-lg outline-none text-black"
      style={{ backgroundColor: "#d5C2C2" }}
      ref={passwordRef}
    />

    <button
    onClick = {copyPasswordtoClipBoard}
     className="bg-green-400 text-black px-4 py-2 rounded-lg hover:bg-green-500">
      Copy
    </button>
  </div>
  <div className="flex text-sm gap-x-2">
    <div className="flex items-center gap-x-1">
      <input 
      type="range" 
      min={6} 
      max={100}
      value={length}
      className="cursor-pointer"
      onChange={(e)=>{setLength(e.target.value)}}
      />
      <label>{length}</label>
    </div>
    <div className="flex items-center gap-x-1" >
  <input
    type="checkbox"
    defaultChecked={number}
    id="numberInput"
    onChange={() => {
      setNumber((prev) => !prev);
    }}
  />
  <label >Include Numbers</label>
</div>

<div className="flex items-center gap-x-1">
  <input
      type="checkbox"
      defaultChecked={character}
      id="characterInput"
      onChange={() => {
          setCharacter((prev) => !prev )
      }}
  />
  <label >Characters</label>
</div>
</div>
</div>
    </>
  )
}

export default App
