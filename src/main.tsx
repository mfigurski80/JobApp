import React from 'react'
import ReactDOM from 'react-dom/client'
import mixpanel from 'mixpanel-browser';
import { v4 } from 'uuid';

import App from './App'
import './index.css'

// TODO: remove debug
mixpanel.init('3d86dc7eaf837da9befc160bf7d543cf', { ignore_dnt: true });
const MIXPANEL_ID = getUUID()
mixpanel.identify(MIXPANEL_ID)

function getUUID() {
  let uuid = localStorage.getItem('MIXPANEL_UUID')
  if (!uuid) {
    uuid = v4()
    localStorage.setItem('MIXPANEL_UUID', uuid)
  }
  return uuid
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
