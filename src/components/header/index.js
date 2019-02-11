import React from 'react'

import { Icons } from '../icons'

export const Header = function Header() {
  return (
    <header className="app-Header">
      <div className="app-Header-container">
        <div className="app-Header-logo">
          <Icons name="shop" />
        </div>
        <div className="app-Header-titleContainer">
          <h1 className="app-Header-title">Wizard State Machine Demo</h1>
        </div>
      </div>
    </header>
  )
}
