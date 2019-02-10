import React from 'react'

import { Selected } from './selected'

export const Summary = function Summary() {
  return (
    <div>
      <h4>Summary</h4>
      <Selected assetName="bicycle" />
      <Selected assetName="drivetrain" />
      <Selected assetName="paint" />
      <Selected assetName="pedal" />
      <Selected assetName="saddle" />
    </div>
  )
}
