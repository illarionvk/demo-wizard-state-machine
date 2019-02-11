import axios from 'axios'
import { forEach } from 'lodash/fp'

import { store } from '../../ducks'

import { bicycle } from '../../ducks/bicycle'
import { drivetrain } from '../../ducks/drivetrain'
import { paint } from '../../ducks/paint'
import { pedal } from '../../ducks/pedal'
import { saddle } from '../../ducks/saddle'

import { getSelectedId } from '../../selectors/commission'
import { inferAssetHandle } from '../../selectors/asset'

import { setCommissionDefaults } from './set-commission-defaults'

const { PUBLIC_URL = '' } = process.env

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const world = {
  getSelectedBicycleHandle: function() {
    return inferAssetHandle(store.getState(), { assetName: 'bicycle' })
  },
  loadBicycles: async function loadBicycles() {
    const { data } = await axios({
      url: PUBLIC_URL + '/data/bicycles.json'
    })

    store.dispatch(bicycle.add(data))
  },
  loadBicycleAssets: async function loadBicycleAssets() {
    const id = getSelectedId(store.getState(), { assetName: 'bicycle' })

    if (!id) {
      throw new Error('Bicycle ID is invalid')
    }

    // Intentional delay
    await sleep(1500)

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
  },
  setCommissionDefaults: function() {
    setCommissionDefaults(store.getState(), store.dispatch)
  }
}
