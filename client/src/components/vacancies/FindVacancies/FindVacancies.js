import React, { Component } from "react";

import Filter from '../Filter/Filter';
import Posts from './Posts';

import '../../../styles/Vacancies.css';

class FindVacancies extends Component {
    render() {
        const { filteredVacancies, filter } = this.props;
        return (
            <div className="vacancies vacancies--find">
                <h1 className="vacancies-title">Поиск работы</h1>
                <Filter filter={filter}/>
                <Posts filteredVacancies={filteredVacancies} filter={filter}/>
            </div>
        );
    }
}

export default FindVacancies;




