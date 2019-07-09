import { observable, action } from 'mobx';

export default class Filter {
  @observable params = {
    cityId: null,
    categoryId: null,
    skip: 0,
    limit: 10,
  };

  @action
  changeParams = (category, property) => {
    this.params[category] = property;
  };
}
