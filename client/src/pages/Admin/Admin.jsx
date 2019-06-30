import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Admin.shadow.css';
import Type from 'prop-types';

import Heading from 'src/components/common/Heading';
import ToggledList from 'src/components/common/ToggledList';

import Vacancies from 'src/containers/Vacancies';
import OfferForm from 'src/containers/OfferForm';

class Admin extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return styled(styles)(
      <content>
        Admin Page
        <OfferForm />
      </content>,
    );
  }
}

export default Admin;
