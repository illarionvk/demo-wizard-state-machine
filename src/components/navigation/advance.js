import React from 'react'

import { wire, wizard } from '../../machines'

const AdvanceButton = function AdvanceButton(props) {
  const { advance, isAdvanceAllowed } = props
  const disabled = isAdvanceAllowed === false
  const onClick = advance

  return (
    <button type="button" disabled={disabled} onClick={onClick}>
      Next
    </button>
  )
}

const wired = wire(AdvanceButton)
  .with(wizard.name)
  .map(function(m1) {
    return {
      // stateName: m1.state.name,
      advance: m1.advance,
      isAdvanceAllowed: m1.isAdvanceAllowed()
    }
  })

export { wired as AdvanceButton, AdvanceButton as _AdvanceButton }
