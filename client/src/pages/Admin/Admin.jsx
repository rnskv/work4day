import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Admin.shadow.css';
import Type from 'prop-types';

import Heading from 'src/components/common/Heading';
import ToggledList from 'src/components/common/ToggledList';

import Vacancies from 'src/containers/Vacancies';
import OffersModerationList from 'src/containers/OffersModerationList';

class Admin extends Component {
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

export default Admin;
