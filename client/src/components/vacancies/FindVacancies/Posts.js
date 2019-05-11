import React, { Component } from "react";

import Post from './Post';

import '../../../styles/Vacancies.css';

class Posts extends Component {
    mockData = [
        {
            whatNeed: 'Разработать программное обеспечение',
            description: 'Разработка мобильного приложения.',
            text: 'Ищем ответственного разрабочика для создания мобильного приложения сайта work4day. Подробнее при личном общении.',
            group: {
                name: 'Одна группа по поиску работы',
                photo100: 'https://pp.userapi.com/c850528/v850528101/14d41/XA3xwxFxLHE.jpg?ava=1'
            }
        },
        {
            whatNeed: 'Выполнять поручения',
            description: 'Различные небольшие поручения.',
            text: 'Ищем человека способного в кратчайшие сроки качетсвенно выполнять порученные ему задания. За хорошую зп.',
            group: {
                name: 'Прораб Ашот',
                photo100: 'https://pp.userapi.com/c10186/g30850836/d_7a5b239e.jpg?ava=1'
            }
        }
    ];

    render() {
        const { mockData } = this;
        return (
            <div className="vacancies-posts">
                <h2>Объявления</h2>
                {
                    mockData.map(post => {
                        return  <Post post={post} />
                    })
                }
            </div>
        );
    }
}

export default Posts;