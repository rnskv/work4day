import { observable, action } from 'mobx';
import Offer from './Offer';
import Filter from './Filter';

import { DefaultApi as Api } from '../../modules/api/index';

export default class OfferList {
  @observable offers = [];
  @observable filter = new Filter();

  constructor() {
    this.getOffers();
    window.OffersTest = this;
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
        date: new Date(date).getTime() * 1000,
      });
    });
  }

  @action
  getOffers() {
    this.setOffers([
      {
        isModerated: false,
        date: '1970-01-19T01:57:45.151Z',
        text: 'Нужно спустить металлическую дверь на лифте и погрузить в машину. Сколько будет стоить? Арбеково',
        postId: 202436,
        category: {
          id: 0,
          name: 'Информационные технологии',
        },
        group: {
          photo100: 'https://sun1-24.userapi.com/c627228/v627228137/225d9/-PKgqjgkjeA.jpg?ava=1',
          name: 'Работа на день | Пенза',
          screenName: 'rabota_pnz',
        },
        location: {
          id: 3,
          name: 'Пенза',
        },
      },
      {
        isModerated: false,
        date: '1970-01-19T01:57:45.125Z',
        text:
          'Необходимо починить диван, вылетели пружины. Возможно нужна будет дрель. Оплата 1000р. Писать в л.с. район Пенза 4, где РЦ Шикана',
        postId: 202435,
        category: {
          id: 0,
          name: 'Информационные технологии',
        },
        group: {
          photo100: 'https://sun1-24.userapi.com/c627228/v627228137/225d9/-PKgqjgkjeA.jpg?ava=1',
          name: 'Работа на день | Пенза',
          screenName: 'rabota_pnz',
        },
        location: {
          id: 3,
          name: 'Пенза',
        },
      },
      {
        isModerated: false,
        date: '1970-01-19T01:57:47.100Z',
        text:
          'Бывают моменты отчаяния и мысли о том, как выживать в этом чертовом мире? Хочется стать героем компьютерной игры и взять на танках какую-нибудь маленькую уютную страну? Гоните прочь эти иллюзии. \n \nТруд сделал из обезьяны человека - и нас с вами сделает счастливыми и перспективными членами общества. Наилучшие варианты в столице - на канале “Работа в Москве” http://tele.gg/msk_rabota. \n \nКаждый день множество вакансий – отборных (отобранные нашими редакторами!), проверенных (не пропускаем лохотрон и прочие пирамиды!), свежих (у нас эксклюзивные работодатели!) – ждут вас в любимой ленте Телеграм http://tele.gg/msk_rabota.',
        postId: 626867,
        category: {
          id: 0,
          name: 'Информационные технологии',
        },
        group: {
          photo100: 'https://sun1-18.userapi.com/c849120/v849120385/72e06/D_WUIvfVE8Y.jpg?ava=1',
          name: 'Работа в Москве',
          screenName: 'moscow_rabota',
        },
        location: {
          id: 4,
          name: 'Москва',
        },
      },
      {
        isModerated: false,
        date: '1970-01-19T01:58:56.554Z',
        text:
          'Приму на работу сварщика с опытом . На изготовление металлоконструкций и изделий из металла. график с 8-00 до 18-00 час обед подробнее по тел 89272861581',
        postId: 202687,
        category: {
          id: 0,
          name: 'Информационные технологии',
        },
        group: {
          photo100: 'https://sun1-24.userapi.com/c627228/v627228137/225d9/-PKgqjgkjeA.jpg?ava=1',
          name: 'Работа на день | Пенза',
          screenName: 'rabota_pnz',
        },
        location: {
          id: 3,
          name: 'Пенза',
        },
      },
      {
        isModerated: false,
        date: '1970-01-19T01:58:56.551Z',
        text:
          'На завтра требуется человек в помощь. Копка траншеи. Грунт легкий. Оплата достойная. Звоните 89530271116 а лучше л.с',
        postId: 202686,
        category: {
          id: 0,
          name: 'Информационные технологии',
        },
        group: {
          photo100: 'https://sun1-24.userapi.com/c627228/v627228137/225d9/-PKgqjgkjeA.jpg?ava=1',
          name: 'Работа на день | Пенза',
          screenName: 'rabota_pnz',
        },
        location: {
          id: 3,
          name: 'Пенза',
        },
      },
      {
        isModerated: false,
        date: '1970-01-19T01:59:06.002Z',
        text:
          'Требуются студенты на подработку!🤑 \n \n📌Обязанность: \n- Работа в помещение \n1-1,5 часа в день \n- График свободный(по звонку) \n \n✍🏻Требования: \n- Наличие действующего студенческого билета \n- Активность \n \n🤑Оплата: 800-1500 рублей за выход! \n \n📌Пишите в ЛС https://vk.com/rabotaspbstud01',
        postId: 58976,
        category: {
          id: 0,
          name: 'Информационные технологии',
        },
        group: {
          photo100: 'https://sun1-20.userapi.com/c836230/v836230713/1863b/C_8DaVcRbiA.jpg?ava=1',
          name: 'Работа в СПБ вакансии Питер',
          screenName: 'stpiterjob',
        },
        location: {
          id: 5,
          name: 'Санкт-Петербург',
        },
      },
      {
        isModerated: false,
        date: '1970-01-19T01:59:08.049Z',
        text:
          'На завтра (06.07.) нужна машина (газон, газель). Вывоз кустарника, обпила деревьев, район Барковка. По времени 1.5-2 часа. Бюджет 1500. Грузим сами.',
        postId: 202721,
        category: {
          id: 0,
          name: 'Информационные технологии',
        },
        group: {
          photo100: 'https://sun1-24.userapi.com/c627228/v627228137/225d9/-PKgqjgkjeA.jpg?ava=1',
          name: 'Работа на день | Пенза',
          screenName: 'rabota_pnz',
        },
        location: {
          id: 3,
          name: 'Пенза',
        },
      },
    ]);
  }
}
