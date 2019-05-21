class RError extends Error{
    constructor(params) {
        if (!params || !params.message) { throw new Error('message param required!') }
        super();
        this.message = params.message;
        this.code = params.code || 500;
        this.status = params.status || 'SERVER_ERROR';
    }
}

class Request {
    constructor(url, params, successCb, errorCb) {
        this.url = url;
        this.params = params;
        this.successCb = successCb;
        this.errorCb = errorCb;
        this.promise = null;
        this.refreshCount = 0;
        this.maxRefreshes = 3;
        this.refreshTime = 1000;
    }

    fetch() {
        this.promise = fetch(this.url, this.params)
            .then(
            (data) => {
                this.successCb(data);
            })
            .catch((err) => {
                console.error(new RError({ message: 'Невозможно подключиться к серверу. Повторяем' }));
                if (this.refreshCount < this.maxRefreshes) {
                    setTimeout(this.refresh.bind(this), this.refreshTime)
                } else {
                    this.errorCb(new RError({ message: 'Сервер недоступен. зайдите позже' }));
                }
            });
    }

    refresh() {
        this.refreshCount++;
        this.refreshTime *= 2;
        this.fetch();
    }
}

class Api {
    constructor(params = {}) {
        this.requestParams = {
            protocol: params.protocol || 'http',
            host: params.host || 'localhost',
            port: params.port || 1337
        };

        this.requests = [];
    }

    addRequest(url, request) {
        this.requests[url] = request;
        request.fetch();
    }

    async fetch({url, method = 'GET', params, urlParams}) {
        let requestUrl = `${this.requestParams.protocol}://${this.requestParams.host}:${this.requestParams.port}${url}`;

        if (urlParams) {
            const queryString = Object.keys(urlParams).map(key => key + '=' + urlParams[key]).join('&');
            requestUrl += `?${queryString}`;
        }

        return new Promise((resolve, reject) => {
            console.log(`Запрос по url ${requestUrl} запущен`);

            const requestParams = {
                headers: {
                    "content-type": "application/json",  // <--Very important!!!
                },
                mode: 'cors',
                method
            };

            const successCb = async (data) => {
                console.log(`Сервер ответил со статусом ${data.status}`);
                data.json()
                    .then(json => resolve(json))
                    .catch(err => reject(new RError({ message: 'Неверный формат ответа от сервера' })));
            };

            const errorCb = err => {
                //Вызываем попап какой нибудь
                reject(err);
            };

            this.addRequest(requestUrl, new Request(requestUrl, requestParams, successCb, errorCb));
        }).catch((err) => alert(err));
    }
}

export default Api;