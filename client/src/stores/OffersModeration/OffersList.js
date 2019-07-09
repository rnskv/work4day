import { observable, action } from 'mobx';

import { DefaultApi } from 'src/modules/api/index';

class OffersList {
  @observable list = [];
  @observable isLoading = true;

  constructor() {
    this.getList();
    console.log(123);
  }

  async getList() {
    const categoriesData = await DefaultApi.fetch({
      url: '/offers',
    });

    this.list = [...categoriesData.body];
    this.isLoading = false;
    console.log(this.list);
  }
}

export default OffersList;
