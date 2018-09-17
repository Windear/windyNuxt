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
      url: '/api/design/',
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
  //请求素材详情的网盘地址
  async getResourcesCloud({ commit, state }, params) {
    return await axios({
      url: '/api/resources/cloud/' + params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //素材访问量接口
  async getResourcesLooked({ commit, state }, params) {
    return await axios({
      url: '/api/resources/looked_num/' + params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //素材下载量接口
  async getResourcesDownloads({ commit, state }, params) {
    return await axios({
      url: '/api/resources/download_num/' + params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //获取格式分类列表
  async getResourcesFormat({ commit, state }, params) {
    return await axios({
      url: '/api/resources/format',
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //通过格式分类获取素材列表
  //获取格式分类列表
  async postResourcesFormatList({ commit, state }, params) {
    return await axios({
      url: '/api/resources/type',
      method: 'post',
      data:params,
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //工具模块api
  //获取工具分类列表
  async getToolsCate({ commit, state }, params) {
    return await axios({
      url: '/api/tools/cate',
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //获取工具列表
  async getToolsCateList({ commit, state }, params) {
    return await axios({
      url: '/api/tools/list/' + params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
   //获取工具详情
   async getToolsDetails({ commit, state }, params) {
    return await axios({
      url: '/api/tools/details/' + params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //请求工具详情的下载地址
  async getToolsDownload({ commit, state }, params) {
    return await axios({
      url: '/api/tools/download/' + params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //工具访问量接口
  async getToolsLooked({ commit, state }, params) {
    return await axios({
      url: '/api/tools/looked_num/' + params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //工具下载量接口
  async getToolsDownloads({ commit, state }, params) {
    return await axios({
      url: '/api/tools/download_num/' + params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
}
