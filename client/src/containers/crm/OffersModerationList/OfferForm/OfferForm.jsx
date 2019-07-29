import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './OfferForm.shadow.css';
import { observer, inject } from 'mobx-react/index';

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
    this.categoryRef = React.createRef();
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

  handleSubmitForm = e => {
    const { OffersModerationStore, data } = this.props;
    console.log(data);
    OffersModerationStore.accept({
      _id: data._id,
      title: this.titleRef.current.value,
      categoryId: this.categoryRef.current.value,
    });
    console.log(this.titleRef.current.value, 'TITLE__REF');
  };

  render() {
    const { className, data, OffersStore } = this.props;

    return styled(styles)(
      <content className={className}>
        <Heading isBold={true} color={'black'} size={'l'}>
          Модерация оффера
        </Heading>

        <Form onSubmit={this.handleSubmitForm}>
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

          <Select
            ref={this.categoryRef}
            validations={['required']}
            options={this.getCategoriesOptionsList()}
            text=""
            size={'b'}
          />

          <Button type="submit" size={'m'}>
            Модерировать
          </Button>
        </Form>
      </content>,
    );
  }
}

export default OfferForm;
