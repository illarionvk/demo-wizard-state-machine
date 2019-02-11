import React from 'react'

export const NavTitle = function NavTitle(props) {
  const { title } = props

  return (
    <div className="app-Navigation-titleContainer">
      <h2 className="app-Navigation-title">{title}</h2>
    </div>
  )
}
