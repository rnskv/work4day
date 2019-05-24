import {action, observable} from "mobx";

class FilterStore {
    @observable filteredCategories = [];
    @observable filteredCityId = 0;
    @observable cities = [
        {
            id: 0,
            name: "Пенза"
        },
        {
            id: 1,
            name: 'Таганрог'
        }
    ];

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