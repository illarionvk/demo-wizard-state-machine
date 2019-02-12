import React from 'react'
import { WizardRouter } from '../wizard-router'

const PathIndicator = function(props) {
  const {
    location: { pathname = '404 Not Found' }
  } = props

  return (
    <section className="app-PathIndicator">
      <h6 className="app-PathIndicator-title">Wizard path:</h6>
      <div className="app-PathIndicator-path">{pathname}</div>
    </section>
  )
}

const routed = function() {
  return (
    <WizardRouter>
      <PathIndicator path="/*" />
    </WizardRouter>
  )
}

export { routed as PathIndicator, PathIndicator as _PathIndicator }
