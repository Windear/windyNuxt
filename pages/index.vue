<template>
  <div class="home-body">
    <scroll-bar/>
    <!-- 素材模块 -->
    <div class="resources-box static-block">
      <div class="box-title">
        <h2 class="title-box">最新素材</h2>
        <a href="/resources" class="more">更多></a>
      </div>
      <ul class="img-list">
        <li v-for="item in resourcesList" :key="item.id">
          <div class="thumbnail">
            <a :href="'/resources/data/'+item.resourcesId" target="_blank">
              <img v-lazy="ip +'/media/'+item.resourcesImg" :key="item.resourcesImg" alt="有爱设计素材,sketch素材" style="display: inline;">
            </a>
            <!-- <div class="info">
                      </div> -->
          </div>
          <p><a :href="'/resources/data/'+item.resourcesId" target="_blank">{{item.resourcesTitle}}</a></p>
        </li>
      </ul>
    </div>
    <!-- 素材模块 -->
    <!-- 工具模块 -->
    <div class="tools-box static-block">
      <div class="box-title">
        <h2 class="title-box">最新工具</h2>
        <a href="/tools" class="more">更多></a>
      </div>
  
      <ul class="tools-list">
        <li v-for="item in toolsList" :key="item.toolsId">
          <div class="box-body">
            <a :href="'/tools/'+item.toolsId" target="_blank">
              <img v-lazy="ip +'/media/'+item.toolsIcon" :alt="item.toolsTitle">
              <div class="content-text">
                <p>{{item.toolsTitle}}</p>
                <span>{{item.toolsIntroduction}}</span>
                <div class="content-tag">
                  <div class="cate">{{item.toolsCate[1]}}</div>
                  <div class="sys-tag">
                    <i v-for="icon in item.toolsSys" :key="icon.id" class="tag-img" :class="icon==1?'mac':'microsoft'"></i>
                    <!-- <i class="tag-img mac" ></i> -->
                  </div>
                </div>
              </div>
            </a>
          </div>
        </li>
      </ul>
  
    </div>
    <!-- 工具模块 -->
    <!-- 文章模块 -->
    <div class="blog-box static-block">
      <div class="box-title">
        <h2 class="title-box">最新文章</h2>
        <a href="/blog" class="more">更多></a>
      </div>
    </div>
  
    <a class="list" :href="'/blog/'+item.articleId" v-for="item in blogList" :key="item.articleId" target="_blank">
      <div class="blogList">
        <img v-lazy="ip +'/media/'+item.articlePicture" alt="">
        <div class="blog-text">
          <h3>{{item.articleTitle}}</h3>
          <p>{{item.articleIntroduction}}</p>
          <div class="text-other">
            <div class="blog-cate">{{item.articleOriginal[1]}}</div>·
            <span class="blog-author">{{item.articleAuthor}}</span>·
            <span class="blog-create-time">{{item.createTime}}</span>
          </div>
        </div>
      </div>
    </a>
  
    <!-- 文章模块 -->
  </div>
</template>

<script type="text/javascript">
  //引入百度统计
  import baidu from 'static/js/baidu.js'
  import ScrollBar from '~/components/scroll_bar.vue' //通知栏
  import resourece from '~/components/resource/resourceList.vue' //素材列表
  
  export default {
  
    //该页面的控制数据
    data() {
      return {
        //ip地址
        ip: this.$store.state.ip,
        //素材列表
        resourcesList: [],
        //工具列表
        toolsList: [],
        //文章列表
        blogList: [],
        //是否显示notfound
        notfound: false,
      }
    },
    //自定义头部
    head() {
      return {
        title: "有爱设计",
        meta: [{
            hid: '有爱设计',
            name: 'keywords',
            content: '有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发'
          },
          {
            hid: '有爱设计',
            name: 'description',
            content: '有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发,sketch素材,sketch资源,sketch下载。'
          },
          {
            hid: '有爱设计',
            name: 'description',
            content: '欢迎来到windy的设计小站，这里有各种各样的素材，这里接各种各样的APP、网站设计外包。这里可以找到从初学者到设计师的心得体会教程，欢迎来我的家里寻找吧。'
          },
        ]
      }
    },
    //父控件传过来的参数
    props: {
  
    },
    //监听函数
    wacth: {
  
    },
    //进入页面执行的函数
    mounted() {
      //菜单选择
      this.$store.commit('updateNavBarActive', '1');
      //百度统计
      baidu.baidu("有爱首页");
      //默认footer需要显示1
      this.$store.commit('updateFooterWidth', 1);
      //获取素材列表
      this.getNewResources();
      //获取工具列表
      this.getNewTools();
      //获取文章列表
      this.getNewblog();
    },
    //定义函数
    methods: {
      //获取最新8条素材列表
      getNewResources() {
        let params = '';
        this.$store.dispatch('getNewResources', params).then((response) => {
          let res = response.data;
          if (res.state != "err") {
            this.resourcesList = res;
          } else {
            // alert("网络错误")
            this.notfound = true;
          }
        }).catch((err) => {
          console.error(err);
        });
      },
      //获取最新6条工具列表
      getNewTools() {
        let params = '';
        this.$store.dispatch('getNewTools', params).then((response) => {
          let res = response.data;
          if (res.state != "err") {
            this.toolsList = res;
          } else {
            // alert("网络错误")
            this.notfound = true;
          }
        }).catch((err) => {
          console.error(err);
        });
      },
      //获取最新6条工具列表
      getNewblog() {
        let params = '';
        this.$store.dispatch('getNewblog', params).then((response) => {
          let res = response.data;
          if (res.state != "err") {
            this.blogList = res;
          } else {
            // alert("网络错误")
            this.notfound = true;
          }
        }).catch((err) => {
          console.error(err);
        });
      },
  
    },
    //增加控件
    components: {
      ScrollBar,
      resourece
    }
  }
</script>

<style scoped lang="css">
  /* 公共模块 */
  
  .static-block {
    /* background: #fff; */
    display: flex;
    justify-content: center;
    flex-flow: column;
  }
  
  .box-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    padding: 0 10px;
    margin: 40px auto 20px;
  }
  
  .box-title h2 {
    font-weight: 400;
    font-size: 24px;
    color: #5E6D82;
  }
  
  .more {
    /* Rectangle 3: */
    background: linear-gradient(-135deg, #43BFFF 0%, #20A0FF 100%);
    box-shadow: 0 2px 6px 0 rgba(60, 172, 255, 0.50);
    border-radius: 12px;
    font-size: 12px;
    color: #fff;
    height: 24px;
    line-height: 24px;
    padding: 0 8px;
    transition: all 0.3s ease-out 0s;
  }
  
  .more:hover {
    /* color: #000; */
    box-shadow: 0 2px 12px 0 rgba(60, 172, 255, 0.60);
    transition: all 0.3s ease-out 0s;
  }
  
  
  /* 公共模块 */
  
  
  /*素材模块*/
  
  .img-list {
    width: 1200px;
    margin-top: 20px;
    overflow: hidden;
    display: block;
    margin: 0 auto 40px;
  }
  
  .img-list li {
    float: left;
    margin: 10px;
  }
  
  .img-list img:hover {
    transition: all 0.3s ease-out 0s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  
  .img-list li a {
    display: block;
    line-height: 0;
  }
  
  .img-list p a {
    margin-top: 15px;
    font-size: 16px;
    line-height: 16px;
    width: 280px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  
  .img-list img {
    width: 280px;
    height: 210px;
    border-radius: 4px;
    outline: none;
    transition: all 0.3s ease-out 0s;
  }
  
  .img-list li:nth-child(4n) {
    margin-right: 0;
  }
  
  .img-list .thumbnail .info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 50px;
    border-radius: 0 0 4px 4px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
    opacity: 0;
    transition: opacity 0.2s;
  }
  
  
  /*素材模块*/
  
  
  /* 工具模块 */
  
  .tools-box {
    background: #F3F4F5;
  }
  
  .tools-list {
    margin-top: 20px;
    width: 1200px;
    overflow: hidden;
    display: block;
    margin: 0 auto 40px;
  }
  
  .tools-list li {
    float: left;
    height: 305px;
  }
  
  .tools-list a {
    display: flex;
    align-items: center;
    flex-flow: column;
  }
  
  .box-body {
    width: 180px;
    background: #fff;
    border-radius: 4px;
    margin: 10px;
    /* margin: 10px; */
    transition: all 0.3s ease-out 0s;
  }
  
  
  /* hover事件 */
  
  .tools-list li:hover .box-body {
    background: #1e262e;
    margin-top: 5px;
    transition: all 0.3s ease-out 0s;
  }
  
  .tools-list li:hover .content-text p {
    color: #fff;
    transition: all 0.3s ease-out 0s;
  }
  
  .tools-list li:hover .content-text span {
    color: #fff;
    transition: all 0.3s ease-out 0s;
  }
  
  .tools-list li:hover img {
    transform: rotate(6deg);
    transition: all 0.3s ease-out 0s;
  }
  
  .tools-list li:hover .cate {
    background: #458cff;
    transition: all 0.3s ease-out 0s;
  }
  
  
  /* hover事件 */
  
  .tools-list li img {
    width: 100px;
    height: 100px;
    margin-top: 20px;
    transition: all 0.3s ease-out 0s;
  }
  
  .content-text {
    margin-bottom: 20px;
  }
  
  .content-text p,
  .content-text span {
    width: 160px;
    display: -webkit-box;
    overflow: hidden;
    line-height: 22px;
    height: 44px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  
  .content-text p {
    color: #1f2d3d;
    font-size: 16px;
    margin-top: 20px;
  }
  
  .content-text span {
    color: #5e6d82;
    font-size: 14px;
    margin-top: 10px;
  }
  
  .cate {
    height: 20px;
    background: #c0ccda;
    padding: 0 8px;
    display: inline-block;
    /* margin-top: 10px; */
    border-radius: 2px;
    color: #fff;
    font-size: 12px;
    line-height: 20px;
    transition: all 0.3s ease-out 0s;
  }
  
  .content-tag {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
  
  .sys-tag {
    height: 16px;
  }
  
  .tag-img {
    width: 16px;
    height: 16px;
    min-width: 16px;
    display: inline-block;
    /* background: #458cff; */
    margin-left: 5px;
  }
  
  .mac {
    background-image: url(~/static/img/mac_icon.svg)
  }
  
  .microsoft {
    background-image: url(~/static/img/wr_icon.svg)
  }
  
  
  /* 工具模块 */
  
  
  /* 文章模块 */
  
  .list {
    /* margin-top: 20px; */
    width: 1200px;
    overflow: hidden;
    display: block;
    margin: 0 auto;
  }
  
  .blogList {
    display: flex;
    padding: 20px 10px;
    border-bottom: 1px solid #F5F7FA;
    transition: all 0.3s ease-out 0s;
  }
  
  .blogList img {
    transition: all 0.3s ease-out 0s;
    width: 160px;
    min-width: 160px;
    height: 120px;
    border-radius: 4px;
    margin-right: 20px;
  }
  
  .blog-text h3 {
    transition: all 0.3s ease-out 0s;
    font-size: 20px;
    color: #1F2D3D;
    letter-spacing: 0;
    font-weight: 400;
  }
  
  .blog-text p {
    transition: all 0.3s ease-out 0s;
    /* font-family: PingFangSC-Regular; */
    font-size: 15px;
    color: #5E6D82;
    letter-spacing: 0;
    line-height: 22px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  
  .blog-text {
    transition: all 0.3s ease-out 0s;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
  
  .text-other {
    transition: all 0.3s ease-out 0s;
    color: #99A9BF;
    font-size: 14px;
    letter-spacing: 0;
    display: flex;
    align-items: center;
  }
  
  .blog-cate {
    transition: all 0.3s ease-out 0s;
    display: inline-block;
    height: 20px;
    padding: 0 10px;
    font-size: 10px!important;
    border-radius: 10px;
    margin-right: 10px;
    line-height: 20px;
    transition: all 0.3s ease-out 0s;
    background: linear-gradient(105deg, #43BFFF 0%, #20A0FF 100%);
    color: #fff;
  }
  
  
  /* hover事件 */
  
  .list:hover .blogList img {
    transition: all 0.3s ease-out 0s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    /* border: #20A0FF solid 1px; */
  }
  
  .list:hover .blogList h3 {
    transition: all 0.3s ease-out 0s;
    color: #20A0FF;
  }
  
  .list:hover .blogList p {
    transition: all 0.3s ease-out 0s;
    color: #1f2d3d;
  }
  
  .list:hover .blog-cate {
    transition: all 0.3s ease-out 0s;
    box-shadow: 0 4px 6px rgba(32, 160, 255, 0.5);
  }
  
  
  /* 文章模块 */
  
  @media screen and (max-width: 760px) {
    /* 公共模块 */
    .box-title {
      width: 100%;
      padding: 0 2%;
    }
    /* 公共模块 */
    /*素材模块*/
    .img-list {
      width: 100%;
    }
    .title-box {
      margin-left: 2%;
    }
    .img-list li {
      margin: 0 2% 4%;
      width: 46%;
    }
    .img-list p a {
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .img-list img {
      display: block;
      width: 100%;
      height: auto;
    }
    /*素材模块*/
    /* 工具模块 */
    .tools-list {
      width: 100%;
    }
    .tools-list li:hover .box-body {
      background: #1e262e;
      margin-top: 0;
      transition: all 0.3s ease-out 0s;
    }
    .tools_format {
      -webkit-overflow-scrolling: touch;
      -webkit-overflow-x: scroll;
      overflow-x: scroll;
      overflow-y: hidden;
    }
    .format_btn {
      width: 220px;
      white-space: nowrap;
    }
    .title-box {
      margin-left: 2%;
    }
    .tools-list li {
      margin: 0 2% 4%;
      width: 46%;
    }
    .box-body {
      width: 100%;
      margin: 0;
    }
    .tools-list p a {
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    /* 工具模块 */
    /* 文章模块 */
    .list{
      width: 100%;
    }
    .tools-list li:hover .box-body {
      background: #1e262e;
      margin-top: 0;
      transition: all 0.3s ease-out 0s;
    }
    /* hover事件 */
    .tools_format {
      -webkit-overflow-scrolling: touch;
      -webkit-overflow-x: scroll;
      overflow-x: scroll;
      overflow-y: hidden;
    }
    .format_btn {
      width: 220px;
      white-space: nowrap;
    }
    /* 博客列表 */
    .blogList img {
      width: 30%;
      min-width: 30%;
      height: 18%;
    }
    .blogList h3 {
      font-size: 18px;
    }
    .blogList p {
      display: none;
    }
    /* 博客列表 */
    /* 文章模块 */
  }
</style>
