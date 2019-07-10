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

  constructor() {}

  @action
  async accept(data) {
    const { _id, title } = data;
    const response = await Api.fetch({
      url: `/offers/${_id}`,
      method: 'PATCH',
      params: { set: { title, isModerated: true } },
    });

    console.log(response);
  }

  cancel() {}
}

export default OffersModeration;
