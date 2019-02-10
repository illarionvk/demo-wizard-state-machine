import { call } from 'stent/lib/helpers'
import { makeState, stateNames } from './states'

const {
  BICYCLE,
  DRIVETRAIN,
  FAILURE,
  IDLE,
  INITIALIZING,
  LOADING,
  NOTE,
  PAINT,
  PEDAL,
  SADDLE,
  SUMMARY
} = stateNames

const makeConfig = function makeConfig(world, initialState) {
  const {
    getSelectedBicycleHandle,
    loadBicycles,
    loadBicycleAssets,
    setCommissionDefaults
  } = world

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
            return yield makeState(BICYCLE)
          } catch (error) {
            yield makeState(FAILURE, error)
          }
        }
      },
      [LOADING]: { reload },
      [BICYCLE]: {
        advance: function* advance(machine) {
          try {
            yield makeState(LOADING)
            yield call(loadBicycleAssets)
            yield call(setCommissionDefaults)
            // Fast-forward to NOTE if Unicycle is selected
            if (getSelectedBicycleHandle() === 'unicycle') {
              return yield makeState(NOTE)
            }
            return yield makeState(DRIVETRAIN)
          } catch (error) {
            yield makeState(FAILURE, error)
          }
        }
      },
      [DRIVETRAIN]: {
        retreat: makeState(BICYCLE),
        advance: makeState(PAINT)
      },
      [PAINT]: {
        retreat: makeState(DRIVETRAIN),
        advance: makeState(PEDAL)
      },
      [PEDAL]: {
        retreat: makeState(PAINT),
        advance: makeState(SADDLE)
      },
      [SADDLE]: {
        retreat: makeState(PEDAL),
        advance: makeState(NOTE)
      },
      [NOTE]: {
        retreat: makeState(SADDLE),
        advance: makeState(SUMMARY)
      },
      [SUMMARY]: {
        retreat: makeState(NOTE),
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
