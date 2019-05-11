import React, { Component } from "react";

import '../../styles/Vacancies.css';

class Filter extends Component {
    render() {
        return (
            <div className="vacancies-filter">
                <h2>Категории</h2>
                <ul className="vacancies-filter_items">
                    <li className="vacancies-filter_item">Разная работа</li>
                    <li className="vacancies-filter_item vacancies-filter_item--active">IT технологии</li>
                    <li className="vacancies-filter_item">Удаленная работа</li>
                    <li className="vacancies-filter_item">Маркетинг</li>
                </ul>
            </div>
        );
    }
}

export default Filter;




