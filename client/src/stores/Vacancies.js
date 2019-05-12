import { observable, action, autorun } from 'mobx';

import Api from '../modules/api';

class VacanciesStore {
    @observable isLoading = true;
    @observable list = [];

    @observable lastUpdate = [];

    @observable limit = 10;
    @observable skip = 0;

    constructor() {
        this.loadVacancies().then().catch();
    }

    @action
    loadVacancies = async () => {
        this.isLoading = true;

        const newVacancies = await Api.fetch({
            url: 'http://localhost:800/vacancies',
            urlParams: {
                limit: this.limit,
                skip: this.skip
            }
        });

        this.list = [...this.list, ...newVacancies.body];
        this.isLoading = false;
    };

    @action
    loadMore = async () => {
        this.skip += this.limit;
        await this.loadVacancies();
    }

}

export default new VacanciesStore();