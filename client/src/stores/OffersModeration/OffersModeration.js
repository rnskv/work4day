import { observable, action } from 'mobx';

import { DefaultApi } from 'src/modules/api/index';

import CategoriesList from './CategoriesList';
import CitiesList from './CitiesList';
import OffersList from './OffersList';

class OffersModeration {
  @observable categories = new CategoriesList();
  @observable cities = new CitiesList();
  @observable offers = new OffersList();
}

export default OffersModeration;
