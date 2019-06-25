import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Filter.shadow.css';
import Type from 'prop-types';

import Button from 'src/components/common/Button';
import ToggledList from 'src/components/common/ToggledList';

class Filter extends Component {
  static propTypes = {
    list: Type.array.isRequired,
  };

  static defaultProps = {};

  constructor() {
    super();
  }

  render() {
    const { list } = this.props;

    return styled(styles)(
      <content>
        <ToggledList
          title={'Фильтр'}
          list={list}
          onElementClick={(category, value) => {
            console.log('В категории ', category, 'выбрано свойство ', value);
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
