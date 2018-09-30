<template>
  <div class="navbox">
    <header class="nav" :class="{'navBarShadow':scrollType}" ref="nav">
      <div class="container_nav" :class="{'containerLitter':scrollType}">
        <div class="nav-left-box">
          <a class="pcNav" href="https://5windy.com/"><img src="~/assets/img/logo.png" class="logo"></a>
          <a class="mobileNav" href="https://5windy.com/"><img src="~/static/LOGO.svg" class="logo"></a>
          <!-- PC显示的目录标题 -->
          <ul class="text-link">
            <a href="javascript:;" @click="openIndex">
              <li :style="active==1?'color:#20A0FF;':''">有爱首页</li>
            </a>
            <a href="javascript:;" @click="openResource">
              <li :style="active==2?'color:#20A0FF;':''" class="resources">
                设计素材
                <ul>
                  <a v-for="cate in resource_type" :key="cate.id" :href="'/resources/'+ cate.num">
                    <li @click="uploadCate(cate.num)">{{cate.val}}</li>
                  </a>
                </ul>
              </li>
            </a>
            <a href="javascript:;" @click="openTools">
              <li :style="active==3?'color:#20A0FF;':''">常用工具</li>
            </a>
            <a href="javascript:;" @click="openBlog">
              <li :style="active==4?'color:#20A0FF;':''">文章博客</li>
            </a>
            <a href="javascript:;" @click="openAbout">
              <li :style="active==5?'color:#20A0FF;':''">关于Windy</li>
            </a>
          </ul>
          <!-- PC显示的目录标题 -->
          <!-- 移动端显示的目录标题 -->
          <div class="mobile-text-link">
            <a href="javascript:;" @click="openIndex" :style="active==1?'color:#20A0FF;':''">首页</a>
            <a href="javascript:;" @click="openResource" :style="active==2?'color:#20A0FF;':''">素材</a>
            <a href="javascript:;" @click="openTools" :style="active==3?'color:#20A0FF;':''">工具</a>
            <a href="javascript:;" @click="openBlog" :style="active==4?'color:#20A0FF;':''">文章</a>
            <a href="javascript:;" @click="openAbout" :style="active==5?'color:#20A0FF;':''">关于</a>
            <i style="color:#fff;" slot="suffix" class="el-input__icon el-icon-search" @click="showMenu=!showMenu"></i>
          </div>
          <!-- 移动端显示的目录标题 -->
        </div>
        <!-- 联系方式 -->
        <div class="nav-right-box" v-if="active==5">
          <a href="javascript:;"><span class="text-span"></span></a>
          <a href="javascript:;" @click="postWeChatCenterDialogVisibleTrue">
            <div class="wechat chat"></div>
          </a>
          <a href="javascript:;" @click="qqIM">
            <div class="qq chat"></div>
          </a>
          <a href="javascript:;" @click="sendEmail">
            <div class="email chat"></div>
          </a>
        </div>
        <!-- 联系方式 -->
        <!-- 搜索框 -->
        <div class="search-box" v-if="active!=5">
          <el-input placeholder="输入要查找的内容" v-model="searchVal" @keyup.enter.native="toSearch()">
            <i slot="suffix" class="el-input__icon el-icon-search" @click="toSearch()"></i>
          </el-input>
        </div>
        <!-- 搜索框 -->
  
      </div>
    </header>
    <!-- 移动端搜索框 -->
    <div class="mobile-search-box" v-if="showMenu">
      <el-input placeholder="输入要查找的内容" v-model="searchVal" @keyup.enter.native="toSearch()">
        <i slot="suffix" class="el-input__icon el-icon-search" @click="toSearch()"></i>
      </el-input>
    </div>
    <!-- 移动端搜索框 -->
    <!-- 素材分类移动列表 -->
    <div v-if="active==2" style="width: 100%;">
      <ul class="resources-list">
        <a v-for="cate in resource_type" :key="cate.id" :href="'/resources/'+ cate.num">
          <li @click="uploadCate(cate.num)" :style="resources_active == cate.num?'color:#20A0FF;':''">{{cate.val}}</li>
        </a>
      </ul>
    </div>
    <!-- 素材分类移动列表 -->
  </div>
</template>

<script type="text/javascript">
  export default {
    //该页面的控制数据
    data() {
      return {
        scrollType: false,
        showMenu: false,
        showResources: false,
        //素材分类
        resource_type: [],
        resources_active: 0,
        //搜索字段
        searchVal: '',
      }
    },
    //父控件传过来的参数
    props: {
  
    },
    computed: {
      active() {
        return this.$store.getters.getNavBarActive;
      },
      bodyWidth() {
        return this.$store.getters.getBodyWidth;
      },
  
    },
    //监听函数
    wacth: {
  
  
    },
    //进入页面执行的函数
    mounted() {
      // this.$store.commit('updateNavBarActive', '1');
      this.$nextTick(() => {
        window.addEventListener('scroll', this.onScroll)
      });
      //获取素材分类
      this.getResourcesCate();
      //素材分类列表选中
      this.resources_active = String(window.location.href.split('/').pop());
    },
    //定义函数
    methods: {
  
      //进入首页设计素材
      openIndex() {
        this.showMenu = false;
        this.$store.commit('updateNavBarActive', '1');
        this.searchVal = '';
        this.$router.push({
          path: '/'
        });
      },
  
      // 进入素材页面
      openResource() {
        this.showMenu = false;
        this.$store.commit('updateNavBarActive', '2');
        this.searchVal = '';
        this.$router.push({
          path: '/resources'
        });
      },
      //进入MAC工具页
      openTools() {
        this.showMenu = false;
        this.$store.commit('updateNavBarActive', '3');
        this.searchVal = '';
        this.$router.push({
          path: '/tools'
        });
      },
      //进入文章博客
      openBlog() {
        this.showMenu = false;
        this.$store.commit('updateNavBarActive', '4');
        this.$router.push({
          path: '/blog'
        });
      },
      //进入关于windy
      openAbout() {
        this.showMenu = false;
        this.$store.commit('updateNavBarActive', '5');
        this.searchVal = '';
        this.$router.push({
          path: '/about'
        });
      },
      //跳转搜索页面
      toSearch() {
        this.$store.commit('updateSearchVal', this.searchVal);
        this.$router.push({
          path: '/search' + '?q=' + this.searchVal
        });
  
      },
  
  
      //滚轮缩小事件
      onScroll() {
        let self = this;
        let scrolled = document.documentElement.scrollTop || document.body.scrollTop
        if (scrolled >= 80) {
          self.scrollType = true;
        } else {
          self.scrollType = false;
        }
      },
      //获取分类列表
      getResourcesCate() {
        let params = "";
        this.$store.dispatch('getResourcesCate', params).then((response) => {
          let res = response.data;
          if (response.statusText === "OK" && response.status === 200) {
            //console.log(res);
            this.resource_type = res;
          } else {
            alert("网络错误")
          }
        }).catch((err) => {
          console.error(err);
        });
      },
      //点击分类，查询该分类列表
      uploadCate(cate) {
        this.$store.commit('updateResourcesCate', cate);
        // this.$router.push({ path: '/resources/' + cate, query: { resourcesCate: cate } });
      },
      //打开微信二维码
      postWeChatCenterDialogVisibleTrue() {
        this.$store.commit('updateCenterDialogVisible', true)
        this.$store.commit('updatemodalStatus', "wechat")
      },
      //QQ聊天
      qqIM() {
        window.open('http://wpa.qq.com/msgrd?v=3&uin=197299278&site=qq&menu=yes', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
      },
      //发送邮件
      sendEmail() {
        window.open('mailto:197299278@qq.com', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
      },
  
  
    },
    //增加控件
    components: {
  
    }
  }
</script>

<style lang="css">
  /* logo图片 */
  
  .mobileNav {
    display: none;
    max-width: 40px;
    max-height: 40px;
    width: 40px;
    height: 40px;
  }
  
  
  /* logo图片 */
  
  .menu {
    width: 2rem;
    height: 2rem;
    text-align: center;
    display: none;
  }
  
  .menu img {
    margin-top: 0.6rem;
  }
  
  .menu-list {
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    height: 140px;
  }
  
  
  /* 菜单选项 */
  
  .text-link li {
    height: 60px;
    line-height: 60px;
  }
  
  .menu-list li {
    height: 44px;
    line-height: 44px;
    color: #1F2D3D;
    margin-left: 20px;
  }
  
  .mobile-text-link {
    display: none;
  }
  
  
  /* 菜单选项 */
  
  .navbox {
    position: fixed;
    width: 100%;
    z-index: 10;
  }
  
  .nav {
    background: #0F2237;
    height: 80px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    justify-content: center;
    display: flex;
  }
  
  .navBarShadow {
    transition: all 0.3s ease-out 0s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    height: 60px;
  }
  
  .container_nav {
    width: 1200px;
    overflow: hidden;
    margin: 0 10px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .containerLitter {
    height: 60px;
    transition: all 0.3s ease-out 0s;
  }
  
  .nav-left-box {
    display: flex;
    align-items: center;
  }
  
  .logo {
    float: left;
    height: 40px;
    background-size: 100%;
  }
  
  .text-span {
    color: #475669;
    list-style-type: none;
    font-size: 18px;
    font-weight: 350;
    transition: all 0.3s ease-out 0s;
    display: inline-block;
  }
  
  .text-span:hover {
    color: #8492A6;
    transition: all 0.3s ease-out 0s;
  }
  
  .text-link {
    margin: 0;
    float: left;
    margin-left: 40px;
  }
  
  .text-link li {
    color: #fff;
    list-style-type: none;
    float: left;
    font-size: 16px;
    margin-right: 40px;
    font-weight: 350;
    transition: all 0.3s ease-out 0s;
  }
  
  .text-link li:hover {
    color: #8492A6;
    transition: all 0.3s ease-out 0s;
  }
  
  .nav-right-box {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  
  .chat {
    width: 40px;
    height: 40px;
    margin-left: 20px;
    border-radius: 20px;
    border: 1px solid #fff;
    transition: all 0.3s ease-out 0s;
    box-sizing: border-box;
  }
  
  .chat:hover {
    transition: all 0.3s ease-out 0s;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  }
  
  .wechat {
    background-image: url('~assets/img/wechat.png');
    background-size: 100%;
  }
  
  .qq {
    background-image: url('~assets/img/qq.png');
    background-size: 100%;
  }
  
  .email {
    background-image: url('~assets/img/email.png');
    background-size: 100%;
  }
  
  
  /* 搜索模块 */
  
  .el-input__inner {
    border-radius: 20px;
    background-color: #020E1C;
    border: 0;
    width: 280px;
    transition: all 0.3s ease-out 0s;
  }
  
  .el-input__inner::-webkit-input-placeholder {
    color: #475669;
  }
  
  .el-input__inner:focus {
    background-color: #fff;
    transition: all 0.3s ease-out 0s;
  }
  
  
  /* 搜索模块 */
  
  
  /* 搜索移动端 */
  
  .mobile-search-box {
    background: #fff;
    height: 60px;
    width: 100%;
    padding: 0 10px;
    display: none;
  }
  
  .mobile-search-box .el-input__inner {
    width: 100%;
    background-color: #EFF2F7;
    margin: 10px auto;
  }

   .mobile-search-box .el-input__inner::-webkit-input-placeholder {
    color: #C0CCDA;
  }
  
  
  /* 搜索移动端 */
  
  
  /*素材模块弹出*/
  
  .resources:hover ul {
    display: inline;
  }
  
  .resources ul {
    display: none;
    position: absolute;
    margin-left: -10px;
    width: 100px;
    /*margin-top: 16px;*/
  }
  
  .resources ul li {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    background: #0F2237;
    width: 100%;
  }
  
  .resources ul li:hover {
    color: #fff;
    background: #0F2C4B;
  }
  
  .resources ul li {
    color: #fff;
    font-size: 14px;
  }
  
  .resources-list {
    display: none;
    width: 100%;
    background: #EFF2F7;
    height: 50px;
    -webkit-overflow-scrolling: touch;
    -webkit-overflow-x: scroll;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  
  .resources-list li {
    padding: 0 10px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    white-space: nowrap;
  }
  
  
  /*素材模块弹出*/
  
  
  /*当屏幕小于760*/
  
  @media screen and (max-width: 760px) {
    .mobile-search-box {
      display: block;
    }
    /* logo图片 */
    .pcNav {
      display: none;
    }
    .mobileNav {
      display: inline-block;
    }
    /* logo图片 */
    /* 菜单选项 */
    .text-link {
      display: none;
    }
    .mobile-text-link {
      display: flex;
      align-items: center;
      margin-left: 20px;
      justify-content: space-between;
      width: 100%;
    }
    .mobile-text-link a {
      color: #fff;
      display: inline-block;
    }
    /* 菜单选项 */
    .menu {
      display: inline;
    }
    .nav-left-box {
      width: 100%;
    }
    .nav-right-box {
      display: none;
    }
    .resources-list {
      /*display: -webkit-box;*/
      display: flex;
    }
    /* 搜索框 */
    .search-box {
      display: none;
    }
  }
  
  
  /*当屏幕尺寸大于760px时，应用下面的CSS样式*/
  
  @media screen and (min-width: 760px) {
    .menu-list {
      display: none;
    }
  }
</style>
