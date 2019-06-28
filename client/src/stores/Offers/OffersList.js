import { observable, action } from 'mobx';
import Offer from './Offer';
import Filter from './Filter';

import { DefaultApi as Api } from '../../modules/api/index';

export default class OfferList {
  @observable offers = [];
  @observable filter = new Filter();

  constructor() {
    this.getOffers();
  }

  @action
  addOffer(params) {
    this.offers.push(new Offer(params));
  }

  @action
  setOffers(offers) {
    offers.forEach(offer => {
      const { title, group, location, text, time } = offer;

      this.addOffer({
        title,
        group,
        location,
        text,
        time,
      });
    });
  }

  @action
  getOffers() {
    this.setOffers([
      {
        title: 'Требуется несколько разнорабочих',
        group: {
          title: 'Работа на день | Пенза',
          image: 'https://sun1-29.userapi.com/c837723/v837723961/4136/kiF3y8paj3o.jpg?ava=1',
        },
        location: {
          city: 'Пенза',
        },
        text:
          'На субботу 29.06.2019 требуется несколько разнорабочих для уборки участка от веток. Нужно собирать и складировать ветки в кучу. Рабочий день с 8:00 до 17:00. Обьект в Ахунах. Оплата 1000 руб. каждому. Кому интересно пишите в личку...',
        time: 1561656865139,
      },
      {
        title: 'Marketing Video Designer!',
        group: {
          title: 'ООО Плейджендари Ру ',
          image: 'https://sun1-25.userapi.com/c834100/v834100233/bfbd/vR5BRHx_bV8.jpg?ava=1',
        },
        location: {
          city: 'Пенза',
        },
        text:
          'Создание промо-видео для игр и приложений. Монтаж и обработка видео. Участие в обсуждении идей для промо-видео. Владение Adobe After Effects, Premiere Pro, Photoshop. Наличие портфолио motion роликов и готовность выполнить тестовое задание. Хорошее знание композиции, обладание...',
        time: 1561656865139,
      },
      {
        title: 'Финансовый директор (оптовая торговля, ВЭД)',
        group: {
          title: 'МАТЕО GROUP',
          image: 'https://sun1-18.userapi.com/c627228/v627228137/225da/DSFKCKLuzEQ.jpg?ava=1',
        },
        location: {
          city: 'Пенза',
        },
        text:
          'Руководство финансово-экономической и бухгалтерской службами. Разработка политик (кредитная, учетная, финансовая, управления ДЗ/КЗ) и процедур. Внедрение систем управленческого учета...\n' +
          'Высшее образование (экономика, финансы). Опыт работы в крупной компании/ холдинге с несколькими юридическими лицами. Опыт построения инвестиционных моделей.',
        time: 1561656865139,
      },
    ]);
  }
}
