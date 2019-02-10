import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { inferTotalPrice } from '../../selectors/price'

const TotalPrice = function TotalPrice(props) {
  const { price } = props

  return <div>Total: ${price}</div>
}

const mapStateToProps = createStructuredSelector({
  price: inferTotalPrice
})

const connected = connect(mapStateToProps)(TotalPrice)

export { connected as TotalPrice, TotalPrice as _TotalPrice }
