import { observable, action } from 'mobx';
import Filter from './Filter';

import { DefaultApi } from 'src/modules/api/index';

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

  setOffers(offers) {
    this.offers = [];
    offers.forEach(offer => {
      this.addOffer(offer);
    });

    this.isLoading = false;
  }

  addOffers(offers) {
    offers.forEach(offer => {
      this.addOffer(offer);
    });

    this.isLoading = false;
  }

  @action
  async getOffers(isAddToCurrent = false) {
    this.isLoading = true;
    const offersData = await DefaultApi.fetch({
      url: '/offers',
      urlParams: {
        isModerated: 0,
        ...this.filter.params,
      },
    });

    if (!isAddToCurrent) {
      this.setOffers(offersData.body);
    } else {
      this.addOffers(offersData.body);
    }
  }
}
