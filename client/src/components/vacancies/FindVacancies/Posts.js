import React, { Component } from "react";
import { observer } from 'mobx-react';

import Post from './Post';

import '../../../styles/Vacancies.css';

import VacanciesStore from '../../../stores/Vacancies';

@observer
class Posts extends Component {
    render() {
        const { filteredVacancies, filter } = VacanciesStore;
        const { list, next, isLoadAll, isLoading } = filteredVacancies;

        return (
            <div className="vacancies-posts">
                <h2>Объявления</h2>
                {
                    list.map((post, index) => {
                        return  <Post key={index} post={post} />
                    })
                }
                {
                    isLoading ? 'Загрузка' : ''
                }
                { !isLoadAll
                    ? <button className="vacancies-button" onClick={next}>Показать следующие</button>
                    : 'Кажется вакансий больше нет, заходите позже :)'
                }
            </div>
        );
    }
}

export default Posts;