import React, { Component } from 'react'
import Link from './Link'

class Menu extends Component {
  render () {
    return (
      <ul>
        <Link to={'/'}>Главная</Link>
        <Link to={'/vacancies'}>Вакансии</Link>
        <Link to={'/test1'}>Test 1</Link>
        <Link to={'/test2'}>Test 2</Link>
      </ul>
    )
  }
}

export default Menu
