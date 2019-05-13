import React, { Component } from "react";
import { observer } from 'mobx-react';

import categories from '../../configs/categories';

import '../../styles/Vacancies.css';

@observer
class Filter extends Component {
    render() {
        const { filter } = this.props;
        return (
            <div className="vacancies-filter">
                <h2>Категории</h2>
                <ul className="vacancies-filter_items">
                    <li
                        onClick={filter.change(-1)}
                        className={`vacancies-filter_item ${filter.categoryId === -1 ? 'vacancies-filter_item--active' : ''}`}
                    >
                        Все категории
                    </li>
                    {
                        Object.keys(categories).map((id, index) => {
                            return (
                                <li key={index}
                                    onClick={filter.change(index)}
                                    className={`vacancies-filter_item ${filter.categoryId === Number(id) ? 'vacancies-filter_item--active' : ''}`}
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




