import React, { Component } from "react";
import { observer } from 'mobx-react';
import styled from 'reshadow';
import Menu from "../components/navigation/Menu";

import LazyWrapper from "../components/common/_Legacy/LazyWrapper";

import Header from "../components/page/Header";
import NewVacancies from "../components/vacancies/NewVacancies/NewVacancies";
import FindVacancies from "../components/vacancies/FindVacancies/FindVacancies";

import Select from '../components/common/Select';
import Button from '../components/common/Button';


import '../styles/Home.css';

import VacanciesStore from "../stores/Vacancies";
import FilterStore from "../stores/Filter";

@observer
class Home extends Component {
    render() {
        return styled`
            Button {
                margin: 10px;
            }
            
            Select {
                margin: 10px;
            }
        `(
            <content>
                <Button>Тык сюда</Button>
                <Button color="blue">Тык сюда</Button>

                <Select
                    id={'firstSelect'}
                    value={1}
                    onChange={ (value) => { console.log(value) } }
                    options={
                        [
                            {
                                value: 1,
                                text: 'Первый пункт'
                            },
                            {
                                value: 2,
                                text: 'Второй пункт'
                            }
                        ]
                    }
                    fieldSize={'m'}
                />
                <Select
                    id={'secondSelect'}
                    value={1}
                    text={'Нажми что бы выбрать'}
                    onChange={ (value) => { console.log(value) } }
                    options={
                        [
                            {
                                value: 1,
                                text: 'Первый пункт'
                            },
                            {
                                value: 2,
                                text: 'Второй пункт'
                            }
                        ]
                    }
                    fieldSize={'b'}
                />
                <Select
                    id={'thirdSelect'}
                    value={1}
                    text={'Нажми что бы выбрать'}
                    onChange={ (value) => { console.log(value) } }
                    options={
                        [
                            {
                                value: 1,
                                text: 'Первый пункт'
                            },
                            {
                                value: 2,
                                text: 'Второй пункт'
                            }
                        ]
                    }
                    fieldSize={'s'}
                />
                <Header/>
                <div className="section section--find_vacancies">
                    <NewVacancies VacanciesStore={VacanciesStore}/>
                </div>
                <div className="section section--new_vacancies">
                    <FindVacancies FilterStore={FilterStore} VacanciesStore={VacanciesStore}/>
                </div>
            </content>
        );
    }
}

export default Home;