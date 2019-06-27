import { observable, action } from 'mobx';

export default class Filter {
  @observable params = {
    region: 58,
    profession: 'it',
  };

  @action
  changeParams = (category, property) => {
    this.params[category] = property;
  };
}
