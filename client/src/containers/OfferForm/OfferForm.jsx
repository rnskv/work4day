import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './OfferForm.shadow.css';
import { observer, inject } from 'mobx-react';

import Type from 'prop-types';

import Heading from 'src/components/common/Heading';
import Input from 'src/components/common/Input';
import TextArea from 'src/components/common/TextArea';
import Button from 'src/components/common/Button';
import Image from 'src/components/common/Image';
import Form from 'src/components/common/Form';
import Select from 'src/components/common/Select';

// @observable title;
// @observable group;
// @observable location;
// @observable text;
// @observable time;

@inject('OffersStore')
@observer
class OfferForm extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor() {
    super();

    this.groupImageSrcInput = this.refs['GroupImageSrc'];
    this.state = {
      groupImageSrc: '',
    };
  }

  componentWillMount() {
    this.setDefaultGroupImageSrc();
  }

  setDefaultGroupImageSrc = () => {
    this.setState({
      groupImageSrc: 'https://vk.com/images/camera_100.png?ava=1',
    });
  };

  changeGroupImageSrc = e => {
    this.setState({
      groupImageSrc: e.currentTarget.value,
    });
  };

  onLoadErrorGroupImage = e => {
    this.setDefaultGroupImageSrc();
  };

  handleOfferButtonClick = e => {
    // e.preventDefault();
    // debugger;
  };

  render() {
    const { className, OffersStore } = this.props;
    const { groupImageSrc } = this.state;
    return styled(styles)(
      <content className={className}>
        <Heading isBold={true} color={'black'} size={'l'}>
          Создание оффера
        </Heading>

        <Form>
          <Heading color={'black'} size={'xs'}>
            Текст
          </Heading>
          <TextArea validations={['required']} size={'xl'} />

          <Heading color={'black'} size={'xs'}>
            Заголовок
          </Heading>
          <Input validations={['required']} size={'xl'} />

          <Heading color={'black'} size={'xs'}>
            ID Поста на стене ВКонтакте
          </Heading>
          <Input validations={['required']} size={'xl'} />

          <Heading color={'black'} size={'xs'}>
            Категория
          </Heading>

          <Select
            id={'categorySelect'}
            options={[
              {
                value: 1,
                text: 'First option',
              },
              {
                value: 2,
                text: 'Second option',
              },
              {
                value: 3,
                text: 'Third option',
              },
            ]}
            size={'xl'}
          />

          <Button type="submit" size={'m'} onClick={this.handleOfferButtonClick}>
            Создать оффер
          </Button>
        </Form>
      </content>,
    );
  }
}

export default OfferForm;
