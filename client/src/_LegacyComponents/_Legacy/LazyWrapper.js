import React, { Component } from 'react'

import Loader from './Loader'

class LazyWrapper extends Component {
  render () {
    const { children, isLoading } = this.props
    return (
      isLoading
        ? <Loader />
        : children
    )
  }
}

export default LazyWrapper
