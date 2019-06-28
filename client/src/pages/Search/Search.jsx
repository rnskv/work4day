import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Search.shadow.css';
import Type from 'prop-types';

import Heading from 'src/components/common/Heading';
import ToggledList from 'src/components/common/ToggledList';

import Vacancies from 'src/containers/Vacancies';

class Search extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return styled(styles)(
      <content>
        Search Page
        <Vacancies />
      </content>,
    );
  }
}

export default Search;
