import React, { Component } from "react";

import VacanciesList from './VacanciesList';

import '../../../styles/Vacancies.css';

class NewVacancies extends Component {
    render() {
        const { store } = this.props;
        const { newVacancies } = store;

        return (
            <div className="vacancies vacancies--new">
                <h1 className="vacancies-title">Свежие подработки</h1>
                <VacanciesList newVacancies={newVacancies} />
                <button className="vacancies-button" onClick={newVacancies.next}>Показать следующие</button>
            </div>
        );
    }
}

export default NewVacancies;




