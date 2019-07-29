import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './View.shadow.css';
import { observer, inject } from 'mobx-react';
import RouterView from 'src/modules/router';

import Sidebar from 'src/containers/crm/Sidebar';
import OffersModerationList from 'src/containers/crm/OffersModerationList';

import Type from 'prop-types';
import ComponentsGroup from 'src/components/common/ComponentsGroup';

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
        <h3>CRM HEADER</h3>
        <Sidebar />
        <ComponentsGroup type={'content'}>
          <RouterView routes={routes} />
        </ComponentsGroup>
      </content>,
    );
  }
}

export default View;
