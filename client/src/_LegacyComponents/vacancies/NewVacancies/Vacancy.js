import React, { Component } from 'react'

class VacanciesList extends Component {
  render () {
    const { vacancy } = this.props

    return (
      <div className="vacancies-vacancy">
        <div className="vacancies-vacancy__title">
          { vacancy.whoNeed || 'Названия нет, но вы держитесь'}
        </div>

        <div className="vacancies-vacancy__category">
          { console.log('1', vacancy.category.name) }
          { vacancy.category.name }
        </div>

        <div className="vacancies-vacancy__text">
          { vacancy.text.slice(0, 190) }...
        </div>

        <div className="vacancies-vacancy__from">
          <div className="vacancies-vacancy__group">
            <i className="fab fa-vk" style={{ fontSize: '18pt', marginRight: '9px' }}></i> Из группы:
          </div>
          <img src={vacancy.group.photo100} className="vacancies-vacancy__photo"/>
          <div className="vacancies-vacancy__groupname">
            { vacancy.group.name }
          </div>
        </div>
      </div>
    )
  }
}

export default VacanciesList
