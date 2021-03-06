import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styled from 'reshadow';
import Menu from '../../_LegacyComponents/navigation/Menu';

import LazyWrapper from '../../_LegacyComponents/_Legacy/LazyWrapper';

import Header from '../../_LegacyComponents/page/Header';
import NewVacancies from '../../_LegacyComponents/vacancies/NewVacancies/NewVacancies';
import FindVacancies from '../../_LegacyComponents/vacancies/FindVacancies/FindVacancies';

import Select from '../../components/common/Select/index';
import Button from '../../components/common/Button/index';
import Vacancies from 'src/containers/Vacancies';

import '../../styles/Home.css';

import VacanciesStore from 'src/stores/_legacy/Vacancies';
import FilterStore from 'src/stores/_legacy/Filter';

@observer
class Home extends Component {
  render() {
    return (
      <content>
        <Header />
        {/*<div className="section section--find_vacancies">*/}
        {/*<NewVacancies VacanciesStore={VacanciesStore} />*/}
        {/*</div>*/}
        {/*<div className="section section--new_vacancies">*/}
        {/*<FindVacancies FilterStore={FilterStore} VacanciesStore={VacanciesStore} />*/}
        {/*</div>*/}

        <div className="section section--new_vacancies">
          <Vacancies />
        </div>
      </content>
    );
  }
}

export default Home;
