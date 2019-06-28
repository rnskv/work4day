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
    console.log(this.props);
    const { changeParams } = this.props.OffersStore.filter;
    changeParams(category, value);
  }

  render() {
    const { list, OffersStore } = this.props;

    return styled(styles)(
      <content>
        <ToggledList
          title={'Фильтр'}
          list={list}
          onElementClick={(category, value) => {
            console.log('В категории ', category, 'выбрано свойство ', value);
            this.onFilterItemClick(category, value);
          }}
          selectable={true}
        />
        <Button color={'blue'} size={'auto'}>
          Применить
        </Button>
      </content>,
    );
  }
}

export default Filter;
