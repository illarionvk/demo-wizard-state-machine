/*
 * Asset Ducks Factory
 */

import logger from 'andlog'

import { forEach, get, isArray, uniq } from 'lodash/fp'

import produce from 'immer'

export const makeAsset = function makeAsset(name) {
  if (!name) {
    throw new Error('Asset ducks name is invalid')
  }

  const ADD = `app/assets/${name}/ADD`
  const RESET = `app/assets/${name}/RESET`

  const initialState = {
    byId: {},
    allIds: []
  }

  const reducer = function assetReducer(state = initialState, action) {
    if (!action) {
      return state
    }

    if (action.type === RESET) {
      return initialState
    }

    if (action.error) {
      return state
    }

    if (action.type === ADD) {
      const firstPass = produce(state, function(draft) {
        const items =
          get((['payload', 'data'] /*: Array<string> */))(action || {}) || []

        forEach(function(item) {
          const id = item.id

          if (!id) {
            logger.warn('Asset ID is missing')
            return
          }

          draft.byId[id] = item
          draft.allIds.push(id)
        }, items)

        return draft
      })

      const secondPass = produce(firstPass, function(draft) {
        draft.allIds = uniq(firstPass.allIds)

        return draft
      })

      return secondPass
    }

    return state
  }

  const add = function add(data) {
    if (!data) {
      const message = 'Data is invalid'

      return {
        error: true,
        meta: { data, message },
        payload: new Error(message),
        type: ADD
      }
    }

    return {
      payload: {
        data: isArray(data) ? data : [data]
      },
      type: ADD
    }
  }

  const reset = function reset() {
    return {
      type: RESET
    }
  }

  return {
    ADD,
    RESET,
    add,
    reset,
    initialState,
    reducer
  }
}
