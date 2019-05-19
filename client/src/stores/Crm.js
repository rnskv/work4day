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
            url: 'http://localhost:8000/vacancies',
            urlParams: {
                isModerated: 0,
                limit: 10
            }
        });

        this.list = [...this.list, ...newVacancies.body];
        this.isLoading = false;
    }

    @action
    remove = (id) => async () => {
        const response = await Api.fetch({
            url: 'http://localhost:8000/vacancies/' + id,
            method: 'DELETE'
        });
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