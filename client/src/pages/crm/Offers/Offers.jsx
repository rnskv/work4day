import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Offers.shadow.css';
import Type from 'prop-types';

import Heading from 'src/components/common/Heading';
import ToggledList from 'src/components/common/ToggledList';

import Vacancies from 'src/containers/Vacancies';
import OffersModerationList from 'src/containers/OffersModerationList';

class Offers extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return styled(styles)(
      <content>
        Admin Page
        <OffersModerationList />
      </content>,
    );
  }
}

export default Offers;
