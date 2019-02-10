import React from 'react'
import { includes } from 'lodash/fp'

import { Note } from './note'
import { Selected } from './selected'
import { TotalPrice } from './total-price'

import { stateNames } from '../../machines/wizard/states'

const { DRIVETRAIN, PAINT, PEDAL, SADDLE, NOTE, SUMMARY } = stateNames

const v = {
  drivetrain: [DRIVETRAIN, PAINT, PEDAL, SADDLE, NOTE, SUMMARY],
  paint: [PAINT, PEDAL, SADDLE, NOTE, SUMMARY],
  pedal: [PEDAL, SADDLE, NOTE, SUMMARY],
  saddle: [SADDLE, NOTE, SUMMARY],
  note: [SUMMARY]
}

export const Summary = function Summary(props) {
  const {
    location: { pathname: p }
  } = props

  return (
    <section className="app-Summary">
      <h4 className="app-Summary-title">Your Order</h4>
      <TotalPrice />
      <div className="app-Summary-items">
        <Selected assetName="bicycle" />
        {includes(p, v.drivetrain) ? <Selected assetName="drivetrain" /> : null}
        {includes(p, v.paint) ? <Selected assetName="paint" /> : null}
        {includes(p, v.pedal) ? <Selected assetName="pedal" /> : null}
        {includes(p, v.saddle) ? <Selected assetName="saddle" /> : null}
        {includes(p, v.note) ? <Note /> : null}
      </div>
    </section>
  )
}
