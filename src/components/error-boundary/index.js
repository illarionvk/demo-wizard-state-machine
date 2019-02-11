import React from 'react'
import { Failure } from '../failure'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error }
  }

  render() {
    if (this.state.error) {
      return <Failure error={this.state.error} />
    }

    return this.props.children
  }
}
