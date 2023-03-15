
export type JobAppStatus = 'applied' | 'interview' | 'offer' | 'rejected'

export type JobApplication = {
  name: string
  source: string
  date: string
  status: JobAppStatus 
}

