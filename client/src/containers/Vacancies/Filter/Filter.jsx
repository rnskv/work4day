import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import styled from 'reshadow';
import styles from './Filter.shadow.css';
import Type from 'prop-types';

import Button from 'src/components/common/Button';
import ToggledList from 'src/components/common/ToggledList';

@inject('OffersStore')
class Filter extends Component {
  static propTypes = {
    list: Type.array.isRequired,
  };

  static defaultProps = {};

  constructor() {
    super();
  }

  onFilterItemClick(category, value) {
    const { changeParams } = this.props.OffersStore.filter;
    changeParams(category, value);
  }

  handleButtonClick = async () => {
    const { OffersStore } = this.props;
    await OffersStore.getOffers();
  };

  render() {
    const { list, OffersStore } = this.props;

    return styled(styles)(
      <content>
        <ToggledList
          title={'Фильтр'}
          list={list}
          onElementClick={(category, value) => {
            this.onFilterItemClick(category, value);
          }}
          selectable={true}
        />
        <Button color={'blue'} size={'auto'} onClick={this.handleButtonClick}>
          Применить
        </Button>
      </content>,
    );
  }
}

export default Filter;
