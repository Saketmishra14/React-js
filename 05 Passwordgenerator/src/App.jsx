import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-yellow'>this is heading tag</h1>
     <h2>hello world</h2>
     <h5>no one gonna tell you </h5>
    </>
  )
}

export default App
