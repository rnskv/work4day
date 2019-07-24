import { observable, action } from 'mobx';
import Filter from './Filter';

import { DefaultApi } from 'src/modules/api/index';

export default class OfferList {
  @observable offers = [];
  @observable filter = new Filter();
  @observable isLoading = true;
  @observable errors = [];
  @observable isLoadAll = true;

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
  async getOffers(addToCurrent = false) {
    this.isLoading = true;
    const offersData = await DefaultApi.fetch({
      url: '/offers',
      urlParams: {
        ...this.filter.params,
      },
    });

    const { params } = this.filter;
    const isLast = params.skip + params.limit >= offersData.meta.count;

    this.isLoadAll = isLast;

    if (!addToCurrent) {
      this.setOffers(offersData.body);
      this.filter.resetOffsetParams();
    } else {
      this.addOffers(offersData.body);

      this.filter.changeParams('skip', isLast ? 0 : params.skip + params.limit);
    }
  }
}
