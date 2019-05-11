import React, { Component } from "react";

import VacanciesList from './VacanciesList';

import '../../../styles/Vacancies.css';

class NewVacancies extends Component {
    render() {
        return (
            <div className="vacancies">
                <h1 className="vacancies-title">Свежие подработки</h1>
                <VacanciesList />
                <button className="vacancies-button">Показать следующие</button>
            </div>
        );
    }
}

export default NewVacancies;




