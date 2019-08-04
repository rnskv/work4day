import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './OfferList.shadow.css';
import Type from 'prop-types';

import Offer from '../Offer/Offer.jsx';

class OffersList extends Component {
  static propTypes = {
    list: Type.array.isRequired,
    isLoading: Type.bool.isRequired,
  };

  static defaultProps = {};

  constructor() {
    super();
  }

  render() {
    const { list, isLoading } = this.props;

    return styled(styles)(
      <content>
        {!list.length && !isLoading
          ? 'Ничего не найдено'
          : list.map((offer, index) => {
              return <Offer key={`offer_${index}`} data={offer} />;
            })}
      </content>,
    );
  }
}

export default OffersList;
