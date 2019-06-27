import { observable, action } from 'mobx';
import Offer from './Offer';
import { DefaultApi as Api } from '../../modules/api/index';

export default class OfferList {
  @observable offers = [];

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
      const { title, group, location, text, date } = offer;

      this.addOffer({
        title,
        group,
        location,
        text,
        date,
      });
    });
  }

  @action
  getOffers() {
    this.setOffers([
      {
        title: 'Marketing Video Designer!',
        group: {
          title: 'ООО Плейджендари Ру ',
        },
        location: {
          city: 'Пенза',
          area: 'Ленинский р-н.',
        },
        text:
          'Создание промо-видео для игр и приложений. Монтаж и обработка видео. Участие в обсуждении идей для промо-видео. Владение Adobe After Effects, Premiere Pro, Photoshop. Наличие портфолио motion роликов и готовность выполнить тестовое задание. Хорошее знание композиции, обладание...',
        date: '5 июня',
      },
      {
        title: 'Финансовый директор (оптовая торговля, ВЭД)',
        group: {
          title: 'МАТЕО GROUP',
        },
        location: {
          city: 'Пенза',
          area: 'Железнодарожный р-н.',
        },
        text:
          'Руководство финансово-экономической и бухгалтерской службами. Разработка политик (кредитная, учетная, финансовая, управления ДЗ/КЗ) и процедур. Внедрение систем управленческого учета...\n' +
          'Высшее образование (экономика, финансы). Опыт работы в крупной компании/ холдинге с несколькими юридическими лицами. Опыт построения инвестиционных моделей.',
        date: '17 июня',
      },
    ]);
  }
}
