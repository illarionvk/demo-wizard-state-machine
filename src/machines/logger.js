import logger from 'andlog'
import { get } from 'lodash/fp'

export const Logger = {
  onActionDispatched(actionName, ...args) {
    if (args.length === 0) {
      logger.info(`${this.name}: "${actionName}" dispatched`)
    } else {
      logger.info(`${this.name}: "${actionName}" dispatched with payload`, args)
    }
  },
  onStateChanged() {
    // store.dispatch({
    //   meta: {
    //     name: this.name,
    //     state: this.state
    //   },
    //   type: 'bundler/machine/CHANGE_STATE'
    // })
    logger.info(`${this.name}: state changed`, this.state)
  },
  onGeneratorStep(yielded /*: * */) {
    const fname = get('func.name', yielded)
    const msg = `${this.name}: generator step`

    if (fname) {
      logger.info(msg, fname)
      return
    }

    logger.info(msg)
  }
}
