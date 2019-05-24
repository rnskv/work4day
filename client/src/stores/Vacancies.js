import { observable, action, autorun } from 'mobx';

import { DefaultApi as Api } from '../modules/api';

import FilterStore from './Filter';

class Vacancies {
    @observable isLoading = true;
    @observable limit = 10;
    @observable skip = 0;
    @observable list = [];
    @observable isLoadAll = false;
    constructor(defaultParams) {
        ({ limit: this.limit = 10, skip: this.skip = 0, isAppend: this.isAppend = true} = defaultParams);
    }

    @action
    load = async (params = {}) => {
        this.isLoading = true;

        const response = await Api.fetch({
            url: '/vacancies',
            urlParams: {
                limit: this.limit,
                skip: this.skip
            }
        });

        this.list = this.isAppend ? [...this.list, ...response.body] : response.body;

        this.isLoading = false;

        return  response.body.length;
    };
    
    @action
    next = async (params = {}) => {
        const loadLength = await this.load(params);
        this.skip += this.limit;
        if (loadLength === 0) {
            this.isLoadAll = true;
        }
    };
}

class NewVacancies extends Vacancies {
    @action
    next = async (params = {}) => {
        console.log('next')

        let loadLength = await this.load(params);

        if (loadLength < this.limit) {
            this.skip = 0;
        } else {
            this.skip += this.limit;
        }

        if (loadLength === 0) {
            this.skip = 0;
            await this.next();
        }
    };
}

class FilteredVacancies extends Vacancies {

    constructor(defaultParams) {
        super(defaultParams);
    }

    @action
    load = async () => {
        this.isLoading = true;
        const response = await Api.fetch({
            url: '/vacancies',
            urlParams: {
                limit: this.limit,
                skip: this.skip,
                categories: FilterStore.filteredCategories.join(',')
            }
        });

        this.list = this.isAppend ? [...this.list, ...response.body] : response.body;

        this.isLoading = false;

        return  response.body.length;
    };

    @action
    reload = async () => {
        this.list = [];
        this.skip = 0;
        this.isLoadAll = false;
        await this.load();
    }
}

class VacanciesStore {
    @observable newVacancies = new NewVacancies({
        limit: 4,
        isAppend: false
    });

    @observable filteredVacancies = new FilteredVacancies({
        skip: 0,
    });
    constructor() {
        this.newVacancies.next().then().catch();
        this.filteredVacancies.next().then().catch();
    }
}

export default new VacanciesStore();