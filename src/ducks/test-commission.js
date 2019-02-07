import test from 'tape'

import { update } from './commission'

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
      const payload = {
        path: ['bicycle'],
        value: 'A'
      }

      const actual = update(payload)

      st.notOk(actual.error, 'accepts valid path')
      st.deepEqual(actual.payload, payload, 'outputs the same payload')
    })()

    st.end()
  })
})
