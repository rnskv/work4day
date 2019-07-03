import React, { Component } from 'react';
import styled from 'reshadow';
import styles from './OfferForm.shadow.css';
import { observer, inject } from 'mobx-react';

import Type from 'prop-types';

import Heading from 'src/components/common/Heading';
import Input from 'src/components/common/Input';
import TextArea from 'src/components/common/TextArea';
import Button from 'src/components/common/TextArea';
import Image from 'src/components/common/Image';

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

  render() {
    const { className, OffersStore } = this.props;
    const { groupImageSrc } = this.state;
    return styled(styles)(
      <content className={className}>
        <Heading isBold={true} color={'black'} size={'l'}>
          Создание оффера
        </Heading>

        <form>
          <Heading isBold={true} color={'black'} size={'m'}>
            Основная информция
          </Heading>
          <table>
            <tbody>
              <tr>
                <td>Заголовок*</td>
                <td>
                  <Input validations={['required']} size={'xl'} />
                </td>
              </tr>
              <tr>
                <td>Месторасположение*</td>
                <td>
                  <Input size={'xl'} />
                </td>
              </tr>
              <tr>
                <td>Текст предложения*</td>
                <td>
                  <TextArea size={'xl'} />
                </td>
              </tr>
            </tbody>
          </table>
          <Heading isBold={true} color={'black'} size={'m'}>
            Информация о группе
          </Heading>
          <table>
            <tbody>
              <tr>
                <td>Название*</td>
                <td>
                  <Input size={'xl'} />
                </td>
              </tr>
              <tr>
                <td>Изображение</td>
                <td>
                  <Input
                    ref={'GroupImageSrc'}
                    size={'xl'}
                    onChange={this.changeGroupImageSrc}
                    icon={
                      <Image
                        src={groupImageSrc}
                        alt={'Group image'}
                        height={'auto'}
                        onError={this.onLoadErrorGroupImage}
                      />
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </content>,
    );
  }
}

export default OfferForm;
