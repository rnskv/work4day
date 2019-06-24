import React, { Component } from 'react';

import Filter from '../Filter/Filter';
import Posts from './Posts';

class FindVacancies extends Component {
  render() {
    const { VacanciesStore, FilterStore } = this.props;
    const { filteredVacancies } = VacanciesStore;

    return (
      <div className="vacancies vacancies--find">
        <h1 className="vacancies-title">Поиск работы</h1>
        <Filter VacanciesStore={VacanciesStore} />
        <Posts filteredVacancies={filteredVacancies} FilterStore={FilterStore} />
      </div>
    );
  }
}

export default FindVacancies;
