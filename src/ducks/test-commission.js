import test from 'tape'
import { forEach } from 'lodash/fp'

import { initialState, reducer, reset, update } from './commission'

test('Commission Ducks', function(t) {
  t.test('Update action creator', function(st) {
    // Empty path
    // eslint-disable-next-line no-extra-semi
    ;(function() {
      const actual = update({ path: [], value: 'A' })

      st.ok(actual.error, 'rejects payload with empty path')
    })()

    // Invalid path
    ;(function() {
      const actual = update({ path: ['invalid', 'path'], value: 'A' })

      st.ok(actual.error, 'rejects payload with invalid path')
    })()

    // Valid path
    ;(function() {
      const paths = [
        ['selected', 'bicycle'],
        ['selected', 'paint'],
        ['selected', 'pedal'],
        ['selected', 'saddle'],
        ['note']
      ]

      forEach(function(path) {
        const payload = {
          path,
          value: 'A'
        }

        const actual = update(payload)

        st.notOk(actual.error, `accepts valid path -- ${JSON.stringify(path)}`)
        st.deepEqual(actual.payload, payload, 'outputs the same payload')
      }, paths)
    })()

    st.end()
  })

  t.test('Reducer', function(st) {
    st.deepEqual(
      reducer(),
      initialState,
      'should return initial state if no arguments are passed'
    )

    st.end()
  })

  t.test('Reducer', function(st) {
    const currentState = {
      ...initialState,
      note: 'Hello'
    }

    st.deepEqual(
      reducer(currentState, reset()),
      initialState,
      'should return initial state on RESET action'
    )

    st.end()
  })

  t.test('Reducer', function(st) {
    const state = reducer(
      initialState,
      update({ path: ['selected', 'bicycle'], value: 'A' })
    )

    st.ok(state.selected.bicycle === 'A', 'should handle UPDATE action')

    st.end()
  })
})
