import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { JobApplication, JobAppStatus } from './types.d.ts'

function App() {
  const [stored, setStored] = useState<JobApplication[]>(
    JSON.parse(localStorage.getItem('stored') || '[]'))

  const [newInput, setNewInput] = useState<JobApplication>({
    name: '',
    source: '',
    date: '',
    status: 'applied'
  })

  useEffect(() => {
    localStorage.setItem('stored', JSON.stringify(stored))
  }, [stored])


  return (
    <div className="App">
      <div>
        <h2 className="logo">🎂</h2> 
      </div>
      <h1>Job App Register</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
