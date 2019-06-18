import React, { Component } from 'react'

import categories from '../../../configs/categories'

class Item extends Component {
  render () {
    const { onClick, text, isActive } = this.props
    return (
      <li
        onClick={onClick}
        className={`vacancies-filter_item ${isActive ? 'vacancies-filter_item--active' : ''}`}
      >
        { text }
      </li>
    )
  }
}

export default Item
