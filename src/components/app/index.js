import React, { Component } from 'react'

import { WizardRouter } from '../wizard-router'
import { PathIndicator } from '../path-indicator'

export class App extends Component {
  render() {
    return (
      <>
        <header className="app-Header" />
        <aside className="app-Notes">
          <PathIndicator />
        </aside>
        <footer className="app-Footer" />
      </>
    )
  }
}
