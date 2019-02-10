import React from 'react'

import { WizardRouter } from '../wizard-router'
import { PathIndicator } from '../path-indicator'
import { Navigation } from '../navigation'
import { AssetSelect } from '../asset-select'
import { EditNote } from '../edit-note'
import { Summary } from '../summary'

export class App extends React.Component {
  render() {
    return (
      <div className="app-Layout">
        <header className="app-Header">
          <h1>Wizard State Machine Demo</h1>
        </header>
        <main className="app-Main">
          <Navigation />
          <WizardRouter>
            <AssetSelect path="/select/:assetName" />
            <EditNote path="/note" />
          </WizardRouter>
          <WizardRouter>
            <Summary path="/select/*" />
            <Summary path="/note" />
          </WizardRouter>
        </main>
        <footer className="app-Footer">
          <div className="app-Footer-container">
            <PathIndicator />
          </div>
        </footer>
      </div>
    )
  }
}
