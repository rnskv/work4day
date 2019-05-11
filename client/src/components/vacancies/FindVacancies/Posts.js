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
        },
        {
            whatNeed: 'Нарисовать иллюстрацию',
            description: 'Необходимо выполнять иллюстрации в соответсвтии с ТЗ',
            text: 'Нужен тот, кто сможет реализовать наброски в готовый продукт. Выполнить все в кратчайшие сроки и максимально качественно! Оплата почасовая, договорная.',
            group: {
                name: 'Артемий лебедев',
                photo100: 'https://pp.userapi.com/c847221/v847221707/1f80bf/auknO9Anmq0.jpg?ava=1'
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
                <button className="vacancies-button">Показать следующие</button>
            </div>
        );
    }
}

export default Posts;