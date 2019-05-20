import { observable, action, autorun } from 'mobx';

import { DefaultApi as Api } from '../modules/api';

console.log(Api)

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
        ({ filter: this.filter } = defaultParams);
    }

    @action
    load = async () => {
        this.isLoading = true;
        console.log('FILTER', this.filter.categories.join(','));
        const response = await Api.fetch({
            url: '/vacancies',
            urlParams: {
                limit: this.limit,
                skip: this.skip,
                categories: this.filter.categories.join(',')
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

class Filter {
    @observable categories = [];
    @observable city = 0;

    @action
    changeCategory = (id) => () => {
        !this.categories.includes(id)
            ? this.categories.push(id)
            : this.categories.splice(this.categories.indexOf(id), 1);
    };

    @action
    changeCity = (id) => () => {
        this.city = id;
    }
}

class VacanciesStore {
    @observable filter = new Filter();
    @observable newVacancies = new NewVacancies({
        limit: 4,
        isAppend: false
    });

    @observable filteredVacancies = new FilteredVacancies({
        skip: 0,
        filter: this.filter
    });
    constructor() {
        this.newVacancies.next().then().catch();
        this.filteredVacancies.next().then().catch();
    }
}

export default new VacanciesStore();