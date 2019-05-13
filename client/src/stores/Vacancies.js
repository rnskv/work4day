import { observable, action, autorun } from 'mobx';

import Api from '../modules/api';


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
            url: 'http://localhost:800/vacancies',
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

}

class Filter {
    @observable categoryId = -1;

    @action
    change = (id) => () => {
        console.log('change', id, this)
        this.categoryId = id;
    }
}

class VacanciesStore {
    @observable newVacancies = new NewVacancies({limit: 3, isAppend: false});
    @observable filteredVacancies = new FilteredVacancies({ skip: 0 });
    @observable filter = new Filter();
    constructor() {
        this.newVacancies.next().then().catch();
        this.filteredVacancies.next().then().catch();
    }
}

export default new VacanciesStore();