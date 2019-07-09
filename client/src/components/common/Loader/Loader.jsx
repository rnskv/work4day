import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Loader.shadow.css';
import Type from 'prop-types';

import Heading from '../Heading';

class Loader extends Component {
  static propTypes = {
    isLoading: Type.bool.isRequired,
    className: Type.string,
  };

  render() {
    const { isLoading, className } = this.props;

    return styled(styles)(
      isLoading ? (
        <Heading className={className} color={'black'} size={'m'}>
          Loading...
        </Heading>
      ) : null,
    );
  }
}

export default Loader;
