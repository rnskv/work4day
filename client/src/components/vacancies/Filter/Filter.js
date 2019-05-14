import React, { Component } from "react";
import { observer } from 'mobx-react/index';

import categories from '../../../configs/categories';
import cities from '../../../configs/cities';

import Item from './Item';

import '../../../styles/Vacancies.css';

import VacanciesStore from "../../../stores/Vacancies";

@observer
class Filter extends Component {
    render() {
        const { filter, filteredVacancies } = VacanciesStore;
        return (
            <div className="vacancies-filter">
                <h2>Выберите город</h2>
                <ul className="vacancies-filter_items">
                    {
                        Object.keys(cities).map((id, index) => {
                            return (
                                <Item key={index}
                                      onClick={filter.changeCity(index)}
                                      text={cities[id].name}
                                      isActive={filter.city === (Number(id))}
                                />
                            )
                        })
                    }
                </ul>
                <h2>Выберите категории</h2>
                <ul className="vacancies-filter_items">
                    <li
                        onClick={filter.changeCategory(-1)}
                        className={`vacancies-filter_item ${filter.categories.length === 0 ? 'vacancies-filter_item--active' : ''}`}
                    >
                        Все категории
                    </li>
                    {
                        Object.keys(categories).map((id, index) => {
                            return (
                                <Item key={index}
                                      onClick={filter.changeCategory(index)}
                                      text={categories[id]}
                                      isActive={filter.categories.includes(Number(id))}
                                />
                            )
                        })
                    }
                </ul>
                <button onClick={filteredVacancies.reload} className="vacancies-filter_button">Применить</button>
            </div>
        );
    }
}

export default Filter;




