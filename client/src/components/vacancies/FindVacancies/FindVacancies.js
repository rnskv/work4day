import React, { Component } from "react";

import Filter from '../Filter';
import Posts from './Posts';

import '../../../styles/Vacancies.css';

class FindVacancies extends Component {
    render() {
        return (
            <div className="vacancies vacancies--find">
                <h1 className="vacancies-title">Поиск работы</h1>
                <Filter />
                <Posts />
            </div>
        );
    }
}

export default FindVacancies;




