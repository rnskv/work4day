import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Offers.shadow.css';
import Type from 'prop-types';

import Sidebar from 'src/containers/crm/Sidebar';
import OffersModerationList from 'src/containers/crm/OffersModerationList';

class Offers extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return styled(styles)(
      <content>
        <Sidebar />
        <OffersModerationList />
      </content>,
    );
  }
}

export default Offers;
