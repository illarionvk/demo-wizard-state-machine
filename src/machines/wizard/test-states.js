import test from 'tape'
import URI from 'urijs'

import { forEach, entries, isFinite } from 'lodash/fp'

import { makeState, stateNames, progressPercentage } from './states'

test('Wizard machine states', function(t) {
  t.test('makeState utility', function(st) {
    const err = new Error('Test error')

    st.throws(
      function() {
        return makeState()
      },
      /state name is required/i,
      'throws if no state name is provided'
    )

    st.deepEqual(
      makeState('TEST_NAME'),
      { name: 'TEST_NAME', error: null },
      'returns new state object'
    )

    st.deepEqual(
      makeState('TEST_NAME', err),
      { name: 'TEST_NAME', error: err },
      'returns new state object with custom error'
    )

    st.end()
  })

  t.test('State Name as Path', function(st) {
    forEach(function([constant, name]) {
      const uri = URI(name)
      const isValidPath = uri.is('url') && uri.is('relative')

      st.ok(
        isValidPath,
        `${constant} state name is a valid route path -- ${name}`
      )
    }, entries(stateNames))

    st.end()
  })

  t.test('Progress Percentage', function(st) {
    forEach(function([constant, name]) {
      const progressValue = progressPercentage[name]
      st.ok(
        Boolean(
          isFinite(progressValue) && progressValue >= -1 && progressValue <= 100
        ),
        `${constant} state has a corresponding progress percentage value`
      )
    }, entries(stateNames))

    st.end()
  })
})
