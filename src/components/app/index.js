import React, { Component } from 'react'

import { WizardRouter } from '../wizard-router'

const Test = function(props) {
  const { message } = props

  return (
    <main className="app-Main" role="main">
      {message}
    </main>
  )
}

export class App extends Component {
  render() {
    return (
      <>
        <header className="app-Header" />
        <WizardRouter>
          <Test path="/" message="Hello!" />
          <Test path="/initializing" message="Initializing" />
          <Test path="/steps/bicycle" message="Bicycle" />
        </WizardRouter>
        <aside className="app-Notes">Aside</aside>
        <footer className="app-Footer" />
      </>
    )
  }
}
