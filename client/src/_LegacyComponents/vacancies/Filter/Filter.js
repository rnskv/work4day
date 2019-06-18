import React, { Component } from "react";
import { observer } from 'mobx-react/index';

import Item from './Item';
import FilterStore from '../../../stores/Filter';

import '../../../styles/Vacancies.css';

import Button from 'src/components/common/Button';

@observer
class Filter extends Component {
    render() {
        const { VacanciesStore } = this.props;
        const { filteredVacancies } = VacanciesStore;
        const { changeCity, cities, categories, changeCategory, filteredCategories, filteredCityId } = FilterStore;

        return (
            <div className="vacancies-filter">
                <h2>Выберите город</h2>
                <ul className="vacancies-filter_items">
                    {
                        cities.isLoading ? 'Мы загружаем города...' :
                        Object.keys(cities.list).map((cityId, index) => {
                            const city = cities.list[cityId];
                            console.log({...city})
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
                    {
                        cities.isLoading ? 'Мы загружаем категории...' :
                        Object.keys(categories.list).map((id, index) => {
                            console.log([...filteredCategories])
                            const category = categories.list[id];
                            return (
                                <Item key={index}
                                      onClick={changeCategory(category.id)}
                                      text={category.name}
                                      isActive={filteredCategories.includes(category.id)}
                                />
                            )
                        })
                    }
                </ul>
                <Button size="m" color={"blue"} onClick={filteredVacancies.reload} >Применить</Button>
            </div>
        );
    }
}

export default Filter;
