import React from 'react'

import { PathIndicator } from '../path-indicator'
import { Notes } from './notes'

export const DevNotes = function DevNotes() {
  return (
    <aside className="app-DevNotes">
      <div className="app-DevNotes-container">
        <h5 className="app-DevNotes-title">Notes</h5>
        <PathIndicator />
        <Notes />
      </div>
    </aside>
  )
}
