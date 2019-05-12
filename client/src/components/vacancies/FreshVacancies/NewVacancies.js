import React, { Component } from "react";

import VacanciesList from './VacanciesList';

import '../../../styles/Vacancies.css';

class NewVacancies extends Component {
    render() {
        const { vacancies, next } = this.props;
        console.log(vacancies)
        return (
            <div className="vacancies vacancies--new">
                <h1 className="vacancies-title">Свежие подработки</h1>
                <VacanciesList vacancies={vacancies}/>
                <button className="vacancies-button" onClick={next}>Показать следующие</button>
            </div>
        );
    }
}

export default NewVacancies;




