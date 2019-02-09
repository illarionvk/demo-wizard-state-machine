import React from 'react'
import { Field } from 'react-final-form'
import { kebabCase } from 'lodash/fp'

export const AssetRadioButton = function(props) {
  const { assetName, item } = props

  const { id: value, title } = item

  const id = kebabCase([assetName, value].join('-'))

  return (
    <div>
      <Field
        component="input"
        type="radio"
        id={id}
        name={assetName}
        value={value}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  )
}
