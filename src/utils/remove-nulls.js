import { flow, fromPairs, toPairs, reject, sortBy } from 'lodash/fp'

export const removeNulls = flow(
  toPairs,
  reject(function(pair) {
    return pair[1] == null
  }),
  sortBy(function(pair) {
    return pair[0]
  }),
  fromPairs
)
