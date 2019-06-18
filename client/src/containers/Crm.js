import React, { Component } from "react";
import { observer } from 'mobx-react';
import Menu from "../_LegacyComponents/navigation/Menu";

import LazyWrapper from "../components/common/_Legacy/LazyWrapper";

import Header from "../_LegacyComponents/page/Header";
import NewVacancies from "../_LegacyComponents/vacancies/NewVacancies/NewVacancies";
import ModeratedPosts from "../_LegacyComponents/crm/ModeratedPosts";


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