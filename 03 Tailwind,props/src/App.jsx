import { useState } from 'react'
 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h2 className='bg-blue-700 font-bold field-sizing-fixed text-9xl text-black bg-pink-500'>tailwind css</h2>
  <div class="flex flex-col items-center p-7 rounded-2xl bg-black text-white  ">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png" />
  </div>
  <div class="flex">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <h1 className='text-white font-normal'>i am yash mishra.and i am start learning react to enhance my frontend journey</h1>
    <span class="flex">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
    </>
  )
}

export default App
