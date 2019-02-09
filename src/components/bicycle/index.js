import React from 'react'

import { AssetSelect } from '../asset-select'

const Bicycle = function Bicycle(props) {
  return <section>
    <span>Bicycle</span>
    <AssetSelect assetName='bicycle' />
    </section>
}

export { Bicycle }
