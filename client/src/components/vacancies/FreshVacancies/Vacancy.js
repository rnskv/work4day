import React, { Component } from "react";

class VacanciesList extends Component {
    render() {
        const { vacancy } = this.props;

        return (
            <div className="vacancies-vacancy">
                <div className="vacancies-vacancy__title">
                    { vacancy.whoNeed }
                </div>

                <div className="vacancies-vacancy__category">
                    { vacancy.category }
                </div>

                <div className="vacancies-vacancy__text">
                    { vacancy.text }
                </div>

                <div className="vacancies-vacancy__from">
                    <div className="vacancies-vacancy__group">
                        Подработка из группы
                    </div>
                    <img src={vacancy.group.photo100} className="vacancies-vacancy__photo"/>
                    <div className="vacancies-vacancy__groupname">
                        { vacancy.group.name }
                    </div>
                </div>
            </div>
        );
    }
}

export default VacanciesList;




