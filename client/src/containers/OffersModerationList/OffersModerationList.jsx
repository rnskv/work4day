import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './OffersModerationList.shadow.css';
import { observer, inject } from 'mobx-react';

import Type from 'prop-types';

import Heading from 'src/components/common/Heading';
import Input from 'src/components/common/Input';
import TextArea from 'src/components/common/TextArea';
import Button from 'src/components/common/Button';
import Image from 'src/components/common/Image';
import Form from 'src/components/common/Form';
import Select from 'src/components/common/Select';

import OfferForm from './OfferForm';

@inject('OffersModerationStore')
@observer
class OffersModerationList extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor() {
    super();
  }

  render() {
    const { OffersModerationStore } = this.props;
    return styled(styles)(
      <content>
        {OffersModerationStore.offers.list.map((offer, index) => {
          return <OfferForm key={`moder_post_${index}`} data={offer} />;
        })}
      </content>,
    );
  }
}

export default OffersModerationList;
