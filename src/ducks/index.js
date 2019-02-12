import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnly'

import { loggerMiddleware } from './logger'

import { bicycle } from './bicycle'
import { drivetrain } from './drivetrain'
import { paint } from './paint'
import { pedal } from './pedal'
import { saddle } from './saddle'

import {
  initialState as commissionInitialState,
  reducer as commissionReducer
} from './commission'

const STORE = 'store_9d7eb9682ad411e9917210ddb1eacae1'

const initialState = {
  assets: {
    bicycle: bicycle.initialState,
    drivetrain: drivetrain.initialState,
    paint: paint.initialState,
    pedal: pedal.initialState,
    saddle: saddle.initialState
  },
  commission: commissionInitialState
}

const rootReducer = combineReducers({
  assets: combineReducers({
    bicycle: bicycle.reducer,
    drivetrain: drivetrain.reducer,
    paint: paint.reducer,
    pedal: pedal.reducer,
    saddle: saddle.reducer
  }),
  commission: commissionReducer
})

const composeEnhancers = composeWithDevTools({})

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(loggerMiddleware))
)

global[STORE] = store

export { initialState, store }
