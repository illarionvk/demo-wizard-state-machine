import { first, forEach, includes } from 'lodash/fp'

import { getAssetIds } from '../../selectors/asset'
import { getAssetNames, getSelectedId } from '../../selectors/commission'

import { update } from '../../ducks/commission'

const getId = function getSelectedOrFirstAvailableId(params) {
  const { assetName, state } = params

  const availableIds = getAssetIds(state, { assetName })
  const selectedId = getSelectedId(state, { assetName })
  const selectedIdIsValid = includes(selectedId, availableIds)

  if (selectedId && selectedIdIsValid) {
    return selectedId
  }

  const defaultId = first(availableIds) || null

  return defaultId
}

const setCommissionDefaults = function(state, dispatch) {
  const assetNames = getAssetNames(state)

  forEach(function(assetName) {
    const value = getId({ assetName, state })
    const path = ['selected', assetName]

    dispatch(update({ path, value }))
  }, assetNames)
}

export { setCommissionDefaults, getId as _getId }
