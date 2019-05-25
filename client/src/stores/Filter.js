import {action, observable} from "mobx";
import {DefaultApi as Api, DefaultApi} from '../modules/api';

class Cities {
    @observable isLoading = true;
    @observable list = [];

    constructor() {
        this.load().then()
    }

    @action
    load = async () => {
        const response = await Api.fetch({
            url: '/city'
        });
        this.list = response.body;
        this.isLoading = false;

        return response.body.length
    }
}

class Categories {
    @observable isLoading = true;
    @observable list = [];

    constructor() {
        this.load().then()
    }

    @action
    load = async () => {
        const response = await Api.fetch({
            url: '/category'
        });
        this.list = response.body;
        this.isLoading = false;

        return response.body.length
    }
}

class FilterStore {
    @observable filteredCategories = [];
    @observable filteredCityId = 3;
    @observable cities = new Cities();
    @observable categories = new Categories();

    @action
    changeCategory = (id) => () => {
        console.log('changeCategory', [...this.filteredCategories])
        !this.filteredCategories.includes(id)
            ? this.filteredCategories.push(id)
            : this.filteredCategories.splice(this.filteredCategories.indexOf(id), 1);
    };

    @action
    changeCity = (id) => () => {
        this.filteredCityId = id;
    }
}

export default new FilterStore()