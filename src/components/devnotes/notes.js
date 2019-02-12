import React from 'react'
import ReactMarkdown from 'react-markdown'

import { wire, wizard } from '../../machines'
import { stateNames } from '../../machines/wizard/states'

const { BICYCLE } = stateNames

const notes = {
  [BICYCLE]: `
If the visitor selects Unicycle, the wizard will skip the option steps and [jump straight to the Order Note step][fast-forward-config].

[fast-forward-config]: https://github.com/illarionvk/demo-wizard-state-machine/blob/master/src/machines/wizard/config.js#L58
  `
}

const Notes = function Notes(props) {
  const { name = 'unknown' } = props
  const note = notes[name]

  if (!note) {
    return null
  }

  return (
    <div className="app-DevNotes-notes o-rte">
      <ReactMarkdown source={note} skipHtml={true} />
    </div>
  )
}

const wired = wire(Notes)
  .with(wizard.name)
  .map(function(machine) {
    return {
      name: machine.state.name
    }
  })

export { wired as Notes, Notes as _Notes }
