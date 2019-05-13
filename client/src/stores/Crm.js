import { observable, action, autorun } from 'mobx';

import Api from '../modules/api';

class Vacancies {
    @observable
    list = [];
    @observable
    isLoading = true;

    @action
    async load() {
        this.isLoading = true;

        const newVacancies = await Api.fetch({
            url: 'http://localhost:800/vacancies',
            urlParams: {
                isModerated: false,
                limit: 10
            }
        });

        this.list = [...this.list, ...newVacancies.body];
        this.isLoading = false;
    }
}

class VacanciesStore {
    @observable
    vacancies = new Vacancies();

    constructor() {
        this.vacancies.load().then().catch();
    }

}

export default new VacanciesStore();