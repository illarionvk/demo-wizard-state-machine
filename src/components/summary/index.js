import React from 'react'
import { includes } from 'lodash/fp'

import { Selected } from './selected'
import { TotalPrice } from './total-price'

import { stateNames } from '../../machines/wizard/states'

const { DRIVETRAIN, PAINT, PEDAL, SADDLE, NOTE } = stateNames

const v = {
  drivetrain: [DRIVETRAIN, PAINT, PEDAL, SADDLE, NOTE],
  paint: [PAINT, PEDAL, SADDLE, NOTE],
  pedal: [PEDAL, SADDLE, NOTE],
  saddle: [SADDLE, NOTE]
}

export const Summary = function Summary(props) {
  const {
    location: { pathname: p }
  } = props

  return (
    <div>
      <h4>Summary</h4>
      <Selected assetName="bicycle" />
      {includes(p, v.drivetrain) ? <Selected assetName="drivetrain" /> : null}
      {includes(p, v.paint) ? <Selected assetName="paint" /> : null}
      {includes(p, v.pedal) ? <Selected assetName="pedal" /> : null}
      {includes(p, v.saddle) ? <Selected assetName="saddle" /> : null}
      <TotalPrice />
    </div>
  )
}
