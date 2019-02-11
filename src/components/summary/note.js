import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getNote } from '../../selectors/commission'

import { Icons } from '../icons'

const Note = function Note(props) {
  const { note } = props

  if (!note) {
    return null
  }

  return (
    <div className="app-Summary-item" data-name="note">
      <div className="app-Summary-itemIcon">
        <Icons name="edit" />
      </div>
      <div className="app-Summary-itemDetails">
        <div className="app-Summary-itemTitle">Notes</div>
        <div className="app-Summary-itemSubtitle">
          <pre>{note}</pre>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  note: getNote
})

const connected = connect(mapStateToProps)(Note)

export { connected as Note, Note as _Note }
