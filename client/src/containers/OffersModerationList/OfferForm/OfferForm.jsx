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

@inject('OffersModerationStore')
@observer
class OfferForm extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor() {
    super();

    this.titleRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.titleRef.current.value, 'TITLE__REF');
  }

  getCategoriesOptionsList() {
    const { OffersModerationStore } = this.props;
    const optionList = OffersModerationStore.categories.list;

    return optionList.map(option => ({
      value: option.id,
      text: option.name,
    }));
  }

  handleOfferButtonClick = e => {
    // e.preventDefault();
    const { OffersModerationStore, data } = this.props;
    console.log(data);
    OffersModerationStore.accept({
      _id: data._id,
      title: this.titleRef.current.value,
    });
    console.log(this.titleRef.current.value, 'TITLE__REF');

    // debugger;
  };

  render() {
    const { className, data, OffersStore } = this.props;

    return styled(styles)(
      <content className={className}>
        <Heading isBold={true} color={'black'} size={'l'}>
          Модерация оффера
        </Heading>

        <Form>
          <Heading size={'xs'}>Текст</Heading>
          <TextArea validations={['required']} size={'xl'}>
            {data.text}
          </TextArea>

          <Heading size={'xs'}>Заголовок</Heading>
          <Input
            ref={this.titleRef}
            value={data.title || ''}
            placeholder={'Введите название'}
            validations={['required']}
            size={'xl'}
          />

          <Heading size={'xs'}>ID Поста на стене ВКонтакте</Heading>
          <Input value={data.postId || 'Нет id'} validations={['required']} size={'xl'} />

          <Heading color={'black'} size={'xs'}>
            Категория
          </Heading>

          <Select id={'categorySelect'} options={this.getCategoriesOptionsList()} size={'xl'} />

          <Button type="submit" size={'m'} onClick={this.handleOfferButtonClick}>
            Модерировать
          </Button>
        </Form>
      </content>,
    );
  }
}

export default OfferForm;
