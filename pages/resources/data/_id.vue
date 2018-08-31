<template>
  <div class="detailsBody">
    <div class="detailsHeader">
      <div class="detailsTop">
        <!-- <img class="litterImg" :src="litterImg"> -->
        <div class="litterImg" :style="'background-image: url('+ litterImg +');'"></div>
        <div class="detailsTextBox">
          <div class="textTitle">{{projectData.resourcesTitle}}</div>
          <div class="dateAndCopyright">©{{projectData.resourcesCopyright}}</div>
          <div class="detailsTag">
            <a v-for="tag in tags" class="tag" href="javascript:;">{{tag}}</a>
          </div>
        </div>
        <a :href="this.ip + '/media/' + projectData.resourcesDownload">
          <div class="downloadBtn" v-if="author!= 'windy'">
            <div class="btnIcon"></div>
            <div class="btnText">本地下载</div>
          </div>
        </a>
      </div>
    </div>
    <div class="details">
      <div class="detailBody" v-html="projectData.resourcesDetail" style="color:#000!important;"></div>
      <div class="text">如果您觉得本狗做的不错，或者资源对您有用，欢迎任意金额打赏支持</div>
      <div style="display: flex; margin: auto; width: 180px;">
        <a href="javascript:;" @click="showPayBox=!showPayBox">
          <div class="payBtn">赏</div>
        </a>
        <a href="javascript:;" @click="">
          <div class="pinlun">评论</div>
        </a>
      </div>
      <transition name="payBox">
        <div v-if="showPayBox">
          <div class="payBox"></div>
          <div class="payText">打赏将支持作者提供更好的服务与更优质的资源</div>
        </div>
      </transition>
      <!-- <div id="SOHUCS" :sid="projectId"></div> -->
    </div>
  </div>
</template>
<script type="text/javascript">
// import changyan from "@/assets/js/changyan.js"
//引入百度统计
import baidu from 'static/js/baidu.js'
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
      tags:[],
    }
  },
  //自定义头部
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'Windy设计', name: 'Windy设计', content: '武汉UI设计师Windy的个人网站，武汉市UI设计，网页开发，APP设计，交互设计，就找5windy。' },
        { hid: 'description',content:this.projectData.projectSynopsis}
      ]
    }
  },
  created() {
    // //this.showData();
    // this.$nextTick(() => {
    //   this.changyan();
    // });
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
    this.$store.commit('updateNavBarActive', '3');
    document.documentElement.scrollTop = 0;
    //this.changyan();
   this.getResourcesData();
    //默认footer不需要显示0
    this.$store.commit('updateFooterWidth', 0);
  },
  //定义函数
  methods: {
    // refish() {
    //   location.reload();
    // },
    changyan() {
      window.changyan.api.config({
        appid: 'cyt3crepq',
        conf: 'prod_a13b2e3f57b739f379a9d121e340340d'
      });
    },
    //请求设计详情
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
        this.$router.push({ path: '/404' });
      });
    },
  },
  //增加控件
  components: {

  }
}

</script>
<style lang="css">
.tag{
  height: 32px;
  background: #f6f9fa;
  font-size: 14px;
  color:#95a5a6!important;
  line-height: 32px;
  display: inline-block;
  padding: 0 12px;
  border-radius: 4px;
  margin-right: 10px; 
}

.detailsBody {
  padding-bottom: 20px;
}

.detailBody p {
  color: #000;
}

.detailBody div img{
  width: 1080px;
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
  width: 850px;
  min-width: 400px;
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
  position: absolute;
  top: 20px;
  right: 0;
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
  color: $textP;
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

</style>
