import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Vacancies.shadow.css';
import { observer, inject } from 'mobx-react';

import Type from 'prop-types';

import Heading from 'src/components/common/Heading';
import ToggledList from 'src/components/common/ToggledList';

import OffersList from './OffersList';
import Filter from './Filter';

@inject('OffersStore')
@observer
class Vacancies extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super();
    console.log(props);
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
          },
        ],
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
              {
                name: 'Фуры',
                list: [{ name: 'С прицепом', value: 'with_pricep' }, { name: 'Без прицепа', value: 'withot_pricep' }],
              },
            ],
          },
          {
            name: 'Бухгалтерия',
            value: 'money',
          },
        ],
      },
    ];
  }

  render() {
    const { OffersStore } = this.props;
    return styled(styles)(
      <content>
        <Heading size={'l'} color={'black'}>
          Вакансии
        </Heading>
        <div>
          <Filter list={this.filterList} />
          <OffersList list={OffersStore.offers} />
        </div>
      </content>,
    );
  }
}

export default Vacancies;
