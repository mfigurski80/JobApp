import { useState, useEffect } from 'react'
import './App.css'
import { JobApplication } from './types.d'

import JobAppForm from './JobAppForm'
import UpDownload from './UpDownload'
import Emoji from './Emoji'


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
        <Emoji count={stored.length}/>
      </div>
      <h1>Job App Register</h1>
      <h4>(Have {stored.length} Stored)</h4>
      <div className="card">
        <JobAppForm onSubmit={onSubmit}/> 
      </div>
      <UpDownload content={stored} setContent={setStored}/>
    </div>
  )
}

export default App
