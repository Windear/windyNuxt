<template>
  <div class="detailsBody">
    <div class="detailsHeader">
      <div class="detailsTop">
        <!-- <img class="litterImg" :src="litterImg"> -->
        <div class="litterImg" :style="'background-image: url('+ litterImg +');'"></div>
        <div class="detailsTextBox">
          <div class="textTitle">{{projectData.resourcesTitle}}</div>
          <div class="dateAndCopyright">© {{projectData.resourcesCopyright}}</div>
          <div class="detailsTag">
            <a v-for="tag in tags" :key="tag.id" class="tag" href="javascript:;" @click="searchTag(tag)">{{tag}}</a>
          </div>
        </div>
        <div class="btn-box">
          <a :href="this.ip + '/media/' + projectData.resourcesDownload" class="download" v-if="author!= 'windy'" @click="getResourcesDownloads()">
            <div class="downloadBtn">
              <div class="btnIcon"></div>
              <div class="btnText">本地下载</div>
            </div>
          </a>
          <a href="javascript:;" class="baiducloud" @click="dialogVisible = true"></a>
        </div>
      </div>
    </div>
    <div class="details">
      <div class="detailBody" v-html="projectData.resourcesDetail" style="color:#000!important;"></div>
      <div class="text">如果您觉得本狗做的不错，或者资源对您有用，欢迎任意金额打赏支持</div>
      <div style="display: flex; margin: auto; width: 180px;">
        <a href="javascript:;" @click="showPayBox=!showPayBox">
          <div class="payBtn">赏</div>
        </a>
        <!-- <a href="javascript:;">
          <div class="pinlun">评论</div>
        </a> -->
      </div>
      <transition name="payBox">
        <div v-if="showPayBox">
          <div class="payBox"></div>
          <div class="payText">打赏将支持作者提供更好的服务与更优质的资源</div>
        </div>
      </transition>
      <!-- <div id="SOHUCS" :sid="projectId"></div> -->
  
      <div id="SOHUCS" :sid="projectData.sid"></div>
  
    </div>
    <!-- 弹出框 -->
    <el-dialog title="网盘下载" :visible.sync="dialogVisible" width="40%" custom-class="cloud_dialog">
  
      <div class="cloud_down" v-if="cloudDown!=0" v-for="(item,key) in cloudDown" :key="item.id">
        <div class="baiduyun" v-if="item.drive_type==1">
          <img src="~/static/img/cloud.png" width="20px"><span>百度云盘</span>
        </div>
        <p v-if="item.drive_pw">提取码"{{item.drive_pw}}"<a href="javascript:;" class="clipboard-btn" v-clipboard="item.drive_pw" @success="onCopy(key)" @error="onError(key)"><span v-if="clipboardVal!=key&&clipboardVal!='err'">点击复制</span><span class="clipboardVal-success" v-if="clipboardVal==key">复制成功</span><span v-if="clipboardVal=='err'">复制失败，请自行复制</span></a></p>
        <p v-if="!item.drive_pw">该资源可直接下载</p>
        <a :href="item.drive_url" target="_blank" @click="getResourcesDownloads()">
          <el-button type="primary" size="mini">前往下载</el-button>
        </a>
      </div>
  
      <span v-if="cloudDown==0">此资源没有网盘链接哟~不好意思呀。</span>
    </el-dialog>
    <!-- 弹出框 -->
  </div>
</template>

<script type="text/javascript">
  //引入百度统计
  import baidu from 'static/js/baidu.js'
  //引入畅言
  import changyan from 'static/js/changyan.js'
  export default {
  
    //该页面的控制数据
    data() {
      return {
        //ip地址
        ip: this.$store.state.ip,
        //首页列表中传来的projectId参数
        projectId: this.$route.query.projectId,
        //projectId: localStorage.getItem("projectId"),
  
        //是否显示打赏二维码
        showPayBox: false,
        //项目使用的数据`
        projectData: "",
        litterImg: {},
        //作者
        author: "",
        //title页面标题
        title: "windy设计详情",
        //该素材的tag
        tags: [],
        //网盘下载地址
        cloudDown: [],
        //是否显示弹出框
        dialogVisible: false,
        //复制剪切板按钮文字
        clipboardVal: 'no',
      }
    },
    //自定义头部
    head() {
      return {
        title: this.title,
        meta: [{
            hid: '有爱设计',
            name: 'keywords',
            content: '有爱设计,武汉UI设计,武汉程序开发,APP开发,UI设计,UI素材,Sketch素材,PSD素材,XD素材,设计师学程序开发'
          },
          {
            hid: '有爱设计',
            name: 'description',
            content: this.projectData.projectSynopsis
          },
          {
            hid: '有爱设计',
            name: 'description',
            content: '欢迎来到windy的设计小站，这里有各种各样的素材，这里接各种各样的APP、网站设计外包。这里可以找到从初学者到设计师的心得体会教程，欢迎来我的家里寻找吧。'
          }
  
        ]
      }
    },
    created() {
  
    },
    //父控件传过来的参数
    props: {
  
    },
    //监听函数
    computed: {
      bodyWidth() {
        return this.$store.getters.getBodyWidth;
      }
    },
    //进入页面执行的函数
    mounted() {
      //百度统计
      baidu.baidu("素材详情");
      //传入navBar的选择状态
      this.$store.commit('updateNavBarActive', '2');
      document.documentElement.scrollTop = 0;
      //this.changyan();
      this.getResourcesData();
      this.getResourcesCloud();
      //访问量
      this.getResourcesLooked();
      //默认footer不需要显示0
      this.$store.commit('updateFooterWidth', 0);
      //畅言
      changyan.changyan();
    },
    //定义函数
    methods: {
      //请求素材详情
      getResourcesData() {
        //如果projectId没有传过来，或者没有
        if (this.projectId === undefined) {
          //获取该页面URL最后一个数字，并赋值给这个页面的id
          let aaa = String(window.location.href.split('/').pop());
          this.projectId = aaa;
        };
        //获取projectId
        let params = this.projectId;
        //let params = localStorage.getItem("projectId");
        this.$store.dispatch('getResourcesData', params).then((response) => {
          let res = response.data;
          if (response.statusText === "OK" && response.status === 200) {
            //console.log(res);
            this.projectData = res;
            this.author = this.projectData.resourcesCopyright.toLowerCase();
            this.litterImg = this.ip + '/media/' + this.projectData.resourcesPic;
            //传入页面标题
            this.title = res.resourcesTitle;
            //将标签tag转为数组传入data
            this.tags = res.resourcesTag.split(",");
          } else {
            alert("网络错误")
          }
        }).catch((err) => {
          console.error(err);
          this.$router.push({
            path: '/404'
          });
        });
      },
      //请求素材网盘地址
      getResourcesCloud() {
        //如果projectId没有传过来，或者没有
        if (this.projectId === undefined) {
          //获取该页面URL最后一个数字，并赋值给这个页面的id
          let aaa = String(window.location.href.split('/').pop());
          this.projectId = aaa;
        };
        //获取projectId
        let params = this.projectId;
        //let params = localStorage.getItem("projectId");
        this.$store.dispatch('getResourcesCloud', params).then((response) => {
          let res = response.data;
          if (res.state != "err") {
            //console.log(res);
            this.cloudDown = res;
          } else {
            this.cloudDown = 0;
          }
        }).catch((err) => {
          console.error(err);
          //this.$router.push({ path: '/404' });
        });
      },
      //素材访问量
      getResourcesLooked() {
        //如果projectId没有传过来，或者没有
        if (this.projectId === undefined) {
          //获取该页面URL最后一个数字，并赋值给这个页面的id
          let aaa = String(window.location.href.split('/').pop());
          this.projectId = aaa;
        };
        //获取projectId
        let params = this.projectId;
        //let params = localStorage.getItem("projectId");
        this.$store.dispatch('getResourcesLooked', params).then((response) => {
          let res = response.data;
          //以后有需要添加显示浏览量
        }).catch((err) => {
          console.error(err);
          //this.$router.push({ path: '/404' });
        });
      },
      //素材下载量
      getResourcesDownloads() {
        //如果projectId没有传过来，或者没有
        if (this.projectId === undefined) {
          //获取该页面URL最后一个数字，并赋值给这个页面的id
          let aaa = String(window.location.href.split('/').pop());
          this.projectId = aaa;
        };
        //获取projectId
        let params = this.projectId;
        //let params = localStorage.getItem("projectId");
        this.$store.dispatch('getResourcesDownloads', params).then((response) => {
          let res = response.data;
          //以后有需要添加显示浏览量
        }).catch((err) => {
          console.error(err);
          //this.$router.push({ path: '/404' });
        });
      },
      //弹出框函数
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      //剪切板复制成功
      onCopy(key) {
        this.clipboardVal = key;
      },
      // 复制失败
      onError(e) {
        this.clipboardVal = 'err';
      },
      //搜索标签
      searchTag(tag){
        this.$store.commit('updateSearchVal', tag);
        this.$router.push({
          path: '/search' + '?q=' + tag
        });
      },
    },
    //增加控件
    components: {
  
    }
  }
</script>

<style lang="css">
@import '~/static/css/noAd.css';
  .tag {
    height: 32px;
    background: #f6f9fa;
    font-size: 14px;
    color: #95a5a6!important;
    line-height: 32px;
    display: inline-block;
    padding: 0 12px;
    border-radius: 4px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  
  .detailsBody {
    padding-bottom: 20px;
  }
  
  .detailBody p {
    color: #000;
  }
  
  .detailBody img {
    max-width: 1080px;
  }
  
  .detailsHeader {
    background-color: #fff;
    width: 100%;
    padding: 20px 40px;
  }
  
  .detailsTop {
    min-width: 1024px;
    width: 1180px;
    height: 240px;
    margin: auto;
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .litterImg {
    width: 300px;
    height: 200px;
    border-radius: 4px;
    background-color: #D3DCE6;
    background-size: 100%;
  }
  
  .detailsTextBox {
    height: 200px;
    margin-left: 30px;
    min-width: 400px;
    width: 840px;
  }
  
  .textTitle {
    font-size: 24px;
    color: #1f2d3d;
  }
  
  .dateAndCopyright {
    font-size: 16px;
    color: #8492A6;
    margin: 10px 0;
  }
  
  .textSynopsis {
    font-size: 16px;
    color: #475669;
    font-weight: 400;
  }
  
  .downloadBtn {
    width: 160px;
    height: 44px;
    background-color: #458CFF;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-out 0s;
  }
  
  .downloadBtn:hover {
    background-color: #629DFF;
    transition: all 0.3s ease-out 0s;
  }
  
  .btnIcon {
    width: 20px;
    height: 20px;
    background-image: url(~/assets/img/downloadIcon.png);
    background-size: 100%;
  }
  
  .btnText {
    color: #fff;
    font-size: 16px;
    margin-left: 5px;
  }
  
  .details {
    width: 1260px;
    margin: 20px auto 0;
    padding: 40px 0;
    background-color: #fff;
    border-radius: 4px;
    text-align: center;
  }
  
  .detailsPic {
    width: 1180px;
    margin: auto;
    background-color: #D3DCE6;
    display: block;
  }
  
  .text {
    font-size: 16px;
    color: #8492A6;
    margin: 30px 0;
  }
  
  .payBtn {
    width: 80px;
    height: 80px;
    color: #fff;
    background: #FFB53D;
    font-size: 24px;
    border-radius: 44px;
    text-align: center;
    line-height: 76px;
    transition: all 0.3s ease-out 0s;
    margin: auto;
  }
  
  .pinlun {
    width: 80px;
    height: 80px;
    color: #fff;
    background: #458CFF;
    font-size: 18px;
    border-radius: 44px;
    text-align: center;
    line-height: 76px;
    transition: all 0.3s ease-out 0s;
    margin-left: 20px;
  }
  
  .pinlun:hover {
    background: #186FFF;
    transition: all 0.3s ease-out 0s;
  }
  
  .payBox {
    width: 360px;
    height: 220px;
    background-size: 100%;
    background-image: url(~/assets/img/payMoney.png);
    margin: 40px auto 10px;
  }
  
  .payBtn:hover {
    background: #F7A216;
    transition: all 0.3s ease-out 0s;
  }
  
  .payText {
    font-size: 16px;
    color: #8492A6;
    margin: 20px 0;
  }
  
  .payBox-enter-active {
    transition: all .5s ease .2s;
  }
  
  .payBox-leave-active {
    transition: all .5s cubic-bezier(1.0, 2, 0.8, 1.0);
    animation: reverse;
  }
  
  .payBox-enter,
  .payBox-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */
  
  {
    transform: translateX(150px);
    opacity: 0;
  }
  
  @keyframes payBox-in {
    0% {
      opacity: 0%;
    }
    10% {
      opacity: 10%;
    }
    20% {
      opacity: 20%;
    }
    50% {
      opacity: 50%;
    }
    100% {
      opacity: 100%;
    }
  }
  
  .btn-box {
    display: flex;
    position: absolute;
    top: 20px;
    right: 0;
  }
  
  .download {
    display: inline-block;
  }
  
  .baiducloud {
    display: inline-block;
    width: 45px;
    height: 45px;
    margin-left: 10px;
    background: url(~/static/img/cloud.png) no-repeat 50% 50% / 22px 22px;
    font-size: 0;
    vertical-align: middle;
    border: 1px solid #458CFF;
    border-radius: 4px;
  }
  
  
  /*网盘弹窗*/
  
  .cloud_dialog {
    min-width: 320px;
  }
  
  .cloud_down {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .cloud_down p {
    line-height: 20px;
    color: #00C58C;
  }
  
  .baiduyun {
    display: flex;
    align-items: center;
  }
  
  .baiduyun span {
    margin-left: 10px;
    line-height: 20px;
    display: inline-block;
  }
  
  .clipboard-btn:link {
    color: #458CFF;
    text-decoration: underline;
    margin-left: 20px;
  }
  
  .clipboardVal-success {
    color: #00C58C;
  }
  
  
  /*网盘弹窗*/
</style>
