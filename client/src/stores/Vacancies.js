import { observable, action, autorun } from 'mobx';

async function api({url, method = 'GET', params, urlParams}) {
    let requestUrl = url;
    if (urlParams) {
        const queryString = Object.keys(urlParams).map(key => key + '=' + urlParams[key]).join('&');
        requestUrl = `${url}?${queryString}`;
    }

    const response = await fetch(requestUrl, {
        headers: {
            "content-type": "application/json",  // <--Very important!!!
        },
        mode: 'cors',
        method
    });
    console.log(response);

    const result = await response.json();

    console.log(result);

    return result;
}

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

        const newVacancies = await api({
            url: 'http://localhost:800/vacancies',
            urlParams: {
                limit: this.limit,
                skip: this.skip
            }
        });

        console.log(newVacancies)
        this.list = [...this.list, ...newVacancies];
        this.isLoading = false;
    };

    @action
    loadMore = async () => {
        this.skip += this.limit;
        await this.loadVacancies();
    }

}

export default new VacanciesStore();