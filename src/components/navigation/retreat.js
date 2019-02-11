import React from 'react'

import { wire, wizard } from '../../machines'

const RetreatButton = function RetreatButton(props) {
  const { retreat, isRetreatAllowed } = props
  const disabled = isRetreatAllowed === false
  const onClick = retreat

  return (
    <button
      className="app-Navigation-button"
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      Back
    </button>
  )
}

const wired = wire(RetreatButton)
  .with(wizard.name)
  .map(function(m1) {
    return {
      retreat: () => m1.retreat(),
      isRetreatAllowed: m1.isRetreatAllowed()
    }
  })

export { wired as RetreatButton, RetreatButton as _RetreatButton }
