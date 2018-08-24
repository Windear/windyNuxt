import axios from 'axios';

// 全局的 axios 默认值
//axios.defaults.baseURL = 'https://apis.map.qq.com/';
//axios.defaults.timeout = 10000;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
  //请求设计分类
  getDesignCate({ commit, state }, params) {
    return axios({
      url: 'design/cate',
      method: 'get',
      params,
    });
  },
  //请求设计列表
  getDesignList({ commit, state }, params) {
    return axios({
      url: 'design/designList',
      method: 'get',
      params,
    });
  },
  //请求设计详情
  getDesignData({ commit, state }, params) {
    return axios({
      url: '/design/details/' + params,
      method: 'get',
      //params,
    });
  },
  //请求项目列表
  postProjectList({ commit, state }, params) {
    return axios({
      url: 'design/project',
      method: 'post',
      data: params,
    });
  },
  //请求案例列表
  getCaseList({ commit, state }, params) {
    return axios({
      url: '/design/caseList',
      method: 'get',
      params,
    });
  }
}
