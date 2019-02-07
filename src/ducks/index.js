import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnly'

import { loggerMiddleware } from './logger'

import { bicycle } from './bicycle'

const STORE = 'store_9d7eb9682ad411e9917210ddb1eacae1'

const initialState = {
  assets: {
    bicycle: bicycle.initialState
  }
}

const rootReducer = combineReducers({
  assets: combineReducers({
    bicycle: bicycle.reducer
  })
})

const composeEnhancers = composeWithDevTools({})

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(loggerMiddleware))
)

global[STORE] = store

export { initialState, store }
