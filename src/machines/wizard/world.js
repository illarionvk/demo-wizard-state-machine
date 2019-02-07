import axios from 'axios'

const { PUBLIC_URL = '' } = process.env

export const world = {
  loadBicycles: async function loadBicycles() {
    const data = await axios({
      url: PUBLIC_URL + '/data/bicycles.json'
    })

    return data
  }
}
