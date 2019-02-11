import React from 'react'
import { Router, ServerLocation } from '@reach/router'

import { wire, wizard } from '../../machines'

/*
 * Wizard Router ignores browser history
 * and provides the current wizard path (name) only
 */

const WizardRouter = function WizardRouter(props) {
  const { className, children, url = '/' } = props

  return (
    <ServerLocation url={url}>
      <Router className={className}>{children}</Router>
    </ServerLocation>
  )
}

const wired = wire(WizardRouter)
  .with(wizard.name)
  .map(function(machine) {
    return {
      url: machine.state.name
    }
  })

export { WizardRouter as _WizardRouter, wired as WizardRouter }
