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
        category: 'cityId',
        list: [
          {
            name: 'Пенза',
            value: 3,
          },
          {
            name: 'Москва',
            value: 4,
          },
          {
            name: 'Санкт-Петербург',
            value: 5,
          },
        ],
      },
      {
        name: 'Категория',
        category: 'categoryId',
        list: [
          {
            name: 'Информационные технологии',
            value: 0,
          },
          {
            name: 'Дизайн',
            value: 2,
          },
          {
            name: 'Доставка',
            value: 3,
          },
          {
            name: 'Продажи',
            value: 4,
          },
          {
            name: 'Физический труд',
            value: 5,
          },
          {
            name: 'Администрирование',
            value: 6,
          },
        ],
      },
    ];
  }

  render() {
    const { OffersStore, className } = this.props;
    console.log(OffersStore);
    return styled(styles)(
      <content className={className}>
        <Heading size={'l'} color={'black'}>
          Вакансии
        </Heading>
        <div>
          <Filter list={this.filterList} />
          <OffersList list={OffersStore.offers} />
          {OffersStore.isLoading ? 'Наш робот ищет предложения для вас :)' : null}
        </div>
      </content>,
    );
  }
}

export default Vacancies;
