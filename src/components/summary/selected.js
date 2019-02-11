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
    <div className="app-Summary-item" data-name={assetName}>
      <div className="app-Summary-itemIcon">
        <Icons name={iconName} color={item.hex} />
      </div>
      <div className="app-Summary-itemDetails">
        <div className="app-Summary-itemType">{startCase(assetName)}</div>
        <div className="app-Summary-itemTitle">{item.title}</div>
        {item.price ? (
          <div className="app-Summary-itemSubtitle">
            {assetName === 'bicycle' ? '' : '+'}${item.price}
          </div>
        ) : null}
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  item: inferAsset
})

const connected = connect(mapStateToProps)(Selected)

export { connected as Selected, Selected as _Selected }
