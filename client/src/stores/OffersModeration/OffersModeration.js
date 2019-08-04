import { observable, action } from 'mobx';

import { DefaultApi } from 'src/modules/api/index';

import CategoriesList from './CategoriesList';
import CitiesList from './CitiesList';
import OffersList from './OffersList';
import { DefaultApi as Api } from 'src/modules/api';
import { GlobalError } from 'src/modules/errors';
console.log('x3', GlobalError);

class OffersModeration {
  @observable categories = new CategoriesList();
  @observable cities = new CitiesList();
  @observable offers = new OffersList();

  constructor() {
    this.offers.getList();
  }
  handleSuccessModerate = () => {
    alert('Промодерировано');
    this.offers.getList();
  };

  handleErrorModerate = err => {
    // console.error(err.message);
    // alert('Ошибка');
  };

  @action
  accept = async data => {
    const { _id, ...params } = data;
    confirm('Вы уверены?');
    const requestParams = {
      url: `/offers/${_id}`,
      method: 'PATCH',
      params: { set: { ...params, isModerated: true } },
    };

    await Api.fetch(requestParams)
      .then(this.handleSuccessModerate)
      .catch(this.handleErrorModerate);
  };

  cancel = async data => {
    const { _id } = data;
    confirm('Вы уверены?');
    const requestParams = {
      url: `/offers/${_id}`,
      method: 'DELETE',
      params: { _id },
    };

    await Api.fetch(requestParams)
      .then(this.handleSuccessModerate)
      .catch(this.handleErrorModerate);
  };
}

export default OffersModeration;
