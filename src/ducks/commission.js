/*
 * Ducks: User Data
 */

const { isUndefined, has, truncate } = require('lodash/fp')

const L = require('partial.lenses')
const { default: produce } = require('immer')

const initialState = {
  selected: {
    bicycle: null,
    pedal: null,
    saddle: null
  },
  note: ''
}

const RESET = 'app/userdata/RESET'
const UPDATE = 'app/userdata/UPDATE'

const MAX_NOTE_LENGTH = 1024

const truncateNote = truncate({
  length: MAX_NOTE_LENGTH,
  omission: ''
})

const reducer = function(state = initialState, action) {
  if (!action) {
    return state
  }

  if (action.type === RESET) {
    return initialState
  }

  if (action.error) {
    return state
  }

  if (action.type === UPDATE) {
    return produce(state, function(draft) {
      const payload = action.payload || {}

      // Immer recommends reading from current state to improve performance
      draft.selection = L.set(payload.path, payload.value, state.selection)

      return draft
    })
  }

  return state
}

const reset = function reset(meta = {}) {
  return {
    meta,
    type: RESET
  }
}

const update = function update(payload, extra = {}) {
  const { path = [], value } = payload

  const errAction = {
    error: true,
    meta: { payload, extra },
    payload: new Error('Payload is invalid [9d6e7b1c134f11e9a7f710ddb1eacae1]'),
    type: UPDATE
  }

  if (isUndefined(value)) {
    return errAction
  }

  if (path.length === 0 || has(path, initialState) === false) {
    return errAction
  }

  return {
    meta: extra,
    payload: { path, value },
    type: UPDATE
  }
}

const updateNote = function updateNote(rawNote) {
  const note = truncateNote(rawNote)

  const payload = {
    path: ['note'],
    value: note
  }

  const meta = {
    raw: rawNote,
    rawLength: rawNote.length,
    length: note.length
  }

  return update(payload, meta)
}

module.exports = {
  MAX_NOTE_LENGTH,
  RESET,
  UPDATE,
  reset,
  update,
  updateNote,
  initialState,
  reducer
}
