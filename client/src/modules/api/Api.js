class Api {
    constructor(params = {}) {
        this.requestParams = {
            protocol: params.protocol || 'http',
            host: params.host || 'localhost',
            port: params.port || 1337
        }
    }

    async fetch({url, method = 'GET', params, urlParams}) {
        let requestUrl = `${this.requestParams.protocol}://${this.requestParams.host}:${this.requestParams.port}${url}`;

        console.log('requestUrl', requestUrl);
        if (urlParams) {
            const queryString = Object.keys(urlParams).map(key => key + '=' + urlParams[key]).join('&');
            requestUrl = `${url}?${queryString}`;
            console.log('rurl', `${url}?${queryString}`);
        }

        let response;

        try {
            response = await fetch(requestUrl, {
                headers: {
                    "content-type": "application/json",  // <--Very important!!!
                },
                mode: 'cors',
                method
            });

        } catch(err) {
            console.log(err) //нет соединения с сервером
            return;
        }

        return await response.json();

        // console.log('in final')
    }
}

export default Api;