class Api {
    async fetch({url, method = 'GET', params, urlParams}) {
        let requestUrl = url;
        if (urlParams) {
            const queryString = Object.keys(urlParams).map(key => key + '=' + urlParams[key]).join('&');
            requestUrl = `${url}?${queryString}`;
            console.log('rurl', `${url}?${queryString}`);
        }
        const response = await fetch(requestUrl, {
            headers: {
                "content-type": "application/json",  // <--Very important!!!
            },
            mode: 'cors',
            method
        });

        return await response.json();
    }
}

export default new Api();