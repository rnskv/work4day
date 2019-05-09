import React, { Component } from "react";
import { observer } from 'mobx-react';
import Menu from "../components/navigation/Menu";

import LazyWrapper from "../components/common/LazyWrapper";

import Header from "../components/page/Header";
import NewVacancies from "../components/vacancies/NewVacancies";
import FindVacancies from "../components/vacancies/FindVacancies";


import '../styles/Home.css';

import MainStore from "../stores/Main";

@observer
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <NewVacancies />
                <FindVacancies />
            </React.Fragment>
        );
    }
}

export default Home;