import { observable } from 'mobx';

export default class Offer {
  @observable title;
  @observable group;
  @observable location;
  @observable text;
  @observable date;

  constructor({ title, group, location, text, date }) {
    this.title = title;
    this.group = group;
    this.location = location;
    this.text = text;
    this.date = date;
  }
}
