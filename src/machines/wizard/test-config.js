import test from 'tape'

import { forEach, flatten, flow, camelCase, keys, map, uniq } from 'lodash/fp'

import { makeConfig } from './config'

test('Wizard machine config', function(t) {
  t.test('Action name', function(st) {
    const { transitions } = makeConfig({})

    const names = flow(
      map(keys),
      flatten,
      uniq
    )(transitions)

    forEach(function(name) {
      return st.equal(name, camelCase(name), `${name} is camelCase`)
    }, names)

    st.end()
  })
})
