import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ThreeViewer from './components/ThreeViewer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ThreeViewer />
      <p className='bg-blue-500'>test</p>
    </div>
  )
}

export default App
