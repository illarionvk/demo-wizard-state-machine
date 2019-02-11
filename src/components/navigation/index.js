import React from 'react'

import { WizardRouter } from '../wizard-router'
import { AdvanceButton } from './advance'
import { RetreatButton } from './retreat'
import { NavTitle } from './title'

export const Navigation = function Navigation() {
  return (
    <nav className="app-Navigation">
      <WizardRouter primary={false}>
        <NavTitle path="/select/bicycle" title="Select bicycle type" />
        <NavTitle path="/select/drivetrain" title="Select drivetrain" />
        <NavTitle path="/select/paint" title="Select paint color" />
        <NavTitle path="/select/pedal" title="Select pedals" />
        <NavTitle path="/select/saddle" title="Select saddle" />
        <NavTitle path="/note" title="Add order notes" />
        <NavTitle path="/summary" title="Summary" />
      </WizardRouter>
      <div className="app-Navigation-buttons">
        <RetreatButton />
        <AdvanceButton />
      </div>
    </nav>
  )
}
