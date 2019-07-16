import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Loader.shadow.css';
import Type from 'prop-types';

import Heading from '../Heading';

class Loader extends Component {
  static propTypes = {
    isLoading: Type.bool.isRequired,
    className: Type.string,
    color: Type.oneOf(['white', 'black']),
  };

  static defaultProps = {
    color: 'white',
  };

  render() {
    const { isLoading, className, color } = this.props;

    return styled(styles)(
      isLoading ? <container use:color={color} className={className} color={'black'} size={'m'} /> : null,
    );
  }
}

export default Loader;
