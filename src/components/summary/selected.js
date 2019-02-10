import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { inferAsset } from '../../selectors/asset'

const Selected = function Selected(props) {
  const { item } = props

  if (item == null) {
    return null
  }

  return (
    <div>
      <p>{item.title}</p>
      {item.price ? <p>${item.price}</p> : null}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  item: inferAsset
})

const connected = connect(mapStateToProps)(Selected)

export { connected as Selected, Selected as _Selected }
