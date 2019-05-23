import React, { Component } from "react";
import { observer } from 'mobx-react';
import Menu from "../components/navigation/Menu";

import LazyWrapper from "../components/common/LazyWrapper";

import Header from "../components/page/Header";
import NewVacancies from "../components/vacancies/FreshVacancies/NewVacancies";
import FindVacancies from "../components/vacancies/FindVacancies/FindVacancies";


import '../styles/Home.css';

import VacanciesStore from "../stores/Vacancies";

@observer
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="section section--find_vacancies">
                    <NewVacancies store={VacanciesStore}/>
                </div>
                <div className="section section--new_vacancies">
                    <FindVacancies store={VacanciesStore}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;