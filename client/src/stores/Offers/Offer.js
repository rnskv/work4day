import { observable } from 'mobx';

export default class Offer {
  @observable title;
  @observable group;
  @observable location;
  @observable text;
  @observable time;

  constructor({ title, group, location, text, time }) {
    this.title = title;
    this.group = group;
    this.location = location;
    this.text = text;
    this.time = time;
  }
}
