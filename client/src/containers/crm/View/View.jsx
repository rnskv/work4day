import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './View.shadow.css';
import { observer, inject } from 'mobx-react';
import RouterView from 'src/modules/router';
import OffersModerationList from 'src/containers/crm/OffersModerationList';

import Type from 'prop-types';

class View extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super();
  }

  render() {
    const { OffersStore, className } = this.props;

    const routes = {
      '/crm/offers': { component: OffersModerationList },
    };

    return styled(styles)(
      <content className={className}>
        CRM
        <RouterView routes={routes} />
      </content>,
    );
  }
}

export default View;
