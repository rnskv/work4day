import React, { Component } from "react";
import Vacancy from "./Vacancy";

class VacanciesList extends Component {
    render() {
        const { vacancies } = this.props;
        return (
            <div className="vacancies-list">
                {
                    vacancies.map((vacancy, index) => {
                        return <Vacancy key={index} vacancy={vacancy} />
                    })
                }
            </div>
        );
    }
}

export default VacanciesList;




