import axios from 'axios';
import cache from './cache'
// 全局的 axios 默认值
//axios.defaults.baseURL = 'https://apis.map.qq.com/';
//axios.defaults.timeout = 10000;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
  //请求设计分类
  async getDesignCate({ commit, state }, params) {
    return await axios({
      url: 'design/cate',
      method: 'get',
      params,
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //请求设计列表
  async getDesignList({ commit, state }, params) {
    return await axios({
      url: 'design/designList',
      method: 'get',
      params,
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //请求设计详情
  async getDesignData({ commit, state }, params) {
    return await axios({
      url: '/design/details/' + params,
      method: 'get',
      //params,
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //请求项目列表
  async postProjectList({ commit, state }, params) {
    return await axios({
      url: 'design/project',
      method: 'post',
      data: params,

    });
  },
  //请求案例列表
  async getCaseList({ commit, state }, params) {
    return await axios({
      url: '/design/caseList',
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  }
}
