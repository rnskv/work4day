import React, { Component } from "react";
import { observer } from 'mobx-react';
import Menu from "../_LegacyComponents/navigation/Menu";

import LazyWrapper from "../components/common/_Legacy/LazyWrapper";

import VacanciesList from "../_LegacyComponents/vacancies/legacy/VacanciesList";

import '../styles/Vacancies.css';

import VacanciesStore from "../stores/Vacancies";

@observer
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu/>
                <h1>Вакансии</h1>
                <VacanciesList
                    vacancies={VacanciesStore.list}
                    isLoading={VacanciesStore.isLoading}
                    loadMoreAction={VacanciesStore.loadMore}
                />
            </React.Fragment>
        );
    }
}

export default Home;