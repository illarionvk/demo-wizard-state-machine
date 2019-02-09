import { ignoreElements, map as rxMap, tap } from 'rxjs/operators'
import { flow, getOr, mapKeys, mergeAll, snakeCase } from 'lodash/fp'
import URI from 'urijs'

import { removeNulls } from '../utils/remove-nulls'

export const updateUrlQuery = function updateUrlQuery(action$, state$) {
  const newAction$ = state$.pipe(
    rxMap(
      flow(
        getOr({}, 'commission.selected'),
        mapKeys(snakeCase),
        removeNulls
      )
    ),
    tap(function updateUrl(query) {
      const uri = URI(window.location.href)
      const existingQuery = uri.search(true)
      const mergedQuery = mergeAll([{}, existingQuery, query])
      const href = uri
        .clone()
        .search(mergedQuery)
        .toString()

      window.history.replaceState(null, null, href)
    }),
    ignoreElements()
  )

  return newAction$
}
