import axios from 'axios';
import queryString from 'query-string';

const Api = {
  /**
   * 
   * @param {*} url 
   */
  get(url) {
    return axios.get(url);
  },

  post(url, data) {
    return axios.post(url, data);
  },

  /**
   * @param {*} rootUrl
   * @param {*} path 
   * @param {*} params string or js object, support path/:id and path?q=x&p=y
   */
  buildUrl(rootUrl, path, params=null) {
    const url = rootUrl + (path.startsWith("/") ? path : `/${path}`);
    if (!params) {
      return url;
    }
    if (typeof params === "string") {
      return url + params;
    }
    if (typeof params === "object") {
      const q = JSON.stringify(params);

      return `${url}?${queryString.stringify({where: q})}`;
    }
    return url;
  }
}

export default Api;