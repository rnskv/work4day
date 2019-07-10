import { observable, action } from 'mobx';
import { DefaultApi } from '../../modules/api/index';

export default class Filter {
  @observable list = [];

  @observable params = {
    cityId: null,
    categoryId: null,
    skip: 0,
    limit: 10,
    isModerated: true,
  };

  constructor() {
    this.generateFilterList();
  }

  async generateFilterList() {
    // @todo Переписать на Promise then all
    const categoriesList = await DefaultApi.fetch({
      url: '/category',
    });

    const citiesList = await DefaultApi.fetch({
      url: '/city',
    });

    this.list = [
      {
        name: 'Регион',
        category: 'cityId',
        list: citiesList.body.map(obj => ({
          value: obj.id,
          name: obj.name,
        })),
      },
      {
        name: 'Категория',
        category: 'categoryId',
        list: categoriesList.body.map(obj => ({
          value: obj.id,
          name: obj.name,
        })),
      },
    ];
  }

  @action
  changeParams = (category, property) => {
    this.params[category] = property;
  };
}
