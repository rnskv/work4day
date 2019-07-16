import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Vacancies.shadow.css';
import { observer, inject } from 'mobx-react';

import Type from 'prop-types';

import Heading from 'src/components/common/Heading';
import ToggledList from 'src/components/common/ToggledList';
import Button from 'src/components/common/Button';
import Loader from 'src/components/common/Loader';

import OffersList from './OffersList';
import Filter from './Filter';

@inject('OffersStore')
@observer
class Vacancies extends Component {
  static propTypes = {};

  static defaultProps = {};

  handleLoadButtonClick = async () => {
    const { OffersStore } = this.props;
    await OffersStore.getOffers(true);
  };

  constructor(props) {
    super();
  }

  render() {
    /* @todo Переделать этот ужас */

    const { OffersStore, className } = this.props;

    return styled(styles)(
      <content className={className}>
        <Heading size={'l'} color={'black'}>
          Вакансии
        </Heading>
        <div>
          <Filter list={OffersStore.filter.list} />
          <block>
            <OffersList isLoading={OffersStore.isLoading} list={OffersStore.offers} />

            <Button
              isLoading={OffersStore.isLoading}
              interactive={!OffersStore.isLoading}
              size={'m'}
              onClick={this.handleLoadButtonClick}>
              Загрузить ещё
            </Button>
          </block>
        </div>
      </content>,
    );
  }
}

export default Vacancies;
