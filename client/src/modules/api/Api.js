import RError from '../RError';
import {
    SERVER_RESPONSE_INVALID,
    SERVER_UNAVALIBE,
    SERVER_UNAVALIBE_RETRY
} from '../../configs/errors';

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
                console.error(new RError(SERVER_UNAVALIBE_RETRY));
                if (this.refreshCount < this.maxRefreshes) {
                    setTimeout(this.refresh.bind(this), this.refreshTime)
                } else {
                    this.errorCb(new RError(SERVER_UNAVALIBE));
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

    getRequestLocation() {
        return `${this.requestParams.protocol}://${this.requestParams.host}:${this.requestParams.port}`;
    }

    getUrlencodedParams(urlParams) {
        const queryString = Object.keys(urlParams).map(key => key + '=' + urlParams[key]).join('&');
        return `?${queryString}`;
    }

    async fetch({url, method = 'GET', params = null, urlParams}) {
        let requestUrl = `${this.getRequestLocation()}${url}`;

        if (urlParams) {
            requestUrl += this.getUrlencodedParams(urlParams);
        }

        return new Promise((resolve, reject) => {
            const requestParams = {
                headers: {
                    "content-type": "application/json",
                },
                mode: 'cors',
                method
            };

            if (params ) {
                requestParams.body = JSON.stringify(params);
            }

            const successCb = async (data) => {
                data.json()
                    .then(json => resolve(json))
                    .catch(err => reject(new RError(SERVER_RESPONSE_INVALID)));
            };

            const errorCb = err => {
                reject(err);
            };

            this.addRequest(requestUrl, new Request(requestUrl, requestParams, successCb, errorCb));
        }).catch((err) => alert(err));
    }
}

export default Api;