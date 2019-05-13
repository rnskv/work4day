import React, { Component } from "react";
import { observer } from 'mobx-react';

import categories from '../../configs/categories';

import '../../styles/Vacancies.css';

import VacanciesStore from "../../stores/Vacancies";

@observer
class Filter extends Component {
    render() {
        const { filter, filteredVacancies } = VacanciesStore;
        return (
            <div className="vacancies-filter">
                <h2>Категории</h2>
                <ul className="vacancies-filter_items">
                    <li
                        onClick={filter.change(-1)}
                        className={`vacancies-filter_item ${filter.categories.length === 0 ? 'vacancies-filter_item--active' : ''}`}
                    >
                        Все категории
                    </li>
                    {
                        Object.keys(categories).map((id, index) => {
                            return (
                                <li key={index}
                                    onClick={filter.change(index)}
                                    className={`vacancies-filter_item ${filter.categories.includes(Number(id)) ? 'vacancies-filter_item--active' : ''}`}
                                >
                                    { categories[id] }
                                </li>
                            )
                        })
                    }
                    <button onClick={filteredVacancies.reload} className="vacancies-filter_button">Применить</button>
                </ul>
            </div>
        );
    }
}

export default Filter;




