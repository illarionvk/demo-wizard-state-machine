import { reduce } from 'lodash/fp'

import { getAssetNames } from './commission'
import { inferAssetPrice } from './asset'

export const inferTotalPrice = function(state) {
  const assetNames = getAssetNames(state)

  const totalPrice = reduce(function(acc, assetName) {
    return acc + inferAssetPrice(state, { assetName })
  }, 0)(assetNames)

  return totalPrice
}
