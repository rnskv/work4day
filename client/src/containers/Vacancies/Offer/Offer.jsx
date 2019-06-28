import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './Offer.shadow.css';
import Type from 'prop-types';

import Heading from 'src/components/common/Heading';
import Description from 'src/components/common/Description';
import Button from 'src/components/common/Button';
import Date from 'src/components/common/Date';
import ComponentsGroup from 'src/components/common/ComponentsGroup';
import Image from 'src/components/common/Image';

class Offer extends Component {
  static propTypes = {
    data: Type.object.isRequired,
  };

  static defaultProps = {};

  constructor() {
    super();
  }

  render() {
    const { data } = this.props;

    return styled(styles)(
      <content>
        <Image src={data.group.image} width={55} height={55} alt={'Group`s logo'} />
        <ComponentsGroup type={'header'}>
          <Heading hasMargin={false} size={'m'} color={'black'}>
            {data.title}
          </Heading>
          <Description color={'grey'} size={'m'}>
            {data.group.title}
          </Description>
          <Description color={'grey'} size={'m'}>
            {data.location.city}
          </Description>
        </ComponentsGroup>
        <p>{data.text}</p>
        <ComponentsGroup type={'buttons'}>
          <Button style={'link'} size={'m'}>
            Откликнуться
          </Button>
          <Button style={'link'} size={'m'}>
            Показать контакты
          </Button>
        </ComponentsGroup>
        <Date time={data.time} format={'dd.mm.yy, HH:MM'} />
      </content>,
    );
  }
}

export default Offer;
