import { createSelector } from 'reselect'
import { keys } from 'lodash/fp'

export const getSelectedAssets = (state) => state.commission.selected

export const getAssetNames = (state) => keys(state.commission.selected)

export const getSelectedId = createSelector(
  [getSelectedAssets, (_, props) => props.assetName],
  function(selected, assetName) {
    if (!assetName) {
      throw new Error(
        'Asset name is required [bffd008a2c9611e9959d10ddb1eacae1]'
      )
    }

    return selected[assetName] || null
  }
)

export const getNote = (state) => state.commission.note
