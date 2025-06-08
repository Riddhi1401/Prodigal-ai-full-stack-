import { useState } from 'react'
import AIFullStackDashboard from './components/AIFullStackDashboard';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AIFullStackDashboard />
    </>
  )
}

export default App
