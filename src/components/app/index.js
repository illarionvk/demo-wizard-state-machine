import React, { Component } from 'react'

import { WizardRouter } from '../wizard-router'
import { PathIndicator } from '../path-indicator'
import { Navigation } from '../navigation'
import { AssetSelect } from '../asset-select'

export class App extends Component {
  render() {
    return (
      <>
        <header className="app-Header">
          <Navigation />
        </header>
        <WizardRouter>
          <AssetSelect path="/select/:assetName" />
        </WizardRouter>
        <aside className="app-Notes">
          <PathIndicator />
        </aside>
        <footer className="app-Footer" />
      </>
    )
  }
}
