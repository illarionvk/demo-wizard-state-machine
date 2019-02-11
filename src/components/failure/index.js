import React from 'react'
import { wire, wizard } from '../../machines'

export const Failure = function Failure(props) {
  const { error } = props

  return (
    <div className="app-Failure">
      <div className="app-Failure-container">
        <h2 className="app-Failure-title">Error</h2>
        {error ? (
          <div className="app-Failure-description">{error.toString()}</div>
        ) : null}
      </div>
    </div>
  )
}

export const MachineFailure = wire(Failure)
  .with(wizard.name)
  .map(function(machine) {
    return {
      error: machine.state.error
    }
  })
