import React, { Component } from "react";

import Post from './Post';

import '../../../styles/Vacancies.css';

class Posts extends Component {
    render() {
        const { filterCategoryId, vacancies, next } = this.props;

        const filteredVacancies = filterCategoryId === -1
            ? vacancies
            : vacancies.filter(vacancy => Number(vacancy.categoryId) === Number(filterCategoryId));

        console.log(vacancies)
        return (
            <div className="vacancies-posts">
                <h2>Объявления</h2>
                {
                    filteredVacancies.map((post, index) => {
                        return  <Post key={index} post={post} />
                    })
                }
                <button className="vacancies-button" onClick={next}>Показать следующие</button>
            </div>
        );
    }
}

export default Posts;