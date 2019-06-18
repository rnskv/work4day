import React, { Component } from 'react'
import Vacancy from './Vacancy'

class VacanciesList extends Component {
  render () {
    const { vacancies, isLoading, loadMoreAction } = this.props
    return (
      <React.Fragment>
        <div className="vacancies">
          {
            vacancies.map((vacancy, id) => {
              return <Vacancy key={id} vacancy={vacancy}/>
            })
          }
        </div>
        {
          isLoading ? 'Загружаем еще' : ''
        }
        <button onClick={loadMoreAction}>Загрузить еще</button>
      </React.Fragment>
    )
  }
}

export default VacanciesList
