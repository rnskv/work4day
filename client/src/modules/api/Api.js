class Api {
    constructor(params = {}) {
        this.requestParams = {
            protocol: params.protocol || 'http',
            host: params.host || 'localhost',
            port: params.port || 1337
        };

        this.requests = [];
    }

    addRequest(url, promise) {
        this.requests[url] = {
            promise,
            isCanceled: false
        }
    }

    closeAllRequests() {
        for (let url in this.requests) {
            this.requests[url].isCanceled = true;
        }
    }

    async fetch({url, method = 'GET', params, urlParams}) {
        let requestUrl = `${this.requestParams.protocol}://${this.requestParams.host}:${this.requestParams.port}${url}`;

        if (urlParams) {
            const queryString = Object.keys(urlParams).map(key => key + '=' + urlParams[key]).join('&');
            requestUrl += `?${queryString}`;
        }

        return new Promise((resolve, reject) => {
            console.log(`Запрос по url ${requestUrl} запущен`);
            this.addRequest(requestUrl, fetch(requestUrl, {
                headers: {
                    "content-type": "application/json",  // <--Very important!!!
                },
                mode: 'cors',
                method
            }));

            const request = this.requests[requestUrl];
            request.promise
                .then(async (data) => {
                    if (!request.isCanceled) {
                        console.log(`Запрос по url ${requestUrl} успешен`);
                        resolve(await data.json())
                    } else {
                        throw new Error('Какая нибудь ошибка о том что закрыто соединение')
                    }
                })
                .catch(err => {
                    console.log(err)
                    if (request.isCanceled) {
                        //Тут игнорирутеся завершенный ранее запрос.
                        console.log(`Запрос по url ${requestUrl} отменен!`);
                    } else {
                        console.log(`Запрос по url ${requestUrl} невозможен!`);
                        this.closeAllRequests()
                    }

                });
        });
    }
}

export default Api;