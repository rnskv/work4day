import { observable, action } from 'mobx';
import Filter from './Filter';

import { DefaultApi } from '../../modules/api/index';

export default class OfferList {
  @observable offers = [];
  @observable filter = new Filter();
  @observable isLoading = true;
  @observable errors = [];

  constructor() {
    this.getOffers();
  }

  @action
  addOffer(offer) {
    this.offers = [...this.offers, offer];
  }

  @action
  setOffers(offers) {
    this.offers = [];
    offers.forEach(offer => {
      this.addOffer(offer);
    });

    this.isLoading = false;
  }

  @action
  async getOffers() {
    console.log(this.filter.params);
    const offersData = await DefaultApi.fetch({
      url: '/offers',
      urlParams: {
        isModerated: 0,
        ...this.filter.params,
      },
    });

    this.setOffers(offersData.body);
  }
}
