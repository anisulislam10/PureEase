import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className="sm:bg-green-400 md:bg-red-400 lg:bg-yellow-300 xsm:bg-blue-500 lg:text-center ">
    Hello world!
  </h1>
  )
}

export default App
