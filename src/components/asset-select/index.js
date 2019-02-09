import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Form, FormSpy } from 'react-final-form'
import { map } from 'lodash/fp'

import { update as updateCommission } from '../../ducks/commission'
import { AssetRadioButton } from './radio-button'

const getAllItems = (state, props) => {
  const { allIds, byId } = state.assets[props.assetName]

  return map(function(id) {
    return byId[id]
  }, allIds)
}

const getSelectedId = (state, props) =>
  state.commission.selected[props.assetName] || null

const AssetSelect = function AssetSelect(props) {
  const { assetName, items, selectedId, onSubmit } = props

  const renderFormContent = function() {
    return (
      <>
        <FormSpy onChange={onSubmit} />
        <ul>
          {map(function(item) {
            return (
              <AssetRadioButton
                key={item.id}
                assetName={assetName}
                item={item}
              />
            )
          }, items)}
        </ul>
      </>
    )
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ [assetName]: selectedId }}
      render={renderFormContent}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  items: getAllItems,
  selectedId: getSelectedId
})

const mapDispatchToProps = function(dispatch, ownProps) {
  const { assetName } = ownProps

  if (!assetName) {
    throw new Error('Asset name is invalid [540701f22c8a11e9899610ddb1eacae1]')
  }

  return {
    onSubmit: (formState) => {
      const { initialValues, values } = formState
      const value = values[assetName] || null
      const prevValue = initialValues[assetName] || null

      if (value == null) {
        return
      }

      if (value === prevValue) {
        return
      }

      dispatch(
        updateCommission({
          value,
          path: ['selected', assetName]
        })
      )
    }
  }
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetSelect)

export { connected as AssetSelect, AssetSelect as _AssetSelect }
