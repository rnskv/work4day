import { observable, action, autorun } from 'mobx';

class MainStore {
    @observable isLoading = true;

    constructor() {
        autorun(() => console.log('Call MainStore mutations'));
        setTimeout(this.loadStore.bind(this), 1500)
    }

    @action
    loadStore = () => {
        this.isLoading = false;
    }
}

export default new MainStore();