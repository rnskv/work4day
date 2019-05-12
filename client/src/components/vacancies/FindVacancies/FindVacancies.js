import React, { Component } from "react";

import Filter from '../Filter';
import Posts from './Posts';

import '../../../styles/Vacancies.css';

class FindVacancies extends Component {
    render() {
        const { vacancies } = this.props;
        return (
            <div className="vacancies vacancies--find">
                <h1 className="vacancies-title">Поиск работы</h1>
                <Filter />
                <Posts vacancies={vacancies}/>
            </div>
        );
    }
}

export default FindVacancies;




