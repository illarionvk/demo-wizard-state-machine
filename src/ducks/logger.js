/*
 * Log Flux Standard Action errors
 * https://github.com/redux-utilities/flux-standard-action
 */

const logger = require('andlog')

export const loggerMiddleware = () => (next) => (action) => {
  if (action.error === true) {
    logger.error(action.payload, action.meta)
  }

  return next(action)
}
