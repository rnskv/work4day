import { observable, action } from 'mobx';

export default class Filter {
  @observable params = {
    cityId: 4,
    categoryId: null,
  };

  @action
  changeParams = (category, property) => {
    this.params[category] = property;
  };
}
