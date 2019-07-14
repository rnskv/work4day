import { observable, action } from 'mobx';

import { DefaultApi } from 'src/modules/api/index';

class CategoriesList {
  @observable list = [];
  @observable isLoading = true;

  constructor() {
    this.getList();
  }

  async getList() {
    const categoriesData = await DefaultApi.fetch({
      url: '/category',
    });

    this.list = [...categoriesData.body];
    this.isLoading = false;
  }
}

export default CategoriesList;
