import { useState } from 'react';
import type { JobApplication } from './types.d';

import ConfettiExplosion from 'react-confetti-explosion';


import './JobAppForm.css';

function defaultJobApp(): JobApplication {
  return {
    source: '',
    name: '',
    company: '',
    status: 'applied',
    date: new Date().toISOString(),
  };
}

export default function JobAppForm({ onSubmit }: { onSubmit: (jobApp: JobApplication) => void }) {
  const [job, setJob] = useState<JobApplication>(defaultJobApp() as JobApplication)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const application: JobApplication = {
      ...defaultJobApp(),
      ...job,
    }
    setJob(defaultJobApp())
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), confettiProps.duration)
    onSubmit(application)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="jobSource">Source</label>
      <input type="text" id="jobSource" name="jobSource" placeholder="https://linkedin..."
        value={job.source} onChange={e => setJob({ ...job, source: e.target.value })}
      />
      <label htmlFor="jobName">Position Name</label>
      <input type="text" id="jobName" name="jobName" placeholder="Marketing Associate"
        value={job.name} onChange={e => setJob({ ...job, name: e.target.value })}
      />
      <label htmlFor="jobCompany">Company</label>
      <input type="text" id="jobCompany" name="jobCompany" placeholder="Sarenka Pole Ac."
        value={job.company} onChange={e => setJob({...job, company: e.target.value })}
      />
      <button type="submit">
        Submit 
        {showConfetti && <ConfettiExplosion {...confettiProps} />}
      </button>
    </form>
  )
}

const confettiProps = {
  duration: 2500,
  colors: ['#a864fd', '#ff718d', '#fd9f9a'],
}
