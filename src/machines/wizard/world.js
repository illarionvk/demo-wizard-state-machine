import axios from 'axios'

import { store } from '../../ducks'
import { bicycle } from '../../ducks/bicycle'

const { PUBLIC_URL = '' } = process.env

export const world = {
  loadBicycles: async function loadBicycles() {
    const { data } = await axios({
      url: PUBLIC_URL + '/data/bicycles.json'
    })

    store.dispatch(bicycle.add(data))
  }
}
