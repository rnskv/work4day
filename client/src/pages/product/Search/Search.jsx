import React, { Component } from 'react';

import styled from 'reshadow';
import styles from './Search.shadow.css';
import Type from 'prop-types';

import Heading from 'src/components/common/Heading';
import ToggledList from 'src/components/common/ToggledList';

import Vacancies from 'src/containers/product/Vacancies';

class Search extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return styled(styles)(
      <content>
        <Vacancies />
      </content>,
    );
  }
}

export default Search;
