import React, { Component } from "react";
import Vacancy from "./Vacancy";
import VacanciesStore from "../../../stores/Vacancies";
import { observer } from 'mobx-react';

@observer
class VacanciesList extends Component {
    render() {
        const { vacancies } = this.props;
        const { newVacancies, filter } = VacanciesStore;
        return (
            <div className="vacancies-list">
                {
                    !newVacancies.isLoading
                        ? newVacancies.list.map((vacancy, index) => {
                            return <Vacancy key={index} vacancy={vacancy} />
                        })
                        : <div className="loader" />
                }
            </div>
        );
    }
}

export default VacanciesList;




