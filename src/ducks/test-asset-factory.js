import test from 'tape'

import { makeAsset } from './asset-factory'

const NAME = 'TestAsset'
const { ADD, RESET, add, initialState, reducer, reset } = makeAsset(NAME)

const makeItem = function createItemFixture(id = 'A') {
  return {
    id,
    title: `Item ${id}`
  }
}

test('Asset Factory', function(t) {
  t.test('Action names', function(st) {
    st.ok(ADD.indexOf(NAME) >= 0, 'should contain asset name')
    st.ok(RESET.indexOf(NAME) >= 0, 'should contain asset name')

    st.end()
  })

  t.test('ADD action creator', function(st) {
    st.deepEqual(
      add(makeItem('B')),
      { payload: { data: [makeItem('B')] }, type: ADD },
      'should return ADD action for single item'
    )

    st.deepEqual(
      add([makeItem('B'), makeItem('C')]),
      { payload: { data: [makeItem('B'), makeItem('C')] }, type: ADD },
      'should return ADD action for multiple items'
    )

    st.end()
  })

  t.test('RESET action creator', function(st) {
    st.deepEqual(reset(), { type: RESET }, 'should return RESET action')

    st.end()
  })

  t.test('Reducer', function(st) {
    st.deepEqual(
      reducer(),
      initialState,
      'should return initial state if no arguments are passed'
    )

    st.deepEqual(
      reducer(initialState, add(makeItem('B'))),
      {
        byId: {
          B: makeItem('B')
        },
        allIds: ['B']
      },
      'should handle ADD action for initial state'
    )

    // Add to existing
    ;(function() {
      const initial = {
        byId: {
          C: makeItem('C')
        },
        allIds: ['C']
      }

      t.deepEqual(
        reducer(initial, add(makeItem('B'))),
        {
          byId: {
            C: makeItem('C'),
            B: makeItem('B')
          },
          allIds: ['C', 'B']
        },
        'should handle ADD action'
      )
    })()

    // Add many
    st.deepEqual(
      reducer(initialState, add([makeItem('B'), makeItem('C'), makeItem('A')])),
      {
        byId: {
          B: makeItem('B'),
          C: makeItem('C'),
          A: makeItem('A')
        },
        allIds: ['B', 'C', 'A']
      },
      'should handle ADD action with multiple items'
    )

    // Reset
    ;(function() {
      const initial = {
        byId: {
          C: makeItem('C'),
          B: makeItem('B')
        },
        allIds: ['C', 'B']
      }

      t.deepEqual(
        reducer(initial, reset()),
        initialState,
        'should handle RESET action'
      )
    })()

    st.end()
  })
})
