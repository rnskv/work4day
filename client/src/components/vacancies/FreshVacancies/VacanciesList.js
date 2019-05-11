import React, { Component } from "react";
import Vacancy from "./Vacancy";

class VacanciesList extends Component {
    mockData = [
        {
            whoNeed: 'Разработчик ПО',
            category: 'Information Technologies',
            text: 'Ищем ответственного разрабочика для создания мобильного приложения сайта work4day. Подробнее при личном общении.',
            group: {
                name: 'Одна группа по поиску работы',
                photo100: 'https://pp.userapi.com/c850528/v850528101/14d41/XA3xwxFxLHE.jpg?ava=1'
            }
        },
        {
            whoNeed: 'Разнорабочий',
            category: 'Физический труд',
            text: 'Ищем человека способного в кратчайшие сроки качетсвенно выполнять порученные ему задания. За хорошую зп.',
            group: {
                name: 'Прораб Ашот',
                photo100: 'https://pp.userapi.com/c10186/g30850836/d_7a5b239e.jpg?ava=1'
            }
        },
        {
            whoNeed: 'Графический иллюстратор',
            category: 'Дизайн',
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
            <div className="vacancies-list">
                {
                    mockData.map(vacancy => {
                        return <Vacancy vacancy={vacancy} />
                    })
                }
            </div>
        );
    }
}

export default VacanciesList;




