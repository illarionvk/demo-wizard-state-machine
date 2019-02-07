import { Machine as M } from 'stent'

import { GLOBAL_NAME, NAME } from './constants'
import { makeConfig } from './config'
import { world } from './world'

const wizard = M.create(NAME, makeConfig(world))

global[GLOBAL_NAME] = wizard

export { wizard }
