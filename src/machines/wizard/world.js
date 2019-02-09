import axios from 'axios'
import { forEach } from 'lodash/fp'

import { store } from '../../ducks'

import { bicycle } from '../../ducks/bicycle'
import { drivetrain } from '../../ducks/drivetrain'
import { paint } from '../../ducks/paint'
import { pedal } from '../../ducks/pedal'
import { saddle } from '../../ducks/saddle'

const { PUBLIC_URL = '' } = process.env

export const world = {
  loadBicycles: async function loadBicycles() {
    const { data } = await axios({
      url: PUBLIC_URL + '/data/bicycles.json'
    })

    store.dispatch(bicycle.add(data))
  },
  loadBicycleAssets: async function loadBicycleAssets(id) {
    if (!id) {
      throw new Error('Bicycle ID is invalid')
    }

    const { data } = await axios({
      url: PUBLIC_URL + `/data/bicycles/${id}.json`
    })

    const actions = [
      bicycle.add(data.bicycle),
      drivetrain.reset(),
      drivetrain.add(data.drivetrain),
      paint.reset(),
      paint.add(data.paint),
      pedal.reset(),
      pedal.add(data.pedal),
      saddle.reset(),
      saddle.add(data.saddle)
    ]

    forEach(store.dispatch, actions)
  }
}
