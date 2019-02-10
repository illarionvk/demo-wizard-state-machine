import { Machine } from 'stent'
import { connect } from 'stent/lib/react'

import { Logger } from './logger'
import { wizard } from './wizard'

Machine.addMiddleware([Logger])

export { connect as wire, wizard }
