import path from 'path'
import test from 'tape'
import loadJsonFile from 'load-json-file'
import { forEach, map, some } from 'lodash/fp'

import { itemSchema, listingSchema } from './bicycles-schema'

import bicycleListing from './bicycles.json'

const options = {
  convert: false,
  presence: 'required',
  noDefaults: true
}

test('Data', function(t) {
  t.test('Listing', function(st) {
    const { error } = listingSchema.validate(bicycleListing, options)
    st.error(error, 'has valid shape')

    st.end()
  })

  t.test('Assets', function(st) {
    Promise.all(
      map(function(listingItem) {
        const { id } = listingItem

        return loadJsonFile(path.join(__dirname, './bicycles', `${id}.json`))
      }, bicycleListing)
    )
      .then(
        forEach(function(item) {
          const { error } = itemSchema.validate(item, options)
          const idMatchesListing = some(function(listingItem) {
            return listingItem.id === item.bicycle.id
          }, bicycleListing)

          st.error(error, 'have valid shape')
          st.ok(idMatchesListing, 'bicycle ID matches listing id')
        })
      )
      .catch(function(err) {
        st.error(err)
      })
      .finally(function() {
        st.end()
      })
  })
})
