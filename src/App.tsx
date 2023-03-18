import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import JobAppForm from './JobAppForm'
import UpDownload from './UpDownload'

import { JobApplication, JobAppStatus } from './types.d'

function App() {
  const [stored, setStored] = useState<JobApplication[]>(
    JSON.parse(localStorage.getItem('stored') || '[]'))

  useEffect(() => {
    localStorage.setItem('stored', JSON.stringify(stored))
  }, [stored])

  const onSubmit = (newJobApp: JobApplication) => {
    setStored([...stored, newJobApp])
  }

  return (
    <div className="App">
      <div>
        <h2 className="logo">🎂</h2> 
      </div>
      <h1>Job App Register</h1>
      <h4>(Have {stored.length} Stored)</h4>
      <div className="card"> </div>
      <JobAppForm onSubmit={onSubmit}/> 
      <UpDownload content={stored} setContent={setStored}/>
    </div>
  )
}

export default App
