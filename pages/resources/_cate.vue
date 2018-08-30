<template>
  <div class="homeBody">
    <scroll-bar></scroll-bar>
    <div class="container">
      <h2 class="title-box">素材</h2>
      <ul class="img-list">
        <li v-for="item in resourcesList">
          <div class="thumbnail">
            <a href="javascript:;" target="_blank">
            <img :data-original="ip +'/media/'+item.resourcesImg" :src="ip +'/media/'+item.resourcesImg" style="display: inline;">
          	</a>
            <div class="info">
            </div>
          </div>
          <p><a href="javascript:;" target="_blank">{{item.resourcesTitle}}</a></p>
        </li>

      </ul>
      <not-found v-if="resourcesList==''"></not-found>
    </div>
  </div>
</template>
<script type="text/javascript">
//引入百度统计
import baidu from 'static/js/baidu.js'
import ScrollBar from '~/components/scroll_bar.vue' //通知栏
import notFound from '~/components/not_found.vue' //通知栏
export default {

  //该页面的控制数据
  data() {
    return {
      //ip地址
      ip: this.$store.state.ip,
      //传过来的值
      resourcesCate: this.$route.query.resourcesCate,
      //素材列表
      resourcesList: [],
    }
  },
  //自定义头部
  head() {
    return {
      title: "UI设计素材下载",
      meta: [
        { hid: 'Windy设计', name: 'Windy设计', content: '武汉UI设计师Windy的个人网站，武汉市UI设计，网页开发，APP设计，交互设计，就找5windy。' },
        { hid: 'description', content: 'sketch素材。sketch资源。sketch下载。' }
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
    this.$store.commit('updateNavBarActive', '3');
    //百度统计
    baidu.baidu("我的素材");
    //默认footer需要显示1
    this.$store.commit('updateFooterWidth', 1);
    //获取列表
    this.getResourcesList();
  },
  //定义函数
  methods: {
    //请求分类列表
    getResourcesList() {
      //如果projectId没有传过来，或者没有
      if (this.resourcesCate === undefined) {
        //获取该页面URL最后一个数字，并赋值给这个页面的id
        let aaa = String(window.location.href.split('/').pop());
        this.resourcesCate = aaa;
      };
      //获取projectId
      let params = this.resourcesCate;
      //let params = localStorage.getItem("projectId");
      this.$store.dispatch('getResourcesList', params).then((response) => {
        let res = response.data;
        if (res.state!="err") {
          this.resourcesList = res;
        } else {
          // alert("网络错误")
          this.resourcesList = [];
        }
      }).catch((err) => {
        console.error(err);
        this.$router.push({ path: '/404' });
      });
    },
  },
  //增加控件
  components: {
    ScrollBar,
    notFound,
  }
}

</script>
<style scoped lang="css">
.container,
.tool-container {
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


@media screen and (max-width: 760px) {
  .container {
    width: 100%;
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
