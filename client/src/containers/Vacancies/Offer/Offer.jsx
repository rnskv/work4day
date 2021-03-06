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

  openPostInSocialNetwork = () => {
    const { data } = this.props;
    window.open(`https://vk.com/${data.group.screenName}?w=wall-${data.group.id}_${data.postId}`);
  };

  render() {
    const { data } = this.props;

    return styled(styles)(
      <content>
        <Image src={data.group.photo100} width={55} height={55} alt={'Group`s logo'} />
        <ComponentsGroup type={'header'}>
          <Heading hasMargin={false} size={'m'} color={'black'}>
            {data.title || 'Не промодерирован'}
          </Heading>
          <Description color={'grey'} size={'m'}>
            {data.group.name}
          </Description>
          <Description color={'grey'} size={'m'}>
            {data.location.name || 'undefined'}
          </Description>
        </ComponentsGroup>
        <p>{data.text}</p>
        <ComponentsGroup type={'buttons'}>
          <Button style={'link'} size={'m'} onClick={this.openPostInSocialNetwork}>
            Перейти к посту
          </Button>
          <Button style={'link'} size={'m'} disabled={true}>
            Сообщить об ошибке
          </Button>
        </ComponentsGroup>
        <Date date={data.date} format={'dd.mm.yy, HH:MM'} />
      </content>,
    );
  }
}

export default Offer;
