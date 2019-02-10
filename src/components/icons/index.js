import React from 'react'

import { ReactComponent as RoadBicycle } from './svg/bicycle-road.svg'
import { ReactComponent as TrekkingBicycle } from './svg/bicycle-trekking.svg'
import { ReactComponent as Unicycle } from './svg/unicycle.svg'
import { ReactComponent as Drivetrain } from './svg/drivetrain.svg'
import { ReactComponent as Paint } from './svg/paint.svg'
import { ReactComponent as Pedal } from './svg/pedal.svg'
import { ReactComponent as Saddle } from './svg/saddle.svg'
import { ReactComponent as Edit } from './svg/edit.svg'

const icons = {
  bicycle_road: RoadBicycle,
  bicycle_trekking: TrekkingBicycle,
  bicycle_unicycle: Unicycle,
  drivetrain: Drivetrain,
  paint: Paint,
  pedal: Pedal,
  saddle: Saddle,
  edit: Edit
}

export const Icons = function Icons(props) {
  const { name, color = '#ccc' } = props

  if (name == null) {
    return null
  }

  const IconSVG = icons[name]

  return (
    <div className="app-Icon">
      <div className="app-Icon-placeholder o-placeholder">
        {IconSVG ? <IconSVG color={color} /> : null}
      </div>
    </div>
  )
}
