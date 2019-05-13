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
        console.log('store', VacanciesStore);
        return (
            <React.Fragment>
                <Header/>
                <div className="section">
                    <NewVacancies
                        vacancies={VacanciesStore.newVacancies.list}
                        next={VacanciesStore.newVacancies.next}
                    />
                </div>
                <div className="section section--new_vacancies">
                    <FindVacancies
                        vacancies={VacanciesStore.filteredVacancies.list}
                        filterCategoryId={VacanciesStore.filter.categoryId}
                        next={VacanciesStore.filteredVacancies.next}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default Home;