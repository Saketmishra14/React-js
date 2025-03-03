import { useState } from 'react'

import './App.css'

function App() {
  const  [color, setcolor] = useState("green")

  return (
    <>
    <div className='w-full h-screen text-white duration-200'
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'> 
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button onClick={()=>setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setcolor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>setcolor("olive")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"olive"}}>Olive</button>
          <button onClick={()=>setcolor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=>setcolor("white")}className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
          style={{backgroundColor:"white"}}>White</button>
          <button onClick={()=>setcolor("purple")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=>setcolor("brown")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"brown"}}>Brown</button>
          <button onClick={()=>setcolor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setcolor("skyblue")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"skyblue"}}>Sky-blue</button>
          
          
        </div>
      </div>
    
    </div>
      
    </>
  )
}

export default App
