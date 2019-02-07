import { call } from 'stent/lib/helpers'
import { makeState, stateNames } from './states'

const { FAILURE, IDLE, INITIALIZING, END } = stateNames

const makeConfig = function makeConfig(world, initialState) {
  const { loadBicycles } = world

  const reload = function reload() {
    global.location.reload(true)
  }

  const configuration = {
    state: initialState || makeState(IDLE),
    transitions: {
      [IDLE]: {
        init: function* init(machine) {
          yield makeState(INITIALIZING)

          machine.bootstrap()
        }
      },
      [INITIALIZING]: {
        bootstrap: function* bootstrap() {
          try {
            yield call(loadBicycles)
            return yield makeState(END)
          } catch (error) {
            yield makeState(FAILURE, error)
          }
        }
      },
      [END]: {
        reload
      },
      [FAILURE]: {
        reload
      }
    }
  }

  return configuration
}

export { makeConfig }
