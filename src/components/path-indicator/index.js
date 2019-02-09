import React from 'react'
import { WizardRouter } from '../wizard-router'

const PathIndicator = function(props) {
  const {
    location: { pathname = '404 Not Found' }
  } = props

  return <aside className="app-PathIndicator">{pathname}</aside>
}

const routed = function() {
  return (
    <WizardRouter>
      <PathIndicator default />
    </WizardRouter>
  )
}

export { routed as PathIndicator, PathIndicator as _PathIndicator }