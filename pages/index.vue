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
          <span>2011年毕业于武汉轻工大学，艺术设计专业。7年互联网产品开发经验，全栈产品设计师。
</span>
          <br>
          <span>拥有APP开发(IOS,Android,WEB)、社交软件开发、企业级网页应用开发、MES、BAS、物联网设计开发等经验。
</span>
          <br>
          <span>曾服务于：华晨宝马、东风日产、东风本田、东风特汽等多家知名企业。</span>
        </div>
      </div>
    </div>
    <!-- 作者模块 -->
    <!-- 案例模块 -->
    <div class="showcase-box">
      <div class="showcase-box-layout">
        <div class="index-title showcase-box-header">
          <div>
            <p>案例</p>
            <span>SHOWCASE</span>
          </div>
          <div class="index-title-right">
            <a href="/project">
              <span style="font-size: 16px;color: #20A0FF;">更多></span>
            </a>
          </div>
        </div>
        <div class="showcase-box-content">
          <!-- 每个案例 -->
          <a :href="'/project/'+list.caseId" v-for="list in caseList" target="_blank" @click="openDetails(list.caseId)">
            <div class="case-content">
              <div class="case-img">
                <img :src="''+ ip +'/media/' + list.caseImg " alt="">
              </div>
              <div class="case-title">
                <div class="case-title-text">
                  <p>{{list.caseTitle}}</p>
                  <span>{{list.caseDate}}</span>
                </div>
                <div class="case-more">
                  <div class="case-more-icon">
                    <img src="~/assets/img/icons/right-icon.svg" width="24">
                  </div>
                </div>
              </div>
            </div>
          </a>
          <!-- 每个案例 -->
          <div class="index-title-bottom">
            <a href="/project">
              <span style="font-size: 20px;color: #20A0FF;">更多案例 ></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 案例模块 -->
    <!-- 技能模块 -->
    <div class="skill-box">
      <div class="skill-box-layout">
        <div class="index-title showcase-box-header">
          <div>
            <p>技能</p>
            <span>SKILL</span>
          </div>
        </div>
        <div class="skill-box-content gray">
          <p class="skill-title">产品分析</p>
          <div class="skill-list">
            <img src="~/assets/img/skillImg/xmind.png" alt="">
            <img src="~/assets/img/skillImg/axure.png" alt="">
            <img src="~/assets/img/skillImg/ppt.png" alt="">
            <img src="~/assets/img/skillImg/word.png" alt="">
            <img src="~/assets/img/skillImg/excel.png" alt="">
          </div>
          <p class="skill-title">UI设计</p>
          <div class="skill-list">
            <img src="~/assets/img/skillImg/sketch.png" alt="">
            <img src="~/assets/img/skillImg/ps.png" alt="">
            <img src="~/assets/img/skillImg/ai.png" alt="">
            <img src="~/assets/img/skillImg/c4d.png" alt="">
          </div>
          <p class="skill-title">程序开发</p>
          <div class="skill-list">
            <img src="~/assets/img/skillImg/vue.png" alt="">
            <img src="~/assets/img/skillImg/django.png" alt="">
            <img src="~/assets/img/skillImg/jquery.png" alt="">
          </div>
          <div style="height:20px;"></div>
          <p class="skill-title">还有...</p>
          <div class="skill-list">
            <img src="~/assets/img/skillImg/wow.png" alt="">
            <img src="~/assets/img/skillImg/sc.png" alt="">
            <img src="~/assets/img/skillImg/db.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 技能模块 -->
    <!-- 我能做什么？ -->
    <div class="service-box">
      <div class="service-box-layout">
        <div class="index-title service-box-header">
          <div>
            <p>我能做什么？</p>
            <span>What can I do?</span>
          </div>
        </div>
        <div class="service-box-content">
          <el-carousel indicator-position="none" height="139px" :interval="5000">
            <el-carousel-item>
              <a href="javascript:;" target="_blank">
                <p class="service_img"><img src="http://resources.jsmo.xin/templates/upload/27/201510/1444723833387.png" width="320" height="120" alt=" Web App 应用产品解决方案"></p>
                <div class="service_info">
                  <p class="title"> 产品开发管理</p>
                  <p class="description">产品文档，需求文档，高/低保真原型设计，需求分析，架构分析，开发周期管理。</p>
                </div>
              </a>
            </el-carousel-item>
            <el-carousel-item>
              <a href="javascript:;" target="_blank">
                <p class="service_img"><img src="http://resources.jsmo.xin/templates/upload/27/201510/144472384617.png" width="320" height="120" alt="移动应用产品解决方案"></p>
                <div class="service_info">
                  <p class="title">移动APP设计开发</p>
                  <p class="description">APP开发 视觉设计 UI/UX设计 微信公众平台，HTML5手机站，如果您有任何需要，可随时联系我。</p>
                </div>
              </a>
            </el-carousel-item>
            <el-carousel-item>
              <a href="javascript:;" target="_blank">
                <p class="service_img"><img src="http://resources.jsmo.xin/templates/upload/27/201510/1444723858872.png" width="320" height="120" alt="网站及网络产品解决方案"></p>
                <div class="service_info">
                  <p class="title">Web Develop</p>
                  <p class="description">我是一个网页开发者，我能使用vue.js进行网页开发，能使用Django进行后台开发。</p>
                </div>
              </a>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="index-more">
        </div>
      </div>
    </div>
    <!-- 我能做什么？ -->
    <!-- 关于本站 -->
    <div class="about-box">
      <div class="about-box-layout">
        <div class="index-title showcase-box-header">
          <div>
            <p>关于本站</p>
            <span>ABOUT THIS WEB</span>
          </div>
        </div>
        <div class="about-box-content">
          <div>
            <p class="">
              欢迎来到我的个人网站。我是一名网站设计者，同时也是网站开发者。本网站也是我的一个学习项目，也是我的项目展示平台。
            </p>
            <p class="">
              本网站数据库采用MySQL，后台使用python的Django框架，前端使用vue.js作为展示层。是现在比较流行的MVVM架构模式。
            </p>
            <p class="">
              大家可以很直观的从本网站了解到本人的产品设计能力，产品开发能力以及产品规划能力。
            </p>
            <p class="">
              若有什么意见和建议或者合作的想法，欢迎点击右上角联系本人。谢谢大家。
            </p>
          </div>
          <div>
            <img src="~/assets/img/about.png">
          </div>
        </div>
      </div>
    </div>
    <!-- 关于本站 -->
    <!-- 博客模块 -->
    <div class="blog-box">
      <div class="blog-box-layout">
        <div class="index-title showcase-box-header">
          <div>
            <p>博客</p>
            <span>BLOG</span>
          </div>
        </div>
        <div class="blog-box-content">
          <!-- 每个文章模块 -->
          <a href="javascript:;">
            <div class="blog-content">
              <div class="blog-text">
                <h4>Windy后台初步完成，已经进入测试阶段</h4>
                <p>千呼万唤始出来，千树万树梨花开。等了这么久，勤劳的技术哥哥马不停蹄的敲着代码，终于5windy的后台与进入初步完成，已经duang</p>
              </div>
              <div class="blog-date">
                <div class="blog-date-text">
                  <div>
                    <h2>08-05</h2>
                    <p>2018</p>
                  </div>
                  <div class="case-more more-style" style="margin:0;">
                    <div class="case-more-icon ">
                      <img src="~/assets/img/icons/right-icon.svg" width="24">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <!-- 每个文章模块 -->
          <!-- 每个文章模块 -->
          <a href="javascript:;">
            <div class="blog-content">
              <div class="blog-text">
                <h4>Windy后台初步完成，已经进入测试阶段</h4>
                <p>千呼万唤始出来，千树万树梨花开。等了这么久，勤劳的技术哥哥马不停蹄的敲着代码，终于5windy的后台与进入初步完成，已经duang</p>
              </div>
              <div class="blog-date">
                <div class="blog-date-text">
                  <div>
                    <h2>08-05</h2>
                    <p>2018</p>
                  </div>
                  <div class="case-more more-style" style="margin:0;">
                    <div class="case-more-icon ">
                      <img src="~/assets/img/icons/right-icon.svg" width="24">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <!-- 每个文章模块 -->
          <!-- 每个文章模块 -->
          <a href="javascript:;">
            <div class="blog-content">
              <div class="blog-text">
                <h4>Windy后台初步完成，已经进入测试阶段</h4>
                <p>千呼万唤始出来，千树万树梨花开。等了这么久，勤劳的技术哥哥马不停蹄的敲着代码，终于5windy的后台与进入初步完成，已经duang</p>
              </div>
              <div class="blog-date">
                <div class="blog-date-text">
                  <div>
                    <h2>08-05</h2>
                    <p>2018</p>
                  </div>
                  <div class="case-more more-style" style="margin:0;">
                    <div class="case-more-icon ">
                      <img src="~/assets/img/icons/right-icon.svg" width="24">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <!-- 每个文章模块 -->
        </div>
      </div>
    </div>
    <!-- 博客模块 -->
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
      caseList: [],
    }
  },
  //自定义头部
  head() {
    return {
      title: "武汉UI设计/APP设计/WEB开发/系统开发/软件设计 Windy。",
      meta: [
        { hid: 'Windy设计', name: 'Windy设计', content: '武汉UI设计师Windy的个人网站，武汉市UI设计，网页开发，APP设计，交互设计，就找5windy。' }
      ]
    }
  },
  //进入页面执行的函数
  mounted() {
    document.documentElement.scrollTop = 0;
    this.$store.commit('updateNavBarActive', '1');
    this.getCaseList();
    baidu.baidu("我的首页");
    //默认footer需要显示1
    this.$store.commit('updateFooterWidth', 1);
  },
  //定义函数
  methods: {
    //请求设计列表
    getCaseList() {
      //this.params.touser = this.$store.state.userNameList;
      let params = "";
      this.$store.dispatch('getCaseList', params).then((response) => {
        let res = response.data;
        if (response.statusText === "OK" && response.status === 200) {
          //console.log(res);
          this.caseList = res;

        } else {
          alert("网络错误")
        }
      }).catch((err) => {
        console.error(err);
      });
    },
    //打开详情页
    openDetails(index) {
      localStorage.setItem("projectId", index);
    },
  },
  components: {

  }
}

</script>
<style scoped lang="css">
@import '~/assets/css/index.css';

</style>
