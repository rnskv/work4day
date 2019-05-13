import React, { Component } from "react";
import { observer } from 'mobx-react';

import categories from '../../configs/categories';

import '../../styles/Vacancies.css';

import VacanciesStore from "../../stores/Vacancies";

@observer
class Filter extends Component {
    render() {
        const { categoryId, change } = this.props;
        return (
            <div className="vacancies-filter">
                <h2>Категории</h2>
                <ul className="vacancies-filter_items">
                    <li
                        onClick={VacanciesStore.filter.change(-1)}
                        className={`vacancies-filter_item ${VacanciesStore.filter.categoryId === -1 ? 'vacancies-filter_item--active' : ''}`}
                    >
                        Все категории
                    </li>
                    {
                        Object.keys(categories).map((id, index) => {
                            return (
                                <li key={index}
                                    onClick={VacanciesStore.filter.change(index)}
                                    className={`vacancies-filter_item ${VacanciesStore.filter.categoryId === Number(id) ? 'vacancies-filter_item--active' : ''}`}
                                >
                                    { categories[id] }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Filter;




