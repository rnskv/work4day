import { observable, action, autorun } from 'mobx';

import Api from '../modules/api';


class Vacancies {
    @observable isLoading = true;
    @observable limit = 10;
    @observable skip = 0;
    @observable list = [];

    @action
    load = async (params = {}) => {
        const { isAppend = true } = params;
        this.isLoading = true;

        const response = await Api.fetch({
            url: 'http://localhost:800/vacancies',
            urlParams: {
                limit: this.limit,
                skip: this.skip
            }
        });

        this.list = isAppend ? [...this.list, ...response.body] : response.body;
        this.isLoading = false;
    };

    @action
    next = async () => {
        this.skip += this.limit;
        await this.load();
    }
}

class NewVacancies extends Vacancies {
    constructor() {
        super();
        this.limit = 3;
    }
    @action
    next = async () => {
        this.skip += this.limit;
        await this.load({ isAppend: false });
    }
}

class FilteredVacancies extends Vacancies {
    constructor() {
        super();
        this.skip = 3;
    }
}

class VacanciesStore {
    @observable
    newVacancies = new NewVacancies();
    filteredVacancies = new FilteredVacancies();
    constructor() {
        this.newVacancies.load().then().catch();
        this.filteredVacancies.load().then().catch();
    }
}

export default new VacanciesStore();