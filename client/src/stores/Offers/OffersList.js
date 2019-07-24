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
  async getOffers(addToCurrent = false) {
    this.isLoading = true;
    const offersData = await DefaultApi.fetch({
      url: '/offers',
      urlParams: {
        ...this.filter.params,
      },
    });

    if (!addToCurrent) {
      this.setOffers(offersData.body);
      this.filter.resetOffsetParams();
    } else {
      const { params } = this.filter;

      const isLast = params.skip + params.limit >= offersData.meta.count;

      console.log(isLast, params.skip, params.limit, offersData);

      this.addOffers(offersData.body);

      const newSkipValue = !isLast ? params.skip + params.limit : 0;
      this.filter.changeParams('skip', newSkipValue);
    }
  }
}
