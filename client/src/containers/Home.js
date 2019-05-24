import React, { Component } from "react";
import { observer } from 'mobx-react';
import Menu from "../components/navigation/Menu";

import LazyWrapper from "../components/common/LazyWrapper";

import Header from "../components/page/Header";
import NewVacancies from "../components/vacancies/NewVacancies/NewVacancies";
import FindVacancies from "../components/vacancies/FindVacancies/FindVacancies";


import '../styles/Home.css';

import VacanciesStore from "../stores/Vacancies";
import FilterStore from "../stores/Filter";

@observer
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="section section--find_vacancies">
                    <NewVacancies VacanciesStore={VacanciesStore}/>
                </div>
                <div className="section section--new_vacancies">
                    <FindVacancies FilterStore={FilterStore} VacanciesStore={VacanciesStore}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;