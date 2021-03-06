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
const LOADING = '/loading'
const BICYCLE = '/select/bicycle'
const DRIVETRAIN = '/select/drivetrain'
const PAINT = '/select/paint'
const PEDAL = '/select/pedal'
const SADDLE = '/select/saddle'
const NOTE = '/note'
const SUMMARY = '/summary'

const stateNames = {
  FAILURE,
  IDLE,
  INITIALIZING,
  LOADING,
  BICYCLE,
  DRIVETRAIN,
  PAINT,
  PEDAL,
  SADDLE,
  NOTE,
  SUMMARY
}

// Progress in percents
const progressPercentage = {
  [FAILURE]: -1,
  [IDLE]: 0,
  [INITIALIZING]: 0,
  [LOADING]: -1,
  [BICYCLE]: 15,
  [DRIVETRAIN]: 30,
  [PAINT]: 45,
  [PEDAL]: 60,
  [SADDLE]: 75,
  [NOTE]: 90,
  [SUMMARY]: 100
}

export { makeState, stateNames, progressPercentage }
