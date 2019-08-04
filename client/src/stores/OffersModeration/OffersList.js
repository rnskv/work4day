import { observable, action } from 'mobx';

import { DefaultApi } from 'src/modules/api/index';

class OffersList {
  @observable list = [];
  @observable isLoading = true;

  @action
  async getList() {
    this.isLoading = true;

    this.list = [];

    const categoriesData = await DefaultApi.fetch({
      url: '/offers',
      urlParams: {
        isModerated: false,
      },
    });

    this.list = [...categoriesData.body];

    console.log('ready get list', this.list);

    this.isLoading = false;
  }
}

export default OffersList;
