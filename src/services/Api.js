import axios from 'axios';
import queryString from 'query-string';

const Api = {
  /**
   * @param {*} url
   * return { data, error, status }
   */
  async get(url) {
    try {
      const r = await axios.get(url);
      return { ...r.data, status: r.status };
    } catch (e) {
      return { ...e.response.data, status: e.response.status };
    }
  },

  /**
   * @param {*} url
   * return { data, error, status }
   */
  async post(url, entity) {
    try {
      const { data } = await axios.post(url, entity);
      return data;
    } catch (e) {
      return { ...e.response.data, status: e.response.status };
    }
  },

  async put(url, entity) {
    return await axios.put(url, entity);
  },

  /**
   * @param {*} rootUrl
   * @param {*} path
   * @param {*} params string or js object, support path/:id and path?q=x&p=y
   */
  buildUrl(rootUrl, path, params = null) {
    const url = rootUrl + (path.startsWith('/') ? path : `/${path}`);
    if (!params) {
      return url;
    }
    if (typeof params === 'string') {
      return url + params;
    }
    if (typeof params === 'object') {
      const q = JSON.stringify(params);

      return `${url}?${queryString.stringify({ where: q })}`;
    }
    return url;
  },
};

export default Api;
