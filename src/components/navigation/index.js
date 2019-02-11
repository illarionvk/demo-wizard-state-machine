import React from 'react'

import { AdvanceButton } from './advance'
import { RetreatButton } from './retreat'

export const Navigation = function Navigation() {
  return (
    <div className="app-Navigation">
      <div className="app-Navigation-buttons">
        <RetreatButton />
        <AdvanceButton />
      </div>
    </div>
  )
}
