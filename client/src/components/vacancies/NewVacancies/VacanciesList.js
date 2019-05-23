import React, { Component } from "react";
import Vacancy from "./Vacancy";
import { observer } from 'mobx-react';

@observer
class VacanciesList extends Component {
    render() {
        const { newVacancies } = this.props;
        const { list, next, isLoading} = newVacancies;

        return (
            <div className="vacancies-list">
                {
                    !isLoading
                        ? list.map((vacancy, index) => {
                            return <Vacancy key={index} vacancy={vacancy} />
                        })
                        : <div className="loader" />
                }
            </div>
        );
    }
}

export default VacanciesList;




