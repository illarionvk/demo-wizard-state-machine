import React from 'react'

import { WizardRouter } from '../wizard-router'
import { Navigation } from '../navigation'
import { AssetSelect } from '../asset-select'
import { EditNote } from '../edit-note'
import { Summary } from '../summary'

export const Main = function Main() {
  return (
    <main className="app-Main">
      <div className="app-Main-container">
        <Navigation />
        <WizardRouter>
          <AssetSelect path="/select/:assetName" />
          <EditNote path="/note" />
        </WizardRouter>
        <WizardRouter>
          <Summary path="/select/*" />
          <Summary path="/note" />
          <Summary path="/summary" />
        </WizardRouter>
      </div>
    </main>
  )
}
