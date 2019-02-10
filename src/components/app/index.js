import React from 'react'

import { WizardRouter } from '../wizard-router'
import { PathIndicator } from '../path-indicator'
import { Navigation } from '../navigation'
import { AssetSelect } from '../asset-select'
import { Summary } from '../summary'

export class App extends React.Component {
  render() {
    return (
      <div className="app-Layout">
        <header className="app-Header" />
        <main className="app-Main">
          <Navigation />
          <WizardRouter>
            <AssetSelect path="/select/:assetName" />
          </WizardRouter>
          <Summary />
        </main>
        <aside className="app-Notes">
          <PathIndicator />
        </aside>
        <footer className="app-Footer" />
      </div>
    )
  }
}
