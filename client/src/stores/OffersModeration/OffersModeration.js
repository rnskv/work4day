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

  @action
  accept = async data => {
    const { _id, title } = data;
    confirm('Вы уверены?');
    const response = await Api.fetch({
      url: `/offers/${_id}`,
      method: 'PATCH',
      params: { set: { title, isModerated: true } },
    });
    alert('Промодерировано');
    console.log(response);
    await this.offers.getList();
  };

  cancel() {}
}

export default OffersModeration;
