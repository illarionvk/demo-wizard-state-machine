import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnly'

import { loggerMiddleware } from './logger'

import { bicycle } from './bicycle'
import commission from './commission'

const STORE = 'store_9d7eb9682ad411e9917210ddb1eacae1'

const initialState = {
  assets: {
    bicycle: bicycle.initialState
  },
  commission: commission.initialState
}

const rootReducer = combineReducers({
  assets: combineReducers({
    bicycle: bicycle.reducer
  }),
  commission: commission.reducer
})

const composeEnhancers = composeWithDevTools({})

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(loggerMiddleware))
)

global[STORE] = store

export { initialState, store }
