import React, { Component } from "react";
import { observer } from 'mobx-react/index';

import categories from '../../../configs/categories';

import Item from './Item';
import FilterStore from '../../../stores/Filter';

import '../../../styles/Vacancies.css';

@observer
class Filter extends Component {
    render() {
        const { VacanciesStore } = this.props;
        const { filteredVacancies } = VacanciesStore;
        const { changeCity, cities, changeCategory, filteredCategories, filteredCityId } = FilterStore;

        console.log('cities', FilterStore);
        return (
            <div className="vacancies-filter">
                <h2>Выберите город</h2>
                <ul className="vacancies-filter_items">
                    {
                        Object.keys(cities).map((id, index) => {
                            const city = cities[id];
                            return (
                                <Item key={index}
                                      onClick={changeCity(city.id)}
                                      text={city.name}
                                      isActive={filteredCityId === city.id}
                                />
                            )
                        })
                    }
                </ul>
                <h2>Выберите категории</h2>
                <ul className="vacancies-filter_items">
                    <li
                        onClick={changeCategory(-1)}
                        className={`vacancies-filter_item ${filteredCategories.length === 0 ? 'vacancies-filter_item--active' : ''}`}
                    >
                        Все категории
                    </li>
                    {
                        Object.keys(categories).map((id, index) => {
                            console.log([...filteredCategories])
                            return (
                                <Item key={index}
                                      onClick={changeCategory(index)}
                                      text={categories[id]}
                                      isActive={filteredCategories.includes(Number(index))}
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
