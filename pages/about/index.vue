<template>
  <div class="container">
    <!-- 作者模块 -->
    <div class="author-box">
      <div class="author-box-layout">
        <div class="author-img">
          <img src="~/assets/author.jpg" alt="">
        </div>
        <div class="author-text">
          <p class="author-name">Windy</p>
          <span class="author-company">现任职于 东风设计研究院有限公司 高级UI设计师/前端工程师</span>
          <br>
          <span>2011年毕业于武汉轻工大学，艺术设计专业。7年互联网产品开发经验，全栈产品设计师。</span>
          <br>
          <span>拥有APP开发(IOS,Android,WEB)、社交软件开发、企业级网页应用开发、MES、BAS、物联网设计开发等经验。</span>
          <br>
          <span>曾服务于：华晨宝马、东风日产、东风本田、东风特汽等多家知名企业。</span>
        </div>
      </div>
    </div>
    <!-- 作者模块 -->
    <!-- 作品模块 -->
    <div class="bodylist">
      <div class="text-title">
        <h2>作品欣赏</h2>
        <p>Windy作品分类，包含练习</p>
      </div>
      <ul class="img-list">
        <li v-for="item in newList" :key="item.id">
          <div class="thumbnail">
            <a :href="'/project/'+item.pk" target="_blank">
              <img v-lazy="ip +'/media/'+item.fields.picture" :key="item.pk" style="display: inline;">
            </a>
  
          </div>
          <p><a :href="'/project/'+item.pk" target="_blank">{{item.fields.title}}</a></p>
        </li>
      </ul>
      <not-found v-if="notfound"></not-found>
      <div class="pagination">
        <el-pagination background @current-change="handleCurrentChange" :page-size="20" layout="total,prev, pager, next" :total="designList.length" style="margin-left: 5px;white-space: normal;" :current-page.sync="currentPage"></el-pagination>
      </div>
    </div>
    <!-- 作品模块 -->
  </div>
</template>

<script>
  //引入百度统计
  import baidu from 'static/js/baidu.js'
  
  export default {
    //该页面的控制数据
    data() {
      return {
        //ip地址
        ip: this.$store.state.ip,
  
        //传过来的值
        resourcesCate: this.$route.query.resourcesCate,
        //素材列表
        designList: [],
        //新分页素材列表
        newList: [],
        //是否显示notfound
        notfound: false,
        //分页当前页数
        currentPage: 1,
  
      }
    },
    //自定义头部
    head() {
      return {
        title: "有爱设计,5Windy。",
        meta: [{
            hid: '有爱设计',
            name: 'keywords',
            content: '有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发'
          },
          {
            hid: '有爱设计',
            name: 'description',
            content: this.about
          },
          {
            hid: '有爱设计',
            name: 'description',
            content: '欢迎来到windy的设计小站，这里有各种各样的素材，这里接各种各样的APP、网站设计外包。这里可以找到从初学者到设计师的心得体会教程，欢迎来我的家里寻找吧。'
          },
        ],
        link: [{
          rel: "canonical",
          href: "https://5windy.com/"
        }]
      }
    },
    //进入页面执行的函数
    mounted() {
      document.documentElement.scrollTop = 0;
      this.$store.commit('updateNavBarActive', '3');
  
      baidu.baidu("有爱首页");
  
      //获取素材列表
      this.getDesignList();
  
  
      //默认footer需要显示1
      this.$store.commit('updateFooterWidth', 1);
    },
    //定义函数
    methods: {
      //请求分类列表
      getDesignList() {
        //获取projectId
        let params = 0;
        //let params = localStorage.getItem("projectId");
        this.$store.dispatch('getDesignList', params).then((response) => {
          let res = response.data;
          if (res.state != "err") {
            this.designList = res;
            this.toListData(0, 20);
          } else {
            // alert("网络错误")
            this.notfound = true;
          }
        }).catch((err) => {
          console.error(err);
          this.$router.push({
            path: '/404'
          });
        });
      },
  
  
  
      //点击翻页
      handleCurrentChange(val) {
        //console.log(`当前页: ${nowPage}`);
        this.toListData((val - 1) * 20, val * 20);
        //回到顶部
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      },
  
  
      //将列表传8条到listData
      toListData(start, end) {
        this.newList = this.designList.slice(start, end);
      },
  
  
  
    },
  
    components: {
  
    }
  }
</script>

<style scoped lang="css">
  @import '~/assets/css/index.css';
  .text-title {
    margin: 40px auto;
    text-align: center;
  }
  
  .text-title h2,
  p {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }
  
  .text-title h2 {
    font-size: 24px;
    color: #1f2d3d;
    margin-bottom: 10px;
    font-weight: 400;
  }
  
  .text-title p {
    color: #8492A6;
    font-weight: 350;
    font-size: 14px;
  }
  
  .bodylist {
    width: 1180px;
    overflow: hidden;
    margin: 0 auto;
  }
  
  .title-box {
    margin-top: 20px;
    font-size: 24px;
    color: #333;
  }
  
  .img-list {
    margin-top: 20px;
    overflow: hidden;
  }
  
  .img-list li {
    float: left;
    margin: 0 20px 20px 0;
  }
  
  .img-list img:hover {
    transition: all 0.3s ease-out 0s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  
  .img-list li a,
  .plugin-list li a,
  .video-list li a,
  .tool-list li a {
    display: block;
    line-height: 0;
  }
  
  .img-list p a,
  .plugin-list p a,
  .video-list p a,
  .tool-list p a {
    margin-top: 15px;
    font-size: 16px;
    line-height: 16px;
    width: 280px;
    overflow: hidden;
    /*内容超出宽度时隐藏超出部分的内容 */
    text-overflow: ellipsis;
    /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    white-space: nowrap;
    /*不换行 */
  }
  
  .img-list img {
    width: 280px;
    height: 210px;
    border-radius: 4px;
    outline: none;
    transition: all 0.3s ease-out 0s;
  }
  
  .img-list li:nth-child(4n),
  .plugin-list li:nth-child(4n),
  .video-list li:nth-child(4n),
  .tool-list li:nth-child(5n) {
    margin-right: 0;
  }
  
  .img-list .thumbnail .info,
  .plugin-list .thumbnail .info,
  .tool-list .thumbnail .info {
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
  
  .pagination {
    padding: 10px 0;
  }
  
  @media screen and (max-width: 760px) {
    .bodylist {
      width: 100%;
    }
    .img-list p a,
    .plugin-list p a,
    .video-list p a {
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .design_format {
      margin-left: 2%;
    }
    .title-box {
      margin-left: 2%;
    }
    .img-list li {
      margin: 0 2% 4%;
      width: 46%;
    }
    .img-list img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
</style>
