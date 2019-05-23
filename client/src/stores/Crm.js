import { observable, action, autorun } from 'mobx';

import { DefaultApi as Api } from '../modules/api';

class Vacancies {
    @observable
    list = [];
    @observable
    isLoading = true;

    @action
    async load() {
        this.isLoading = true;

        const newVacancies = await Api.fetch({
            url: '/vacancies',
            urlParams: {
                isModerated: 0,
                limit: 10
            }
        });

        this.list = [...this.list, ...newVacancies.body];
        this.isLoading = false;
    }

    @action
    reload = async () => {
        this.list = [];
        await this.load();
    };

    @action
    remove = (id) => async () => {
        const response = await Api.fetch({
            url: '/vacancies/' + id,
            method: 'DELETE'
        });
    };

    @action
    moderate = async (data) => {
        const { whoNeed, whyNeed, text, categoryId, salary, isModerated, description, title, id } = data;
        console.log(this.list, data.id)
        await Api.fetch({
            url: `/vacancies/${id}`,
            method: 'PATCH',
            params: {set: {whoNeed, whyNeed, text, categoryId, salary, isModerated, description, title}}
        }).then(this.reload);
    };
}

class VacanciesStore {
    @observable
    vacancies = new Vacancies();

    constructor() {
        this.vacancies.load().then().catch();
    }

}

export default new VacanciesStore();