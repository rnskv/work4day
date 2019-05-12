import React, { Component } from "react";
import { observer } from 'mobx-react';
import Menu from "../components/navigation/Menu";

import LazyWrapper from "../components/common/LazyWrapper";

import Header from "../components/page/Header";
import NewVacancies from "../components/vacancies/FreshVacancies/NewVacancies";
import ModeratedPosts from "../components/crm/ModeratedPosts";


import '../styles/Crm.css';

import CrmStore from "../stores/Crm";

@observer
class Crm extends Component {
    render() {
        return (
            <React.Fragment>
               RNSKV CRM
                <ModeratedPosts posts={CrmStore.vacancies.list}/>
            </React.Fragment>
        );
    }
}

export default Crm;