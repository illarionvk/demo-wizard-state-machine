import { call } from 'stent/lib/helpers'
import { makeState, stateNames } from './states'

const {
  BICYCLE,
  DRIVETRAIN,
  FAILURE,
  IDLE,
  INITIALIZING,
  NOTE,
  PAINT,
  PEDAL,
  SADDLE,
  SUMMARY
} = stateNames

const makeConfig = function makeConfig(world, initialState) {
  const { loadBicycles, loadBicycleAssets, setCommissionDefaults } = world

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
        bootstrap: function* bootstrap(machine) {
          try {
            yield call(loadBicycles)
            yield call(setCommissionDefaults)
            machine.fastForward()
          } catch (error) {
            yield makeState(FAILURE, error)
          }
        },
        fastForward: function* initialFastForward() {
          return yield makeState(BICYCLE)
        }
      },
      [BICYCLE]: {
        advance: function* advance(machine) {
          try {
            yield call(loadBicycleAssets)
            yield call(setCommissionDefaults)
            machine.fastForward()
          } catch (error) {
            yield makeState(FAILURE, error)
          }
        },
        fastForward: function* componentsFastForward() {
          return yield makeState(DRIVETRAIN)
        }
      },
      [DRIVETRAIN]: {
        advance: makeState(PAINT)
      },
      [PAINT]: {
        advance: makeState(PEDAL)
      },
      [PEDAL]: {
        advance: makeState(SADDLE)
      },
      [SADDLE]: {
        advance: makeState(NOTE)
      },
      [NOTE]: {
        advance: makeState(SUMMARY)
      },
      [SUMMARY]: {
        reload: makeState(IDLE)
      },
      [FAILURE]: {
        reload
      }
    }
  }

  return configuration
}

export { makeConfig }
