import React from 'react'
import { Field } from 'react-final-form'
import { kebabCase } from 'lodash/fp'

export const AssetRadioButton = function(props) {
  const { assetName, item } = props

  const { id: value, title } = item

  const id = kebabCase([assetName, value].join('-'))

  return (
    <div className="app-RadioButtons-item">
      <Field
        className="app-RadioButtons-itemRadio"
        component="input"
        type="radio"
        id={id}
        name={assetName}
        value={value}
      />
      <div className="app-RadioButtons-itemContent">
        <div className="app-RadioButtons-itemFakeButton">{title}</div>
        <label className="app-RadioButtons-itemLabel" htmlFor={id}>
          {title}
        </label>
      </div>
    </div>
  )
}
