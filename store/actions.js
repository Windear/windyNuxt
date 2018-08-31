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
      url: '/api/design/cate',
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
      url: '/api/design/designList',
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
      url: '/api/design/details/' + params,
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
      url: '/api/design/project',
      method: 'post',
      data: params,

    });
  },
  //请求案例列表
  async getCaseList({ commit, state }, params) {
    return await axios({
      url: '/api/design/caseList',
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //素材模块api
  //请求素材分类列表
  async getResourcesCate({ commit, state }, params) {
    return await axios({
      url: '/api/resources/cate',
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //请求素材列表
  async getResourcesList({ commit, state }, params) {
    return await axios({
      url: '/api/resources/list/' + params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //请求素材详情
  async getResourcesData({ commit, state }, params) {
    return await axios({
      url: '/api/resources/details/' + params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
}
