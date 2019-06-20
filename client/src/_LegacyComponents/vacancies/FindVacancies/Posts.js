import React, { Component } from "react";
import { observer } from 'mobx-react';

import Post from './Post';

import VacanciesStore from '../../../stores/Vacancies';
import Button from 'src/components/common/Button';

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
                    isLoading ? <div className="loader" /> : ''
                }
                { !isLoadAll
                    ? <Button color="blue" size="l" onClick={next}>Показать следующие</Button>
                    : 'Кажется вакансий больше нет, заходите позже :)'
                }
            </div>
        );
    }
}

export default Posts;