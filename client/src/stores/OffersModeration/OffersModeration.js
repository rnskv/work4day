import { observable, action } from 'mobx';

import { DefaultApi } from 'src/modules/api/index';

import CategoriesList from './CategoriesList';
import CitiesList from './CitiesList';
import OffersList from './OffersList';
import { DefaultApi as Api } from '../../modules/api';

class OffersModeration {
  @observable categories = new CategoriesList();
  @observable cities = new CitiesList();
  @observable offers = new OffersList();

  constructor() {
    this.offers.getList();
  }
  handleSuccessAccept = () => {
    alert('Промодерировано');
    this.offers.getList();
  };

  handleErrorAccept = err => {
    console.error(err);
    alert('Ошибка');
  };

  @action
  accept = async data => {
    const { _id, title, categoryId } = data;
    confirm('Вы уверены?');
    const requestParams = {
      url: `/offers/${_id}`,
      method: 'PATCH',
      params: { set: { categoryId, title, isModerated: true } },
      successCb: this.handleSuccessAccept,
      errorCb: this.handleErrorAccept,
    };

    await Api.fetch(requestParams)
      .then(this.handleSuccessAccept)
      .catch(this.handleErrorAccept);
  };

  cancel() {}
}

export default OffersModeration;
