import RError from '../RError';
import { SERVER_RESPONSE_INVALID, SERVER_UNAVALIBE, SERVER_UNAVALIBE_RETRY } from '../../configs/errors';

class Request {
  constructor(url, params, successCb, errorCb) {
    this.url = url;
    this.params = params;
    this.successCb = successCb;
    this.errorCb = errorCb;
  }

  fetch() {
    window
      .fetch(this.url, this.params)
      .then(data => {
        this.successCb(data);
      })
      .catch(err => {
        this.errorCb(new RError(SERVER_UNAVALIBE));
      });
  }
}

class Api {
  constructor(params = {}) {
    this.requestParams = {
      protocol: params.protocol || 'http',
      host: params.host || 'localhost',
      port: params.port || 1337,
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
    const queryString = Object.keys(urlParams)
      .map(key => key + '=' + urlParams[key])
      .join('&');
    return `?${queryString}`;
  }

  async fetch({ url, method = 'GET', params = null, urlParams }) {
    let requestUrl = `${this.getRequestLocation()}${url}`;

    if (urlParams) {
      requestUrl += this.getUrlencodedParams(urlParams);
    }

    return new Promise((resolve, reject) => {
      const requestParams = {
        headers: {
          'content-type': 'application/json',
        },
        mode: 'cors',
        method,
      };

      if (params) {
        requestParams.body = JSON.stringify(params);
      }

      const successCb = data => {
        data
          .json()
          .then(json => {
            if (data.status > 299 || data.status < 200) {
              reject(json);
            } else {
              resolve(json);
            }
          })
          .catch(err => reject(new RError(SERVER_RESPONSE_INVALID)));
      };

      const errorCb = err => {
        reject(err);
      };

      this.addRequest(requestUrl, new Request(requestUrl, requestParams, successCb, errorCb));
    });
  }
}

export default Api;
