<template>
  <div class="homeBody">
    <div class="bg">
      <div class="bg-box">
        <div class="bg-img">
          <img src="~/assets/img/artwork.png" alt="">
        </div>
        <div class="bg-right">
          <div class="bg-text">
            <h3>哎呀！404错误，页面找不到了。</h3>
            <p>不过没关系，返回首页或者后退就可以了…</p>
            <p class="countDown"><span id="mysetTimeout">5</span>s 后自动返回首页。</p>
          </div>
          <div class="bg-btn">
            <a href="/">
              <div class="user-btn return-index">
                <img src="~/assets/img/return-icon.svg" alt="">
                <p>返回首页</p>
              </div>
            </a>
            <a href="JavaScript:;">
              <div class="user-btn refresh" @click="refresh_page()">
                <img src="~/assets/img/refresh-icon.svg" alt="">
                <p>刷新一下</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
//引入百度统计
import baidu from 'static/js/baidu.js'

export default {

  //该页面的控制数据
  data() {
    return {}
  },
  //自定义头部
  head() {
    return {
      title: "404",
      meta: [
        { hid: 'Windy设计', name: 'Windy设计', content: '武汉UI设计师Windy的个人网站，武汉市UI设计，网页开发，APP设计，交互设计，就找5windy。' }
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
    //百度统计
    baidu.baidu("404");
    //倒计时
    this.shijian();
    setTimeout(function() {
      window.top.location.href = "/";
    }, 5000);
    //默认footer需要显示1
    this.$store.commit('updateFooterWidth', 1);
  },
  //定义函数
  methods: {
    shijian() { //从5s开始倒计时  
      var tempshijian = 5;
      var I = setInterval(function() {
        if (tempshijian != 0) {
          tempshijian--;
          document.getElementById("mysetTimeout").innerHTML = tempshijian;
        }
      }, 1000);
    },
    refresh_page() {
      location.reload();
    }
  },
  //增加控件
  components: {

  }
}

</script>
<style scoped lang="css">
.homeBody {}

.bg {
  height: 600px;
  width: 100%;
  background-image: -webkit-linear-gradient(20deg, rgba(255, 255, 255, 0.00) 0%, #E6EAEE 100%);

  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-img img {
  max-width: 745px;
  max-height: 502px;
}

.bg-text h3 {

  font-size: 42px;
  color: #302C48;
  letter-spacing: 0;
  margin-bottom: 40px;
}

.countDown {
  color: #5E6D82!important;
}

.bg-text p {
  font-size: 20px;
  color: #302C48;
  letter-spacing: 0;
  margin-top: 20px;
}



.bg-right {
  max-width: 467px;
  margin-left: 50px;
}

.bg-box {
  display: flex;
  align-items: center;
}

.user-btn {

  margin-top: 40px;
  width: 160px;
  height: 40px;
  color: #fff;
  font-size: 18px;
  font-weight: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.return-index {
  background: #686B89;
  box-shadow: 0 4px 12px 0 rgba(31, 38, 50, 0.28);
  border-radius: 89px;
}

.refresh {
  background: #337FDE;
  box-shadow: 0 4px 12px 0 rgba(31, 38, 50, 0.28);
  border-radius: 89px;
  margin-left: 20px;
}

.bg-btn {
  display: flex;
}

.user-btn img {
  margin-right: 10px;
}

.user-btn p {
  margin: 0;
}

</style>
