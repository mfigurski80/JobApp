import { useState } from 'react';
import { JobAppStatus, JobApplication } from './types.d.ts';
import './JobAppForm.css';

function defaultJobApp(): Partial<JobApplication> {
  return {
    status: 'applied',
    date: new Date().toISOString(),
  };
}

export default function JobAppForm({ onSubmit }: { onSubmit: (jobApp: JobApplication) => void }) {
  const [job, setJob] = useState<JobApplication>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const application: JobApplication = {
      ...defaultJobApp(),
      ...job,
    }
    setJob({})
    onSubmit(application)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="jobSource">Source</label>
      <input type="text" id="jobSource" name="jobSource" placeholder="https://linkedin..."
        value={job.source} onChange={e => setJob({ ...job, source: e.target.value })}
      />
      <label for="jobName">Position Name</label>
      <input type="text" id="jobName" name="jobName" placeholder="Marketing Associate"
        value={job.name} onChange={e => setJob({ ...job, name: e.target.value })}
      />
      <label for="jobCompany">Company</label>
      <input type="text" id="jobCompany" name="jobCompany" placeholder="Sarenka Pole Ac."
        value={job.company} onChange={e => setJob({...job, company: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
