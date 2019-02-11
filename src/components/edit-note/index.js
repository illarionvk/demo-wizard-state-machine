import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Field, Form, FormSpy } from 'react-final-form'

import { update as updateCommission } from '../../ducks/commission'
import { getNote } from '../../selectors/commission'

const EditNote = function EditNote(props) {
  const { note, onSubmit } = props
  const id = 'note'
  const placeholder = 'Order notes (optional)'

  const renderFormContent = function() {
    return (
      <div className="app-EditNote">
        <FormSpy onChange={onSubmit} />
        <div className="app-EditNote-container">
          <label className="app-EditNote-label u-vhide" htmlFor={id}>
            Note
          </label>
          <Field
            component="textarea"
            name="note"
            rows="5"
            id={id}
            placeholder={placeholder}
            value={note}
          />
        </div>
      </div>
    )
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ note: note }}
      render={renderFormContent}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  note: getNote
})

const mapDispatchToProps = function(dispatch) {
  return {
    onSubmit: (formState) => {
      const { initialValues, values } = formState
      const value = values.note || ''
      const prevValue = initialValues.note || ''

      if (!value) {
        return
      }

      if (value === prevValue) {
        return
      }

      dispatch(
        updateCommission({
          value,
          path: ['note']
        })
      )
    }
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNote)

export { connected as EditNote, EditNote as _EditNote }
