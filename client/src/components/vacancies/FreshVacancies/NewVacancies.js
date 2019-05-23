import React, { Component } from "react";

import VacanciesList from './VacanciesList';

import '../../../styles/Vacancies.css';

class NewVacancies extends Component {
    render() {
        const { store } = this.props;
        const { list, next } = store.newVacancies;

        return (
            <div className="vacancies vacancies--new">
                <h1 className="vacancies-title">Свежие подработки</h1>
                <VacanciesList vacancies={list}/>
                <button className="vacancies-button" onClick={next}>Показать следующие</button>
            </div>
        );
    }
}

export default NewVacancies;




