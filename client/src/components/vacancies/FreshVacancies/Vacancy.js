import React, { Component } from "react";

class VacanciesList extends Component {
    render() {
        const { vacancy } = this.props;
        const CATEGORIES = {
            0: 'Информационные технологии',
            1: 'Разное',
            2: 'Дизайн',
            3: 'Хуй проссыш чо'
        };
        return (
            <div className="vacancies-vacancy">
                <div className="vacancies-vacancy__title">
                    { vacancy.whoNeed || 'Названия нет, но вы держитесь'}
                </div>

                <div className="vacancies-vacancy__category">
                    { CATEGORIES[vacancy.category] }
                </div>

                <div className="vacancies-vacancy__text">
                    { vacancy.text }
                </div>

                <div className="vacancies-vacancy__from">
                    <div className="vacancies-vacancy__group">
                        <i className="fab fa-vk" style={{fontSize: '18pt', marginRight: '9px'}}></i> Из группы:
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




