const makeState = function(name, error = null) {
  if (!name) {
    throw new Error('State name is required')
  }

  return {
    name,
    error: error || null
  }
}

const FAILURE = '/failure'
const IDLE = '/idle'
const INITIALIZING = '/initializing'
const END = '/end'

const stateNames = {
  FAILURE,
  IDLE,
  INITIALIZING,
  END
}

// Progress in percents
const progressPercentage = {
  [FAILURE]: -1,
  [IDLE]: 0,
  [INITIALIZING]: 0,
  [END]: 100
}

export { makeState, stateNames, progressPercentage }
