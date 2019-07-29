import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Sidebar.shadow.css';
import { observer, inject } from 'mobx-react';

import Type from 'prop-types';

class Sidebar extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super();
  }

  render() {
    const { OffersStore, className } = this.props;

    return styled(styles)(<content className={className}>Sidebar</content>);
  }
}

export default Sidebar;
