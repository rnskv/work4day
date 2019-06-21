import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Vacancies.shadow.css';
import Type from 'prop-types';

import Heading from 'src/components/common/Heading';
import ToggledList from 'src/components/common/ToggledList';

import OffersList from './OffersList';
import Filter from './Filter';

class Vacancies extends Component {
    static propTypes = {

    };

    static defaultProps = {

    };

    constructor() {
        super();
        this.filterList = [
            {
                name: 'Регион',
                category: 'region',
                list: [
                    {
                        name: 'Санкт-Петербург',
                        value: 131,
                    },
                    {
                        name: 'Москва',
                        value: 777,
                    },
                    {
                        name: 'Пенза',
                        value: 58,
                    },
                    {
                        name: 'Минск',
                        value: 983,
                    }
                ]
            },
            {
                name: 'Профобласть',
                category: 'profession',
                list: [
                    {
                        name: 'Продажи',
                        value: 'sales',
                    },
                    {
                        name: 'IT, телеком',
                        value: 'it',
                    },
                    {
                        name: 'Производство',
                        value: 'craft',
                    },
                    {
                        name: 'Админ, персонал',
                        value: 'admin',
                    },
                    {
                        name: 'Авто',
                        list: [
                            { name: 'Легковые', value: 'leg_car' },
                            { name: 'Грузовые', value: 'mid_car' },
                            { name: 'Фуры', list: [
                                    { name: 'С прицепом', value: 'with_pricep' },
                                    { name: 'Без прицепа', value: 'withot_pricep' },
                                ]}
                        ]

                    },
                    {
                        name: 'Бухгалтерия',
                        value: 'money'
                    }
                ]
            }
        ];
        this.offersList = [{
            title: 'Marketing Video Designer',
            group: {
                title: 'ООО Плейджендари Ру '
            },
            location: {
                city: 'Пенза',
                area: 'Ленинский р-н.'
            },
            text: 'Создание промо-видео для игр и приложений. Монтаж и обработка видео. Участие в обсуждении идей для промо-видео. Владение Adobe After Effects, Premiere Pro, Photoshop. Наличие портфолио motion роликов и готовность выполнить тестовое задание. Хорошее знание композиции, обладание...',
            date: '5 июня'
        },
        {
            title: 'Финансовый директор (оптовая торговля, ВЭД)',
            group: {
                title: 'МАТЕО GROUP'
            },
            location: {
                city: 'Пенза',
                area: 'Железнодарожный р-н.'
            },
            text: 'Руководство финансово-экономической и бухгалтерской службами. Разработка политик (кредитная, учетная, финансовая, управления ДЗ/КЗ) и процедур. Внедрение систем управленческого учета...\n' +
            'Высшее образование (экономика, финансы). Опыт работы в крупной компании/ холдинге с несколькими юридическими лицами. Опыт построения инвестиционных моделей.',
            date: '17 июня'
        }]
    }

    render() {
        return styled(styles)(
            <content>
                <Heading size={'l'} color={'black'}>Вакансии</Heading>
                <div>
                    <Filter list={this.filterList}/>
                    <OffersList list={this.offersList} />
                </div>
            </content>
        )
    }
}

export default Vacancies;
