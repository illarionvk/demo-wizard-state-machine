import React from 'react'

import { WizardRouter } from '../wizard-router'
import { Header } from '../header'
import { Footer } from '../footer'
import { DevNotes } from '../devnotes'
import { Spinner } from '../spinner'
import { Main } from '../main'
import { MachineFailure } from '../failure'
import { ErrorBoundary } from '../error-boundary'

import { stateNames } from '../../machines/wizard/states'

const { IDLE, INITIALIZING, FAILURE, LOADING } = stateNames

export class App extends React.Component {
  render() {
    return (
      <div className="app-Layout">
        <Header />
        <ErrorBoundary>
          <WizardRouter className="app-Layout-main">
            <Spinner path={IDLE} />
            <Spinner path={INITIALIZING} />
            <Spinner path={LOADING} />
            <MachineFailure path={FAILURE} />
            <Main path="/*" />
          </WizardRouter>
        </ErrorBoundary>
        <Footer />
        <DevNotes />
      </div>
    )
  }
}
