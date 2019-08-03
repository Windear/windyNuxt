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
      url: '/api/mydesign/designList/',
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
      url: '/api/mydesign/designDetail/' + params +'/',
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
  // 根据分类请求素材列表
  async getCateResourcesList({ commit, state }, params) {
    return await axios({
      url: '/api/resources/list/cate/?p=' + params.p +'&search='+params.search,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //请求素材列表
  async getResourcesList({ commit, state }, params) {
    return await axios({
      url: '/api/resources/list/?p=' + params,
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
      url: '/api/resources/list/?p='+ params.p +'&search='+params.search,
      method: 'get',
      // data: ,
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //通过素材分类获取格式分类列表
  
  async postCateResourcesFormatList({ commit, state }, params) {
    return await axios({
      url: '/api/resources/list/cate/format/?p='+ params.p +'&cate='+params.cate +'&file_type='+params.file_type,
      method: 'get',
      // data: ,
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
  //博客模块api
  //获取文章分类列表
  async getBlogCate({ commit, state }, params) {
    return await axios({
      url: '/api/blog/cate',
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //获取文章列表
  async getBlogCateList({ commit, state }, params) {
    return await axios({
      url: '/api/blog/list/' + params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //获取文章详情
  async getBlogDetails({ commit, state }, params) {
    return await axios({
      url: '/api/blog/details/' + params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //文章访问量接口
  async getBlogLooked({ commit, state }, params) {
    return await axios({
      url: '/api/blog/looked_num/' + params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //首页模块
  //获取最新素材前8条
  async getNewResources({ commit, state }, params) {
    return await axios({
      url: '/api/resources/new',
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //获取最新工具前6条
  async getNewTools({ commit, state }, params) {
    return await axios({
      url: '/api/tools/new',
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //获取最新文章前3条
  async getNewblog({ commit, state }, params) {
    return await axios({
      url: '/api/blog/new',
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //搜索模块
  //搜索素材api
  async searchResources({ commit, state }, params) {
    return await axios({
      url: '/api/resources/search_resources/?search=' + params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //搜索工具api
  async searchTools({ commit, state }, params) {
    return await axios({
      url: '/api/tools/search_tools/?search=' + params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //搜索文章api
  async searchBlogs({ commit, state }, params) {
    return await axios({
      url: '/api/blog/search_blogs/?search=' + params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //链接模块
  //获取常用网站列表
  async getCollectionNet({ commit, state }, params) {
    return await axios({
      url: '/api/myLinks/collection/'+ params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
  //获取友情链接列表
  async getFriendsNet({ commit, state }, params) {
    return await axios({
      url: '/api/myLinks/friends/'+ params,
      method: 'get',
      adapter: cache({
        local: false // 是否永久保留在本地，默认为false
      })
    });
  },
}
