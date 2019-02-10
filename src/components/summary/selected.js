import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { snakeCase, startCase } from 'lodash/fp'

import { inferAsset } from '../../selectors/asset'

import { Icons } from '../icons'

const Selected = function Selected(props) {
  const { assetName, item } = props

  if (item == null) {
    return null
  }

  const iconName =
    assetName === 'bicycle'
      ? snakeCase(assetName + '-' + item.title)
      : assetName

  return (
    <div>
      <Icons name={iconName} color={item.hex} />
      <div>
        <span>{startCase(assetName)}: </span>
        <span> {item.title}</span>
        {item.price ? <span> ${item.price}</span> : null}
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  item: inferAsset
})

const connected = connect(mapStateToProps)(Selected)

export { connected as Selected, Selected as _Selected }
