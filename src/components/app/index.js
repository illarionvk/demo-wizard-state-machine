import React from 'react'

import { WizardRouter } from '../wizard-router'
import { PathIndicator } from '../path-indicator'
import { Navigation } from '../navigation'
import { AssetSelect } from '../asset-select'
import { EditNote } from '../edit-note'
import { Summary } from '../summary'
import { Header } from '../header'

export class App extends React.Component {
  render() {
    return (
      <div className="app-Layout">
        <Header />
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
        <footer className="app-Footer">
          <div className="app-Footer-container">
            <PathIndicator />
            <p>
              Icons designed by{' '}
              <a href="https://www.flaticon.com/authors/freepik">
                Freepik from Flaticon
              </a>
            </p>
            <p>
              <a
                href="https://github.com/illarionvk/demo-wizard-state-machine"
                target="_blank"
                rel="noopener noreferrer"
              >
                View source code on GitHub
              </a>
            </p>
          </div>
        </footer>
      </div>
    )
  }
}
